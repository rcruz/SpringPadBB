var settings = require("./settings"),
    utils = require("./utils"),
    //authenticator = require("./auth"),
    Miuri = require("../../../dependencies/miuri/miuri.min").miuri,
    imageResizer = require("./imageResizer"),
    authToken,
    apiUrl = "http://springpad.com/api",
    credentials = {
        username: "me",
        password: null
    },
    BLOCK_ACCESS = "/users/" + credentials.username + "/blocks";

function authenticate() {
    // Will authenticate with the authenticator later
}


function login(username, password) {
    // Use authenticator to get the token
    // Set the token to authToken
    credentials.username = username || credentials.username;
    credentials.password = password || credentials.password;
    BLOCK_ACCESS = "/users/" + username + "/blocks";
}

function buildUrl(baseUrl, options) {
    var url = new Miuri(apiUrl + baseUrl).query(options);
    return url.toString();
}

function makeRequest(url, callback) {
    console.log(url);
    // Use the token with the requester to request info
    // Plain HTTP Request for now
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.setRequestHeader("X-Spring-Username", credentials.username);
    request.setRequestHeader("X-Spring-Password", credentials.password);
    request.setRequestHeader("X-Spring-Api-Token", settings.auth.consumerKey);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200)
        {
            callback(utils.safeEval(request.responseText));
        }
    };
    request.send();
}

function getNotebooks(options, callback) {
    var params = {
            type: "Workbook",
            format: "minimal"
        },
        requestUrl,
        option;

    for (option in options) {
        params[option] = options[option];
    }

    requestUrl = buildUrl(BLOCK_ACCESS, params);

    makeRequest(requestUrl, callback);
}

function getBlock(uuid, options, callback) {
    var params = {
            format: "full"
        },
        option,
        requestUrl;

        // options are optional
    if (typeof options === "function") {
        callback = options;
    } else {
        for (option in options) {
            params[option] = options[option];
        }
    }

    // uuid optional
    requestUrl = buildUrl(uuid ? BLOCK_ACCESS + "/" + uuid : BLOCK_ACCESS, params);

    makeRequest(requestUrl, callback);

}

function getItemsInNotebook(uuid, callback) {
    var options = {
        filter: "workbook=" + uuid,
        format: "preview"
    };
    getBlock(null, options, callback);
}

module.exports = {
    login: login,
    buildUrl: buildUrl,
    getNotebooks: getNotebooks,
    getBlock: getBlock,
    getItemsInNotebook: getItemsInNotebook,
    makeRequest: makeRequest,
    settings: settings,
    imageresizer: imageResizer
};
