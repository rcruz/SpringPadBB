function safeEval(data) {
    var wrapper = '{"data":' + data + '}';
    return JSON.parse(wrapper).data;
}

module.exports = {
    safeEval: safeEval,
};
