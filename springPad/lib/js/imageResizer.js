var imageResizer,
    height = 165,
    width = 165,
    baseUrl = "https://springpad.com/api/image/scale?c=sq&w=" + width + "&h=" + height + "&maxw=-1&maxh=-1&url=";

function resizeUrl(imageUrl) {
    return baseUrl + encodeURIComponent(imageUrl);
}

imageResizer = {
    resizeUrl: resizeUrl
};

module.exports = imageResizer;
