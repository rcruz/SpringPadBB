var imageResizer,
    height = 354,
    width = 354,
    baseUrl = "https://springpad.com/api/image/scale?c=sq&w=" + width + "&h=" + height + "&maxw=-1&maxh=-1&url=";

function resizeUrl(imageUrl) {
    return baseUrl + encodeURIComponent(imageUrl);
}

imageResizer = {
    resizeUrl: resizeUrl
};

module.exports = imageResizer;
