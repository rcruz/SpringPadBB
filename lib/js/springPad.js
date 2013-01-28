var //settings = require("./settings.json"),
    //authenticator = require("./auth"),
    authToken,
    apiUrl = "http://springpad.com/api",
    username = "me";

function authenticate() {
    // Will authenticate with the authenticator later
}


function login(username, password) {
    // Use authenticator to get the token
    // Set the token to authToken
}

function urlFormatter(baseUrl, options) {
    // Later
}

function makeRequest(url, callback) {
    var resultInfo;
    // Use the token with the requester to request info
    // Plain HTTP Request for now
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200)
        {
            callback(request.responseText);
        }
    };
    request.send();
}

function getNotebooks(callback) {
    // Use the token to ask for the list of notebooks
    var requestUrl = apiUrl + "/users/" + username + "/blocks?type=Workbook&format=preview";

    makeRequest(requestUrl, callback); 
}

function getNotebooksByTag(tag, callback) {
    var requestUrl = apiUrl + "/users/" + username + 
                        "/blocks?type=Workbook&format=preview&filter=" + 
                        encodeURIComponent("tag=" + tag) + "&callback=printItUp";

    makeRequest(requestUrl, callback);
};


