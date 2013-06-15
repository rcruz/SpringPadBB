var path = require("path"),
    async = require("async"),
    childProcess = require("child_process"),
    constants = require("./helper/constants"),
    processList = [];

function specRunner(specsPath, done) {
    var specOptions = {
            specFolder : specsPath,
            isVerbose: false,
            showColors: true,
        },
        child = childProcess.fork('./build/helper/testProcess');

    child.on('message', function (m) {
        processList.push(child);
        done();
    });
    child.send(JSON.stringify(specOptions));
}

function runSpecs(options, parentDone) {
    var mainPath = path.normalize(options.customPath ? __dirname + "/../" + options.customPath : constants.MAIN_TEST),
        cleanup = function (done) {
            var i;
            for (i = 0; i < processList.length; i++) {
                processList[i].kill();
            }
            done();
        },
        testSuites = [specRunner.bind(null, mainPath), cleanup];

    // Run all test suites
    async.series(testSuites);
}

module.exports = {
    runSpecs: runSpecs
};
