var srcPath = __dirname + "/../../../../lib/",
    dependenciesPath = __dirname + "../../../../../../dependencies/",
    miuri = require(dependenciesPath + "miuri/miuri.min");

describe("main", function () {
    var main;

    beforeEach(function () {
        GLOBAL.window = {};
        main = require(srcPath + "js/main");
    });

    afterEach(function () {
        delete GLOBAL.window;
    });

    it("exists", function () {
        expect(window.springPad).toBeDefined();
    });
});
