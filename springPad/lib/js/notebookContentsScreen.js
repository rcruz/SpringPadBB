var
notebookContentsId = "notebookContents",
notebookContentsElement,
noteBlock,
noteAuthor,
noteAuthorText,
notePhoto,
noteTitle,
noteTitleText,
arrayOfBlocks;

function createNoteItem(imageLink,author,title) {

    noteBlock = document.createElement("div");
    noteBlock.setAttribute("class","noteBlock");
    noteBlock.setAttribute("onclick","myFunction()");
    //noteBlock.onclick = function myFunction(){SomeJavaScriptCode};
    notebookContentsElement = document.getElementById(notebookContentsId);
    notebookContentsElement.appendChild(noteBlock);

    noteAuthor = document.createElement("div")
    noteAuthor.setAttribute("class","noteBlockAuthor");
    noteBlock.appendChild(noteAuthor);
    /*text should go in to a p so we can center it vertically within the div*/
    noteAuthorText = document.createElement("p")
    noteAuthorText.setAttribute("class","noteBlockAuthorText");
    /*to be replaced with "author" from api*/
    noteAuthorText.innerHTML = author;
    noteAuthor.appendChild(noteAuthorText);

    notePhoto = document.createElement("div")
    notePhoto.setAttribute("class","noteBlockPhoto");
    notePhoto.style.backgroundImage="url('" + imageLink + "')"
    noteBlock.appendChild(notePhoto);


    noteTitle = document.createElement("div")
    noteTitle.setAttribute("class","noteBlockTitle");
    noteBlock.appendChild(noteTitle);
    /*text should go in to a p so we can center it vertically within the div*/
    noteTitleText = document.createElement("p")
        /*to be replaced with "title" from api*/
    noteTitleText.setAttribute("class","noteBlockTitleText");
    noteTitleText.innerHTML = title;
    noteTitle.appendChild(noteTitleText);
}

// We want this function to run when the array of blocks is ready

function getBlocks(notebookId) {

    var callbackFunction = function (arrayOfBlocksFromServer) {
        arrayOfBlocks = arrayOfBlocksFromServer;
        console.log(arrayOfBlocksFromServer);
    };

    springpad.getItemsInNotebook(notebookId, callbackFunction);
}

function getNotebookItems() {
    springpad.getNotebooks({filter:'tag="favourite"'}, function (notebooks) {
        getBlocks(notebooks[0].uuid.replace("/UUID(","").replace(")/", ""));
    })
}
