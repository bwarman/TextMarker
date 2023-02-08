var activeComp = app.project.activeItem;
function loopMarkers(){
    var markerLayer = activeComp.selectedLayers[0];
//Loop through all keys and get their comments
    for(var i = 1; i <= markerLayer.marker.numKeys; i++ ){
        var comment = markerLayer.marker.keyValue(i).comment;
        var time = markerLayer.marker.keyTime(i);
        alert("Comment: " + comment + " Time: " + time);
        createText(comment, time);
    }
}

function createText(comment, time){
    var textItem = app.project.activeItem.layers.addText(comment);
    textItem.startTime = time;
}
loopMarkers();