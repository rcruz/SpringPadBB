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
    photoDescContentElement.innerHTML = text || "";
}

function createComment(info) {
    // Create the comment div
    var commentDiv = document.createElement("div");
    commentDiv.classList.add("photoComment");
    commentDiv.innerHTML = info.author + " : " + info.message;

    // Add the comment div to the end of the comment section
    photoCommentsElement.appendChild(commentDiv);
}

function load(info) {
    init();
    setTitle(info.title);

    springpad.getBlock(info.uuid, function (block) {

        setImage(springpad.imageresizer.resizeUrl(block.image, {h: 600, w:600}));
        setDescription(block.properties.description);

        // Load comments
        springpad.getCommentsFromBlock(info.uuid, function (noteArray) {
            noteArray.forEach(function (note) {
                createComment({
                    author: note.$users[0].name,
                    message: note.$message
                });
            });
        });
    });
}

photoitem = {
    init: init,
    load: load,
    addComment: createComment
};

module.exports = photoitem;
