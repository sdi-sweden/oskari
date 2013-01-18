# Map Publisher 

<table>
  <tr>
    <td>Bundle-Identifier</td><td>publisher</td>
  </tr>
  <tr>
    <td>API</td><td>[link](<%= apiurl %>docs/oskari/api/#!/api/Oskari.mapframework.bundle.publisher.PublisherBundleInstance)</td>
  </tr>
</table>

### Description 
 
This Bundle provides functionality to define an embeddable map and save it to server so it can be published on another page. The user defines the domain the map will be published on, name and language for the map. The user can set the size of the published map, a selection of tools that will be overlayed on the map and affect the maplayers that are initially visible when the map is shown. The main map is modified to show a preview of the published map when the publisher is opened and it resumes to normal view once the publisher flyout is closed. The publisher can promote map layers to the user, but at the moment the configuration which layers are promoted and the promotion text is not passed from the server (defined in code so promotion could be easily configured but it isn't for now). 
 
### TODO 
 
- promoted map layers configuration 
 
### Screenshot 
 
#### Start publishing  
![start](<%= docsurl %>images/start_map_publish.png)
 
#### Map publishing 
![map](<%= docsurl %>images/publish_map.png)
 
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
</td></tr><tr><td> AddMapLayerRequest </td><td> If any layer is marked for promotion, the user can add it from the publisher. When the publisher is closed, adds any layers that were removed because user didn't have publish rights. 
</td></tr><tr><td> RemoveMapLayerRequest </td><td> If promoted layer is added via publisher, it can be removed as well. Also removes layers from selection that the user can't publish 
</td></tr><tr><td> userinterface.UpdateExtensionRequest </td><td> Requests close on the flyout when publisher is closed and close to any other flyout when the publisher is opened. 
</td></tr></tbody></table>
 
### Events the bundle listens to  

<table>
<tbody><tr><td> Event </td><td> How does the bundle react 
</td></tr><tr><td> AfterMapLayerAddEvent </td><td> Updates the flyout to reflect current maplayer selections 
</td></tr><tr><td> AfterMapLayerRemoveEvent </td><td> Updates the flyout to reflect current maplayer selections 
</td></tr><tr><td> MapLayerEvent </td><td> Updates the flyout to reflect current maplayer selections 
</td></tr><tr><td> AfterMapMoveEvent </td><td> Updates coordinate information in publisher if applicable 
</td></tr><tr><td> userinterface.ExtensionUpdatedEvent </td><td> Determines if the layer was closed or opened and enables/disables preview view accordingly 
</td></tr><tr><td> Publisher.MapPublishedEvent </td><td> Publisher views send this event so personaldata can refresh its listing. Publisher instance also listens the event to show user HTML code for embedding the map to a page. 
</td></tr></tbody></table>

### Events the bundle sends out 

<table>
<tbody><tr><td> Event </td><td> When it is triggered/what it tells other components 
</td></tr><tr><td> Publisher.MapPublishedEvent </td><td> Sends when the server returns a valid response that the map has been published. 
</td></tr></tbody></table>

### Dependencies (e.g. jquery plugins)  

<table>
<tbody><tr><th> Dependency </th><th> Linked from </th><th> Purpose </th></tr>
<tr><td> [jQuery](http://api.jquery.com/) </td><td> Linked in portal theme </td><td> Used to create the component UI from begin to end 
</td></tr><tr><td> [Backend API](<%= docsurl %>backend/mappublisher.html) </td><td> N/A </td><td> Publisher backend functionality 
</td></tr><tr><td> [Oskari DivManager](<%= docsurl %>framework/divmanazer.html) </td><td> Expects to be present in application setup </td><td> Needed for flyout/tile functionality and accordion/form components 
</td></tr></tbody></table>