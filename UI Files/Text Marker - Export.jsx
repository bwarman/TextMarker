var panelGlobal = this;

/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":12,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"TextMarker","windowType":"Window","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Text Marker","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["fill","top"]}},"item-2":{"id":2,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"FontSizePanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Font Size","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null}},"item-5":{"id":5,"type":"Group","parentId":2,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-7":{"id":7,"type":"StaticText","parentId":5,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"px","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"LayerSettings","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Time Offset","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-9":{"id":9,"type":"EditText","parentId":8,"style":{"enabled":true,"varName":"timeOffset","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"10","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"StaticText","parentId":8,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"frames","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"Button","parentId":0,"style":{"enabled":true,"varName":"createButton","text":"Create Text","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"EditText","parentId":5,"style":{"enabled":true,"varName":"fontSize","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":true},"softWrap":false,"text":"15","justify":"center","preferredSize":[45,0],"alignment":null,"helpTip":null}}},"order":[0,2,5,12,7,8,9,10,11],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":true,"itemReferenceList":"None"}}
*/ 

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

