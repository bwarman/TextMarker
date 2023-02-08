////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UI Settings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
var panelGlobal = this;
// TEXTMARKER 
// ==========
var TextMarker = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette"); 
    if ( !(panelGlobal instanceof Panel) ) TextMarker.text = "Text Marker"; 
    TextMarker.orientation = "column"; 
    TextMarker.alignChildren = ["fill","top"]; 
    TextMarker.spacing = 10; 
    TextMarker.margins = 16; 

// FONTSIZEPANEL
// =============
var FontSizePanel = TextMarker.add("panel", undefined, undefined, {name: "FontSizePanel"}); 
    FontSizePanel.text = "Font Size"; 
    FontSizePanel.orientation = "column"; 
    FontSizePanel.alignChildren = ["fill","top"]; 
    FontSizePanel.spacing = 10; 
    FontSizePanel.margins = 10; 

// GROUP1
// ======
var group1 = FontSizePanel.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["center","center"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

var fontSize = group1.add('edittext {justify: "center", properties: {name: "fontSize", enterKeySignalsOnChange: true}}'); 
    fontSize.text = "15";
    fontSize.preferredSize.width = 45; 

var statictext1 = group1.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "px"; 

// LAYERSETTINGS
// =============
var LayerSettings = TextMarker.add("panel", undefined, undefined, {name: "LayerSettings"}); 
    LayerSettings.text = "Time Offset"; 
    LayerSettings.orientation = "row"; 
    LayerSettings.alignChildren = ["left","center"]; 
    LayerSettings.spacing = 10; 
    LayerSettings.margins = 10; 

var timeOffset = LayerSettings.add('edittext {justify: "right", properties: {name: "timeOffset"}}'); 
    timeOffset.text = "0"; 
    timeOffset.preferredSize.width = 45; 

var statictext2 = LayerSettings.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = "frames"; 

// TEXTMARKER
// ==========
var createButton = TextMarker.add("button", undefined, undefined, {name: "createButton"}); 
    createButton.text = "Create Text"; 

TextMarker.layout.layout(true);
TextMarker.layout.resize();
TextMarker.onResizing = TextMarker.onResize = function () { this.layout.resize(); }

if ( TextMarker instanceof Window ) TextMarker.show();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// End UI Settings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


var activeComp = app.project.activeItem;
var compFramerate = activeComp.frameRate;
function loopMarkers(){
    var markerLayer = activeComp.selectedLayers[0];
//Loop through all keys and get their comments
    for(var i = 1; i <= markerLayer.marker.numKeys; i++ ){
        var comment = markerLayer.marker.keyValue(i).comment;
        var time = markerLayer.marker.keyTime(i);
        createText(comment, time);
    }
}

function createText(comment, time){
    var textItem = app.project.activeItem.layers.addText();
    var textProp = textItem.property("Source Text");
    var textDocument = textProp.value;
    textDocument.text = comment;
    textProp.setValue(textDocument);
    textDocument.fontSize = fontSize.text;
    textProp.setValue(textDocument);
    if(timeOffset.text != null){
        var newTime = (time*Number(compFramerate) + Number(timeOffset.text))/Number(compFramerate);
    }else{
        var newTime = time;
    }
    textItem.startTime = newTime;
}

createButton.onClick = function(){
    loopMarkers();
};
