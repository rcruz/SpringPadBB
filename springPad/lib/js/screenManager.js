var screenmanager,
    baseUrl = "./screens/",
    containerDivId = "container",
    containerDiv;

function downloadPage(url, callback) {
    // Make a "GET" http request to get the screen content text we want
    var request = new XMLHttpRequest();
    request.open("GET",url,false);
    request.send();
    console.log(request.responseText);
    return request.responseText;
    // "callback" function will run when everything is ready

}

function loadContentIntoContainerDiv(content) {
    // Load the contents into the container div
    containerDiv.innerHTML = content;
}

function fadeContainerOut() {
    // Fancy extra
    // Apply some css to the container to fade it out
    containerDiv.classList.remove("visible");
    containerDiv.classList.add("hidden");
}

function fadeContainerIn() {
    // Fancy extra
    // Apply some css to the container to fade it in
    containerDiv.classList.remove("hidden");
    containerDiv.classList.add("visible");
}

function loadScreen(screenName, callback) {
    // All the screens are located at the base url
    var url = baseUrl + screenName + ".html";


    // Give a function to run when the request is done and we have the content

    var content = downloadPage(url);

    // Get a reference to the container div using the div id
    containerDiv = document.getElementById(containerDivId);

    // Fade out old container first. Takes 200 ms to finish
    fadeContainerOut();

    // Do these two things at the same time
    var doingStuffFunction = function () {
        loadContentIntoContainerDiv(content);
        fadeContainerIn();
        callback();
    }

    // Wait 200 ms before doing stuff
    setTimeout(doingStuffFunction, 200);
}

screenmanager = {
    load: loadScreen
};

module.exports = screenmanager;
