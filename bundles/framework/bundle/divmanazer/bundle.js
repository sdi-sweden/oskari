define(["oskari","jquery",
            "./instance",
        
            
            "./request/AddExtensionRequest",
        
            
            "./request/AddExtensionRequestHandler",
        
            
            "./request/RemoveExtensionRequest",
        
            
            "./request/RemoveExtensionRequestHandler",
        
            
            "./request/UpdateExtensionRequest",
        
            
            "./request/UpdateExtensionRequestHandler",
        
            
            "./request/ModalDialogRequest",
        
            
            "./request/ModalDialogRequestHandler",
        
            
            "./event/ExtensionUpdatedEvent",
        
            
            "./component/Accordion",
        
            
            "./component/AccordionPanel",
        
            
            "./component/TabContainer",
        
            
            "./component/TabDropdownContainer",
        
            
            "./component/TabPanel",
        
            
            "./component/Badge",
        
            
            "./component/Alert",
        
            
            "./component/Popup",
        
            
            "./component/Overlay",
        
            
            "./component/Button",
        
            
            "./component/Form",
        
            
            "./component/UIHelper",
        
            
            "./component/FormInput",
        
            
            "./component/Popover",
        
            
            "./component/Grid",
        
            
            "./component/GridModel",
        
            
            "./component/ProgressSpinner",
        
            
            "./extension/DefaultTile",
        
            
            "./extension/DefaultFlyout",
            
            "./extension/EnhancedFlyout",
            "./extension/EnhancedTile",
            "./extension/EnhancedView",
        
            
            "./extension/DefaultExtension",
        
            
            "./extension/EnhancedExtension",
        
            
            "./extension/DefaultView",
        
            
            "./extension/DefaultLayout",
        
            
            "css!resources/framework/bundle/divmanazer/css/divman.css",
        
            
            "css!resources/framework/bundle/divmanazer/css/accordion.css",
        
            
            "css!resources/framework/bundle/divmanazer/css/tab.css",
        
            
            "css!resources/framework/bundle/divmanazer/css/modal.css",
        
            
            "css!resources/framework/bundle/divmanazer/css/badge.css",
        
            
            "css!resources/framework/bundle/divmanazer/css/alert.css",
        
            
            "css!resources/framework/bundle/divmanazer/css/grid.css",
        
            
            "css!resources/framework/bundle/divmanazer/css/popup.css",
        
            
            "css!resources/framework/bundle/divmanazer/css/button.css",
        
            
            "css!resources/framework/bundle/divmanazer/css/overlay.css",
        
            
            "css!resources/framework/bundle/divmanazer/css/popover.css"
], function(Oskari,jQuery) {


	
	return Oskari.bundleCls('divmanazer').category({
		create: function() {
			return Oskari.cls("Oskari.userinterface.bundle.ui.UserInterfaceBundleInstance").create();
		}
	})
});
