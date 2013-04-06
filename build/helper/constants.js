/*
* Copyright 2013 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var path = require("path");

module.exports = {
    ROOT: path.normalize(__dirname + "/../../"),
    DIST: path.normalize(__dirname + "/../../dist"),
    BUILD_CONFIG_ROOT: path.normalize(__dirname + "/../config/"),
    DOCS: path.normalize(__dirname + "/../../docs"),
    MAIN_LIB: path.normalize(__dirname + "/../../springPad/lib"),
    MAIN_TEST: path.normalize(__dirname + "/../../springPad/test"),
    DEPENDENCIES: path.normalize(__dirname + "/../../dependencies"),
    DEPENDENCIES_JSDOC: path.normalize(__dirname + "/../../dependencies/jsdoc_toolkit-2.4.0/jsdoc-toolkit/"),
    DEPENDENCIES_R_JS: path.normalize(__dirname + "/../../dependencies/rjs/r.js"),
    DEFAULT_SSH_KEY: "~/.ssh/id_rsa.pub",
    USB_IP: "169.254.0.1",
    PW: "qaqa"
};
