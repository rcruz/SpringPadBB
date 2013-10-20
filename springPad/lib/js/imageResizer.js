var imageResizer,
    Miuri = require("../../../dependencies/miuri/miuri.min").miuri,
    height = 165,
    width = 165,
    defaultOptions = {
        c: "sq",
        h: height,
        w: width,
        maxw: -1,
        maxh: -1
    },
    baseUrl = "https://springpad.com/api/image/scale";

function resizeUrl(imageUrl, customOptions) {
    var customOptions = customOptions || {},
        options = {
            c: customOptions.c || defaultOptions.c,
            w: customOptions.w || defaultOptions.w,
            h: customOptions.h || defaultOptions.h,
            maxw: customOptions.maxw || defaultOptions.maxw,
            maxh: customOptions.maxh || defaultOptions.maxh,
            url: imageUrl
        },
        url = new Miuri(baseUrl).query(options);

    return url.toString();
}

imageResizer = {
    resizeUrl: resizeUrl
};

module.exports = imageResizer;
