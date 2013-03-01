var ScreenManager,
    baseUrl = "./screens/",
    containerDivId = "container-hehau", // example name
    containerDiv;

function downloadPage(url, callback) {
    // Make a "GET" http request to get the screen content text we want 
    var request = new XMLHttpRequest();
    
    // "callback" function will run when everything is ready

}

function loadContentIntoContainerDiv(content) {
    // Get a reference to the container div using the div id
    
    // Clear out the container div
   
    // Load the contents into the container div 
    
}

function fadeContainerOut() {
    // Fancy extra
    // Apply some css to the container to fade it out 
}

function fadeContainerIn() {
    // Fancy extra
    // Apply some css to the container to fade it in
}

function loadScreen(screenName, callback) {
    // All the screens are located at the base url
    var url = baseUrl + screenName; 
    
    var fadeThePages = function () {
        // Fade out the old page
        // Fade in the new page
    };
    
    // Give a function to run when the request is done and we have the content
    downloadPage(url, callbackGoesHere);
    

    var newTitle = "";

    // Later
    callback(newTitle, a, b, c);
}

// example usage of loadScreen
// var callback = function (newTitle, a, b, c) {
//  // This function will run when the loadScreen function is finished loading
//  Titlebar.setTitleText("new title");
// }
//
// loadScreen("theNote", callback);

ScreenManager = {
    load: loadScreen
};

module.exports = ScreenManager;
