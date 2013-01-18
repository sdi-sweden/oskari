# Feature Data

<table>
<tbody><tr><td> Name </td><td> Featuredata
</td></tr><tr><td> ID </td><td> featuredata
</td></tr><tr><td> API </td><td> [link](<%= apiurl %>docs/oskari/api/#!/api/Oskari.mapframework.bundle.featuredata.FeatureDataBundleInstance)
</td></tr><tr><td> Description </td><td> The Bundle provides a grid view for WFS featuredata. It is responsible to getting the data from the server, parsing it and showing it.
</td></tr></tbody></table>

### TODO

- filtering features
- multiple tabs handling when they dont fit the screen
- userguide popup handling

### Screenshot

*Image*

### Bundle configuration

No configuration is required.

### Bundle state

No statehandling has been implemented.

### Requests the bundle handles

This bundle doesn't handle any requests.

### Requests the bundle sends out

<table>
<tbody><tr><td> Request </td><td> Where/why it's used
</td></tr><tr><td> userinterface.AddExtensionRequest </td><td> Register as part of the UI in start()-method
</td></tr><tr><td> userinterface.RemoveExtensionRequest </td><td> Unregister from the UI in stop()-method
</td></tr><tr><td> HighlightMapLayerRequest </td><td> Requests that a layer is "highlighted" (old mechanic) so highlighting and feature selection will occur using this layer. Sent when a tab is selected (tab presents one layers data)
</td></tr><tr><td> DimMapLayerRequest </td><td> Requests that highlighting is removed from a layer (old mechanic) so highlighting and feature selection will be disabled on this layer. Sent when a tab is unselected/removed (tab presents one layers data).
</td></tr><tr><td> userguide.ShowUserGuideRequest </td><td> Used to show additional data that wouldn't fit the normal grid. A link is shown instead on grid and clicking the link will open the additional data on user guide "popup".
</td></tr></tbody></table>

### Events the bundle listens to

<table>
<tbody><tr><td> Event </td><td> How does the bundle react
</td></tr><tr><td> AfterMapLayerAddEvent </td><td> A tab panel is added to the flyout for the added layer.
</td></tr><tr><td> AfterMapLayerRemoveEvent </td><td> Tab panel presenting the layer is removed from the flyout.
</td></tr><tr><td> AfterMapMoveEvent </td><td> Grid data is updated if the flyout is open. Data is only updated for the layer whose tab is currently selected.
</td></tr><tr><td> WFSFeaturesSelectedEvent </td><td> Highlights the feature on the grid.
</td></tr><tr><td> userinterface.ExtensionUpdatedEvent </td><td> Determines if the layer was closed or opened and enables/disables data updates accordingly.
</td></tr></tbody></table>

### Events the bundle sends out

<table>
<tbody><tr><td> Event </td><td> When it is triggered/what it tells other components
</td></tr><tr><td> WFSFeaturesSelectedEvent </td><td> Sent when a selection is made on the grid to notify other components that a feature has been selected
</td></tr></tbody></table>

### Dependencies (e.g. jquery plugins)

<table>
<tbody><tr><td> Dependency </td><td> Linked from </td><td> API </td><td> Purpose
</td></tr><tr><td> jQuery </td><td> Linked in portal theme </td><td>
[http://api.jquery.com/](http://api.jquery.com/) </td><td> Used to create the component UI from begin to end
</td></tr><tr><td> Backend functionality </td><td> N/A </td><td>
[Backend API](<%= docsurl %>backend/featuredata.html)</td><td> Feature data provider
</td></tr></tbody></table>