/**
 * @class Oskari.mapframework.mapmodule.ControlsPlugin
 * 
 * Adds mouse and keyboard controls to the map and adds tools controls 
 * for zoombox and measurement (line/area). Also adds request handling for 
 * ToolSelectionRequest, EnableMapKeyboardMovementRequest, DisableMapKeyboardMovementRequest,
 * EnableMapMouseMovementRequest and DisableMapMouseMovementRequest.
 * Overrides OpenLayers keyboard/mouse controls with PorttiKeyboard and PorttiMouse.
 * 
 * default configuration for mouse as of 2012-12-05:
 * 
 * 
    {
               "id":"Oskari.mapframework.mapmodule.ControlsPlugin",
               "config" : {
               		"mouse" : {
            	   		"useCenterMapInWheelZoom" : false,
 						"useCenterMapInDblClickZoom": false
 					}	
               }
     }
 * 
 */
Oskari.clazz.define('Oskari.leaflet.mapmodule.plugin.ControlsPlugin',
/**
 * @method create called automatically on construction
 * @static
 */
function(config) {
    this.mapModule = null;
    this.pluginName = null;
    this._sandbox = null;
    this._map = null;
    this.conf = config||{};
}, {
    /** @static @property __name plugin name */
    __name : 'ControlsPlugin',

    /**
     * @method getName
     * @return {String} plugin name
     */
    getName : function() {
        return this.pluginName;
    },
    /**
     * @method hasUI
     * @return {Boolean} true
     * This plugin has an UI so always returns true
     */
    hasUI : function() {
        return true;
    },
    /**
     * @method getMapModule
     * @return {Oskari.mapframework.ui.module.common.MapModule} reference to map
     * module
     */
    getMapModule : function() {

        return this.mapModule;
    },
    /**
     * @method setMapModule
     * @param {Oskari.mapframework.ui.module.common.MapModule} reference to map
     * module
     */
    setMapModule : function(mapModule) {
        this.mapModule = mapModule;
        if (mapModule) {
            this.pluginName = mapModule.getName() + this.__name;
            this._createMapControls();
        }
    },
    /**
     * @method register
     * Interface method for the module protocol
     */
    register : function() {

    },
    /**
     * @method unregister
     * Interface method for the module protocol
     */
    unregister : function() {

    },
    /**
     * @method init
     *
     * Interface method for the module protocol
     *
     * @param {Oskari.mapframework.sandbox.Sandbox} sandbox
     * 			reference to application sandbox
     */
    init : function(sandbox) {
        var me = this;
        var mapMovementHandler = Oskari.clazz.create('Oskari.mapframework.bundle.mapmodule.request.MapMovementControlsRequestHandler', me.getMapModule());
        this.requestHandlers = {
            'ToolSelectionRequest' : Oskari.clazz.create('Oskari.mapframework.mapmodule.ToolSelectionHandler', sandbox, me),
            'EnableMapKeyboardMovementRequest' : mapMovementHandler,
            'DisableMapKeyboardMovementRequest' : mapMovementHandler,
            'EnableMapMouseMovementRequest' : mapMovementHandler,
            'DisableMapMouseMovementRequest' : mapMovementHandler
        };
    },
    /**
     * @method startPlugin
     *
     * Interface method for the plugin protocol
     *
     * @param {Oskari.mapframework.sandbox.Sandbox} sandbox
     * 			reference to application sandbox
     */
    startPlugin : function(sandbox) {
        this._sandbox = sandbox;
        this._map = this.getMapModule().getMap();

        sandbox.register(this);

        for(var reqName in this.requestHandlers ) {
            sandbox.addRequestHandler(reqName, this.requestHandlers[reqName]);
        }

        for(var p in this.eventHandlers ) {
            sandbox.registerForEventByName(this, p);
        }
        this._addMapControls();
    },
    /**
     * @method stopPlugin
     *
     * Interface method for the plugin protocol
     *
     * @param {Oskari.mapframework.sandbox.Sandbox} sandbox
     * 			reference to application sandbox
     */
    stopPlugin : function(sandbox) {

        for(var reqName in this.requestHandlers ) {
            sandbox.removeRequestHandler(reqName, this.requestHandlers[reqName]);
        }
        
        for(p in this.eventHandlers ) {
            sandbox.unregisterFromEventByName(this, p);
        }

        sandbox.unregister(this);
        this._removeMapControls();

        this._map = null;
        this._sandbox = null;
    },
    /**
     * @method start
     *
     * Interface method for the module protocol
     *
     * @param {Oskari.mapframework.sandbox.Sandbox} sandbox
     * 			reference to application sandbox
     */
    start : function(sandbox) {
    },
    /**
     * @method stop
     *
     * Interface method for the module protocol
     *
     * @param {Oskari.mapframework.sandbox.Sandbox} sandbox
     * 			reference to application sandbox
     */
    stop : function(sandbox) {
    },
    /**
     * @property {Object} eventHandlers
     * @static
     */
    eventHandlers : {
        /**
         * @method Toolbar.ToolSelectedEvent
         * @param {Oskari.mapframework.bundle.toolbar.event.ToolSelectedEvent} event
         */
       'Toolbar.ToolSelectedEvent' : function(event) {
            // changed tool -> cancel any current tool
            if(this.conf.zoomBox !== false) {
                this._zoomBoxTool.deactivate(); 
            }
            if(this.conf.measureControls !== false) {
                this._measureControls.line.deactivate();
                this._measureControls.area.deactivate();
            }
       }
    },
    /**
     * @method onEvent
     * @param {Oskari.mapframework.event.Event} event a Oskari event object
     * Event is handled forwarded to correct #eventHandlers if found or discarded
     * if not.
     */
    onEvent : function(event) {
        return this.eventHandlers[event.getName()].apply(this, [event]);
    },
    /**
     * @method _addMapControls
     * Add necessary controls on the map
     * @private
     */
    _addMapControls : function() {
        var me = this;


    },
    /**
     * @method _removeMapControls
     * Remove added controls from the map
     * @private
     */
    _removeMapControls : function() {
        

    },
    
    /**
     * @method _createMapControls
     * Constructs/initializes necessary controls for the map. After this they can be added to the map
     * with _addMapControls().
     * @private
     */
    _createMapControls : function() {
      
    }
}, {
    /**
     * @property {String[]} protocol array of superclasses as {String}
     * @static
     */
    'protocol' : ["Oskari.mapframework.module.Module", "Oskari.mapframework.ui.module.common.mapmodule.Plugin"]
});
