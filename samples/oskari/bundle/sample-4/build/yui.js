/* This is a packed Oskari bundle (bundle script version Thu Dec 08 2011 10:00:39 GMT+0200 (Suomen normaaliaika)) */ 
Oskari.clazz.define("Oskari.mapframework.sample-4.Sample",function(){this._core=null;this.mapConfiguration=null;this.ui=null},{setMapConfiguration:function(a){this.mapConfiguration=a},getMapConfiguration:function(){return this.mapConfiguration},startFramework:function(){var b=this.getMapConfiguration();if(b.cancelStartup==true){return}var d=this;var a=Oskari.clazz.create("Oskari.mapframework.core.Core");this._core=a;var c=this.createServices(b);var f=this.createEnhancements(b);var e=this.createUserInterface(b);this.ui=e;this.createCoreQuirks(b,a);a.init(e,c,f,b.layers,b.organizationsTreeLayout,b.userInterfaceLanguage,b.mapPublisherWizardUrl)},getUserInterface:function(){return this.ui},createCoreQuirks:function(b,a){if(b.disableDevelopmentMode=="true"){var c=Oskari.clazz.create("Oskari.mapframework.enhancement.common.DisableDevelopmentModeEnhancement",true);c.enhance(a)}},createServices:function(a){var b=[];b.push(Oskari.clazz.create("Oskari.mapframework.service.GetFeatureInfoService",a.globalMapAjaxUrl));b.push(Oskari.clazz.create("Oskari.mapframework.service.LanguageService",a.userInterfaceLanguage));b.push(Oskari.clazz.create("Oskari.mapframework.service.UsageSnifferService",2,"/log/"));b.push(Oskari.clazz.create("Oskari.mapframework.service.MapLayerService",a.globalMapAjaxUrl));return b},createEnhancements:function(a){var b=[];b.push(Oskari.clazz.create("Oskari.mapframework.enhancement.mapfull.StartMapWithConfigurationsEnhancement",a.preSelectedLayers,a.mapConfigurations));b.push(Oskari.clazz.create("Oskari.mapframework.enhancement.mapfull.StartMapWithLinkEnhancement"));return b},createUserInterface:function(a){return Oskari.clazz.create("Oskari.mapframework.ui.manager.mapportal.MapPortalUiManager",a)}});Oskari.clazz.define("Oskari.mapframework.bundle.Sample4BundleInstance",function(){this.map=null;this.mapster=null;this.ui=null},{getUserInterface:function(){return this.getApp().getUserInterface()},getApp:function(){return this.app},start:function(){var a=null;if(document.location.search.length>1){a=Ext.urlDecode(document.location.search.substring(1))}else{a={}}var d=Oskari.clazz.create("Oskari.mapframework.sample-4.Sample");this.app=d;var c=Oskari.clazz.create("Oskari.mapframework.complexbundle.NlsFiLayerConfig",{default_wms_url:"http://wms.a.paikkatietoikkuna.fi/gwc/mml-rasteriaineistot?,http://wms.b.paikkatietoikkuna.fi/gwc/mml-rasteriaineistot?,http://wms.c.paikkatietoikkuna.fi/gwc/mml-rasteriaineistot?,http://wms.d.paikkatietoikkuna.fi/gwc/mml-rasteriaineistot?"});var b=c.create();d.setMapConfiguration(b);Oskari.$("pageArgs",a);Oskari.$("startup",c.getMapConfiguration());Oskari.$("Ext",Ext)},update:function(){},stop:function(){alert("Stopped!")}},{protocol:["Oskari.bundle.BundleInstance"]});