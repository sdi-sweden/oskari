/* This is a packed Oskari bundle (bundle script version Thu May 31 2012 12:23:19 GMT+0300 (Suomen kesäaika)) */ 
Oskari.clazz.define("Oskari.mapframework.enhancement.mapfull.StartMapWithLinkEnhancement",function(){},{enhance:function(u){u.printDebug("Checking if map is started with link...");var o=u.getRequestParameter("coord");var n=u.getRequestParameter("zoomLevel");var h=u.getRequestParameter("mapLayers");var f=u.getRequestParameter("showMarker");var k=u.getRequestParameter("keepLayersOrder");if(k===null){k=true}u.getMap().setMarkerVisible(f=="true");if(o===null||n===null){return}var p;if(o.indexOf("_")>=0){p=o.split("_")}else{p=o.split("%20")}var j=p[0];var m=p[1];if(j===null||m===null){u.printDebug("Could not parse link location. Skipping.");return}u.getMap().moveTo(j,m,n);u.printDebug("This is startup by link, moving map...");if(h!==null&&h!==""){u.printDebug("Continuing by adding layers...");var a=h.split(",");for(var s=0;s<a.length;s++){var g=a[s].split("+");var e=g[0];var b=g[1];var t=g[2];if((e.indexOf("_")!=-1)&&(e.indexOf("base_")==-1)&&(e.indexOf("BASE_")==-1)){var v=e.split("_");e=null;var c=null;for(var d in v){if(d){c=u.findBaselayerBySublayerIdFromAllAvailable(v[d]);if(c){e=c.getId();break}}}}if(e!==null){var q=null;var l=null;q=u.getRequestBuilder("AddMapLayerRequest");l=q(e,k);u.processRequest(l);q=u.getRequestBuilder("ChangeMapLayerOpacityRequest");l=q(e,b);u.processRequest(l);q=u.getRequestBuilder("ChangeMapLayerStyleRequest");l=q(e,t);u.processRequest(l)}else{u.printWarn("[StartMapWithLinkEnhancement] Could not find baselayer for "+e)}}}}},{protocol:["Oskari.mapframework.enhancement.Enhancement"]});Oskari.clazz.define("Oskari.mapframework.bundle.mapprint.PrintBundleInstance",function(){this.map=null},{createModulesAndUi:function(a){var g=false;var e=false;var f=true;var c=true;var b=Oskari.clazz.create("Oskari.mapframework.ui.module.common.MapModule","Print",g,e,f,c);var d=a.register(b);d.render("map-div");this.map=d},start:function(){var j=this;var g=startup;Oskari.$("startup",g);var d=g.userInterfaceLanguage;var a=j;var c=Oskari.clazz.create("Oskari.mapframework.core.Core");this.core=c;var m=[];m.push(Oskari.clazz.create("Oskari.mapframework.enhancement.mapfull.StartMapWithLinkEnhancement"));var k=[];k.push(Oskari.clazz.create("Oskari.mapframework.service.LanguageService",d));var f=Oskari.clazz.create("Oskari.mapframework.service.MapLayerService",null,c.getSandbox());k.push(f);f.registerLayerModel("wmtslayer","Oskari.mapframework.wmts.domain.WmtsLayer");var h=Oskari.clazz.create("Oskari.mapframework.wmts.service.WmtsLayerModelBuilder");f.registerLayerModelBuilder("wmtslayer",h);k.push(Oskari.clazz.create("Oskari.mapframework.service.OgcSearchService",g.ogcSearchServiceEndpoint,c));c.init(a,k,m,g.layers,d,null,false);if(g.printBundles){for(var e=0;e<g.printBundles.length;e++){var l=g.printBundles[e];var b=Oskari.clazz.create(l.type,l.config);c.getSandbox().register(b);b.start(c.getSandbox())}}this._initMapPlugins(c.getSandbox())},_initMapPlugins:function(c){var a=c.findRegisteredModuleInstance("PrintMapModule");var b=[];b.push("Oskari.mapframework.mapmodule.WmsLayerPlugin");b.push("Oskari.mapframework.mapmodule.MarkersPlugin");b.push("Oskari.mapframework.mapmodule.TilesGridPlugin");b.push("Oskari.mapframework.mapmodule.ControlsPlugin");b.push("Oskari.mapframework.mapmodule.WfsLayerPlugin");b.push("Oskari.mapframework.wmts.mapmodule.plugin.WmtsLayerPlugin");for(var d=0;d<b.length;d++){var e=Oskari.clazz.create(b[d]);a.registerPlugin(e);a.startPlugin(e)}c.syncMapState(true,a)},update:function(){},stop:function(){alert("Stopped!")}},{protocol:["Oskari.bundle.BundleInstance"]});