var srcPath = __dirname + "/../../../../lib/";

describe("main", function () {
    var main;

    beforeEach(function () {
    	GLOBAL.window = {}
	main = require(srcPath + "js/main");
    });

    afterEach(function () {
    	delete GLOBAL.window;
    });

    it("exists", function () {
        expect(window.springPad).toBeDefined();
    });
});
