module.exports = {
    "baseUrl": "./",
    "paths": {},
    "optimize": "none",
    "onBuildRead": function (moduleName, path, contents) {
        var wrappedContents = "define(function (require, exports, module) {\n" + contents + "});\n";
        return moduleName === "dependencies/almond/almond" ? contents : wrappedContents;
    },
    "name": "dependencies/almond/almond",
    "include": ["./springPad/lib/main"],
    "insertRequire": ["./springPad/lib/main"],
    "out": "dist/springPad.js",
    "wrap": true
}
