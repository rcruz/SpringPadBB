var photoitem,
    photoImgId = "photoImg",
    photoImgElement,
    photoDescId = "photoDesc",
    photoDescElement,
    photoDescContentId = "photoDescContent",
    photoDescContentElement,
    photoCommentsId = "photoComments",
    photoCommentsElement;

function init() {
    photoImgElement = document.getElementById(photoImgId);
    photoDescElement = document.getElementById(photoDescId);
    photoDescContentElement = document.getElementById(photoDescContentId);
    photoCommentsElement = document.getElementById(photoCommentsId);
}

function setImage(url) {
   photoImgElement.src = url;
}

function setTitle(title) {
    // TitleBar exists already, so it can be used
    titlebar.setTitleText(title);
}

function setDescription(text) {
    photoDescContentElement.innerHTML = text;
}

function createComment(info) {
    // Create the comment div
    var commentDiv = document.createElement("div");
    commentDiv.classList.add("photoComment");
    commentDiv.innerHTML = info;

    // Add the comment div to the end of the comment section
    photoCommentsElement.appendChild(commentDiv);
}

function load(info) {
    init();
    setImage(info.imageUrl);
    setTitle(info.title);
    setDescription(info.description);
}

photoitem = {
    init: init,
    load: load,
    addComment: createComment
};

module.exports = photoitem;
