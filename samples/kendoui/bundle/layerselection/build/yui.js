/* This is a packed Oskari bundle (bundle script version Wed Feb 29 2012 07:56:03 GMT+0200 (Suomen normaaliaika)) */ 
Oskari.clazz.define("Oskari.poc.kendoui.bundle.LayerSelectionBundleInstance",function(){this.map=null;this.core=null;this.sandbox=null;this.mapmodule=null;this.started=false;this.template=null},{__name:"JQueryLayerSelection",getName:function(){return this.__name},start:function(){if(this.started){return}this.started=true;var a=Oskari.$("sandbox");this.sandbox=a;a.register(this);for(p in this.eventHandlers){a.registerForEventByName(this,p)}this.container=$("#layerselection");this.template=$('<div class="layer"><p></p><div class="slider"></div></div>');this.refresh()},init:function(){return null},update:function(){},refresh:function(){var e=this;var d=this.container;var c=this.template;var b=this.sandbox;var a=b.getRequestBuilder("ChangeMapLayerOpacityRequest");var f=b.findAllSelectedMapLayers();d.empty();$(f).each(function(h){var j=$(c).clone();var i=this;var g=i.getId();var k=i.getOpacity();$(j).children("p").append(i.getName());$(j).appendTo(d);$(j).children(".slider").kendoSlider({min:0,max:100,value:k,slide:function(m){var l=m.value;b.request(e.getName(),a(g,l))}})})},afterChangeMapLayerOpacityEvent:function(a){},onEvent:function(b){var a=this.eventHandlers[b.getName()];if(!a){return}return a.apply(this,[b])},eventHandlers:{AfterMapLayerAddEvent:function(a){this.refresh()},AfterMapLayerRemoveEvent:function(a){this.refresh()},AfterMapMoveEvent:function(a){},AfterChangeMapLayerOpacityEvent:function(a){if(this.sandbox.getObjectCreator(a)!=this.getName()){this.afterChangeMapLayerOpacityEvent(a)}}},stop:function(){var a=this.sandbox();for(p in this.eventHandlers){a.unregisterFromEventByName(this,p)}this.sandbox.unregister(this);this.started=false}},{protocol:["Oskari.bundle.BundleInstance","Oskari.mapframework.module.Module"]});