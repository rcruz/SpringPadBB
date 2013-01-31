var //settings = require("./settings.json"),
    //authenticator = require("./auth"),
    Miuri = require("../../dependencies/miuri.min"),
    authToken,
    apiUrl = "http://springpad.com/api",
    username = "me",
    BLOCK_ACCESS = "/users/" + username + "/blocks";

function authenticate() {
    // Will authenticate with the authenticator later
}


function login(username, password) {
    // Use authenticator to get the token
    // Set the token to authToken
}

function buildUrl(baseUrl, options) {
    var url = new Miuri(apiUrl + baseUrl).query(options); 
    return url.toString();
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

function getNotebooks(options, callback) {
    var params = {
            type: "Workbook", 
            format: "preview", 
            callback: ""
        },
        requestUrl;

        for (option in options) {
            params[option] = options[option];
        }

        requestUrl = buildUrl(BLOCK_ACCESS, params);
    
    console.log(requestUrl);
    //makeRequest(requestUrl, callback); 
}

function getBlock(uuid, callback) {
    var params = {
            format: "full",
            callback: ""
        },
        requestUrl = buildUrl(BLOCK_ACCESS + "/" + uuid, params); 

    makeRequest(requestUrl, callback); 

}

function getItemsInNotebook(uuid, callback) {
}

module.exports = {
    buildUrl: buildUrl,
    getNotebooks: getNotebooks 
}

window.springPad = module.exports;
