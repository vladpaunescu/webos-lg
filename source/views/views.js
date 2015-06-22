/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/

enyo.kind({
    name: "flickr.MainView",
    classes: "moon enyo-fit",
    components: [
        {kind: "moon.Panels", classes: "enyo-fit", pattern: "alwaysviewing", popOnBack: true, components: [
            {kind: "flickr.SearchPanel"}
        ]}
    ]
});


enyo.kind({
    name: "flickr.SearchPanel",
    kind: "moon.Panel",
    title: "Search Flickr",
    titleBelow: "Enter search term above",
    headerOptions: {inputMode: true, dismissOnEnter: true},
    handlers: {
        onInputHeaderChange: "search"
    },
 	components: [
        {
        	kind: "moon.DataGridList", fit: true, name: "resultList", 
        	minWidth: 250, minHeight: 300, 
        	components: 
        [
            {
            	kind: "moon.GridListImageItem",
				bindings: [
                    {from: ".model.title", to:".caption"},
                    {from: ".model.thumbnail", to:".source"} ],
             	imageSizing: 
            "cover", useSubCaption: false, centered: false}
        ]}
    ],

  	create: function() {
        this.inherited(arguments);
        this.set("photos", new enyo.Collection([
                {title: "Photo 1", thumbnail: "http://lorempixel.com/300/300/?1"},
                {title: "Photo 2", thumbnail: "http://lorempixel.com/300/300/?2"},            
                {title: "Photo 3", thumbnail: "http://lorempixel.com/300/300/?3"},           
                {title: "Photo 4", thumbnail: "http://lorempixel.com/300/300/?4"}            
            ]));
    },

    bindings: [
        {from: ".photos", to: ".$.resultList.collection"}
    ],

    search: function(inSender, inEvent) {
        alert(inEvent.originator.get("value"));
    }
});