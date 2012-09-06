/* This is a unpacked Oskari bundle (bundle script version Wed Mar 07 2012 13:45:05 GMT+0200 (Suomen normaaliaika)) */ 
/**
 * @class Oskari.poc.yuilibrary.bundle.LayerSelectionBundleInstance
 * 
 * http://yuilibrarytoolkit.org/documentation/tutorials/1.7/dom_functions/
 * 
 * 
 * 
 */
Oskari.clazz
		.define(
				"Oskari.poc.yuilibrary.bundle.LayerSelectionBundleInstance",
				function() {
					this.map = null;
					this.core = null;
					this.sandbox = null;
					this.mapmodule = null;
					this.started = false;
					this.template = null;
					this.plugins = {};
					
					/**
					 * @property injected yuilibrary property (by bundle)
					 */
					this.yuilibrary = null;

				},
				{
					/**
					 * @static
					 * @property __name
					 * 
					 */
					__name : 'YUILibraryLayerSelection',
					"getName" : function() {
						return this.__name;
					},
					
					/**
					 * @method getSandbox
					 * 
					 */
					getSandbox: function() {
						return this.sandbox;
					},

					/**
					 * @method start
					 * 
					 * implements BundleInstance start methdod
					 * 
					 * Note this is async as DOJO requires are resolved and
					 * notified by callback
					 * 
					 */
					"start" : function() {
						var me = this;

						if (me.started)
							return;

						me.started = true;

						var sandbox = Oskari.$("sandbox");
						me.sandbox = sandbox;

						
						sandbox.register(me);
						for (p in me.eventHandlers) {
							sandbox.registerForEventByName(me, p);
						}
						
						/**
						 * Let's extend UI 
						 */
						var request = 
							sandbox.getRequestBuilder('userinterface.AddExtensionRequest')(this);
						
						sandbox.request(this,request);

						
						/**
						 * let's yuilibrary me
						 */
						me.mediator.bundle.require(function(yuilibrary) {

							me.yuilibrary = yuilibrary;

							me.refresh();
						});

					},

					"init" : function() {
						return null;
					},

					/**
					 * @method update
					 * 
					 * implements bundle instance update method
					 */
					"update" : function() {

					},

					

					

					/**
					 * @method onEvent
					 */
					onEvent : function(event) {

						var handler = this.eventHandlers[event.getName()];
						if (!handler)
							return;

						return handler.apply(this, [ event ]);

					},

					/**
					 * @property eventHandlers
					 * @static
					 * 
					 */
					eventHandlers : {
						'AfterMapLayerAddEvent' : function(event) {
							this.refresh();
						},

						/**
						 * @method AfterMapLayerRemoveEvent
						 */
						'AfterMapLayerRemoveEvent' : function(event) {
							this.refresh();
						},

						/**
						 * @method AfterMapLayerRemoveEvent
						 */
						'AfterMapMoveEvent' : function(event) {

						},

						/**
						 * @method AfterChangeMapLayerOpacityEvent
						 */
						'AfterChangeMapLayerOpacityEvent' : function(event) {
							if (this.sandbox.getObjectCreator(event) != this
									.getName()) {
								/* someone changed opacity */
								this.plugins['Oskari.userinterface.Flyout'].updateLayer(
										event.getMapLayer());
							}
						}
					},

					/**
					 * @method stop
					 * 
					 * implements bundle instance stop method
					 */
					"stop" : function() {
						var sandbox = this.sandbox();
						for (p in this.eventHandlers) {
							sandbox.unregisterFromEventByName(this, p);
						}
						
						var request = 
							sandbox.getRequestBuilder('userinterface.RemoveExtensionRequest')(this);
						
						sandbox.request(this,request);
						
						this.sandbox.unregister(this);
						this.started = false;
					},
					
					setSandbox : function(sandbox) {
						this.sandbox = null;
					},

					startExtension : function() {
						this.plugins['Oskari.userinterface.Flyout'] = Oskari.clazz
								.create(
										'Oskari.poc.yuilibrary.layerselection.Flyout',
										this);
						this.plugins['Oskari.userinterface.Tile'] = Oskari.clazz
						.create(
								'Oskari.poc.yuilibrary.layerselection.Tile',
								this);
					},

					stopExtension : function() {
						this.plugins['Oskari.userinterface.Flyout'] = null;
						this.plugins['Oskari.userinterface.Tile'] = null;
					},

					getTitle : function() {
						return "Layer Selection";
					},

					getDescription : function() {
						return "Sample";
					},

					getPlugins : function() {
						return this.plugins;
					},
					
					/**
					 * @method refresh
					 * 
					 * (re)creates selected layers to a hardcoded DOM div
					 * #layerselection This
					 */
					refresh : function() {
						var me = this;
						if (!me.yuilibrary) {

							return;
						}

						this.plugins['Oskari.userinterface.Flyout'].setYUILibrary(me.yuilibrary);
						this.plugins['Oskari.userinterface.Flyout'].refresh();
						this.plugins['Oskari.userinterface.Tile'].setYUILibrary(me.yuilibrary);
						this.plugins['Oskari.userinterface.Tile'].refresh();
						
					}

					
				}, {
					"protocol" : [ "Oskari.bundle.BundleInstance",
							'Oskari.mapframework.module.Module',
							'Oskari.userinterface.Extension' ]
				});
/**
 * @class Oskari.poc.yuilibrary.layerselection.Flyout
 */
Oskari.clazz
		.define(
				'Oskari.poc.yuilibrary.layerselection.Flyout',

				/**
				 * @method create called automatically on construction
				 * @static
				 * 
				 * Always extend this class, never use as is.
				 */
				function(instance) {
					this.instance = instance;
					this.container = null;
					this.template = null;
					this.state = null;
					this.yuilibrary = null;
					this.layercontrols = {};
				},
				{
					setYUILibrary : function(yuilibrary) {
						this.yuilibrary = yuilibrary;
					},

					getName : function() {
						return 'Oskari.poc.yuilibrary.layerselection.Flyout';
					},

					setEl : function(el, width, height) {
						this.container = el[0]; // ?
					},

					startPlugin : function() {

					},

					stopPlugin : function() {

					},

					getTitle : function() {
						return "Valitut karttatasot";
					},

					getDescription : function() {
					},

					getOptions : function() {

					},

					setState : function(state) {
						this.state = state;
						console.log("Flyout.setState", this, state);
					},
					
					updateLayer : function(layer) {
						var layercontrols = this.layercontrols[layer.getId()];
						if( !layercontrols)
							return;
						var slider = 
							layercontrols.slider;
						if( !slider)
							return;
						
						var opacity =
							layer.getOpacity();
						
						slider.setValue(opacity);
					},

					refresh : function() {
						var me = this;
						var Y = me.yuilibrary;

						var tpl = me.template;

						if (!tpl) {
							tpl = Y.Node
									.create('<div class="layer">' + '<div class="layer-title"><p></p></div>' + '<div class="slider"></div>' + '</div>');
							me.template = tpl;
						}

						var cel = Y.one(this.container);
						var tpl = this.template;

						var sandbox = me.instance.getSandbox();
						var opacityRequestBuilder = sandbox
								.getRequestBuilder('ChangeMapLayerOpacityRequest');

						var layers = sandbox.findAllSelectedMapLayers();

						cel.empty();
						me.layercontrols = {};

						for ( var n = 0, len = layers.length; n < len; n++) {
							var layer = layers[n];
							var layerId = layer.getId();
							var value = layer.getOpacity();

							var layerDiv = tpl.cloneNode(true);

							var title = layerDiv.one('.layer-title p');
							title.setContent(layer.getName());

							var sliderDiv = layerDiv.one('.slider');

							
							var slider = new Y.Slider( {
								min : 0,
								max : 100,
								value : value,
								length : '200px'
							});
							
							me.layercontrols[layerId] = {
									slider : slider
							};
							
							layerDiv.setData({
								sandbox: sandbox,
								instance: me.instance,
								layerId : layerId });

							slider.after("valueChange", function(e) {
								var data = this.getData();
								var moduleName = data.instance;
								var layerId = data.layerId;
								var sandbox = data.sandbox;
								sandbox
										.request(moduleName,
												opacityRequestBuilder(layerId,
														e.newVal));
							}, layerDiv);

							slider.render(sliderDiv);

							// slider.render(sliderDiv);

							cel.appendChild(layerDiv);

						}

						/*
						 * console.log("DOJO.LAYERS",domLayersList,this.container);
						 * window.xxx = this.container;
						 * 
						 * for( var n = 0; n < domLayersList.length;n++ ) {
						 * domConstruct.place(domLayersList[n],this.container[0],"last"); }
						 */

					}

				}, {
					'protocol' : [ 'Oskari.userinterface.Flyout' ]
				});
/*
 * @class Oskari.poc.yuilibrary.layerselection.Tile
 */
Oskari.clazz.define('Oskari.poc.yuilibrary.layerselection.Tile',

/**
 * @method create called automatically on construction
 * @static
 * 
 * Always extend this class, never use as is.
 */
function(instance) {
	this.instance = instance;
	this.container = null;
	this.template = null;
	this.yuilibrary = null;
}, {
	setYUILibrary: function(yuilibrary) {
		this.yuilibrary = yuilibrary;
	},
	
	getName : function() {
		return 'Oskari.poc.yuilibrary.layerselection.Tile';
	},

	setEl : function(el, width, height) {
		this.container = $(el);
	},

	startPlugin : function() {
		this.refresh();
	},

	stopPlugin : function() {
		this.container.empty();
	},

	getTitle : function() {
		return "Valitut tasot";
	},

	getDescription : function() {
	},

	getOptions : function() {

	},

	setState : function(state) {
		console.log("Tile.setState", this, state);
	},

	refresh : function() {
		var me = this;
		var instance = me.instance;
		var cel = this.container;
		var tpl = this.template;
		var sandbox = instance.getSandbox();
		var layers = sandbox.findAllSelectedMapLayers();

		var status = cel.children('.oskari-tile-status');
		status.empty();

		status.append('(' + layers.length + ')');

	}

}, {
	'protocol' : [ 'Oskari.userinterface.Tile' ]
});