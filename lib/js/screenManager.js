var ScreenManager,
    baseUrl = "./screens/",
    containerDivId = "container-hehau", // example name
    containerDiv;

function makeRequest(url, callback) {
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
    
    // Give a function to run when the request is done and we have the content
    makeRequest(url, callback);
}

ScreenManager = {
    load: loadScreen
};

module.exports = ScreenManager;
