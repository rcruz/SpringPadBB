var 
notebookContentsId = "notebookContents",
notebookContentsElement,
noteBlock,
noteAuthor,
noteAuthorText,
notePhoto,
noteTitle,
noteTitleText;

function createNoteItem(imageLink,author,title) {

    noteBlock = document.createElement("div");
    noteBlock.setAttribute("class","noteBlock");
    notebookContentsElement = document.getElementById(notebookContentsId);
    notebookContentsElement.appendChild(noteBlock);
    
    noteAuthor = document.createElement("div")
    noteAuthor.setAttribute("class","noteBlockAuthor");
    noteBlock.appendChild(noteAuthor);
    /*text should go in to a p so we can center it vertically within the div*/
    noteAuthorText = document.createElement("p")
    noteAuthorText.setAttribute("class","noteBlockAuthorText");
    /*to be replaced with "author" from api*/
    noteAuthorText.innerHTML = "Author of the note!!";
    noteAuthor.appendChild(noteAuthorText);
    
    notePhoto = document.createElement("div")
    notePhoto.setAttribute("class","noteBlockPhoto");
    noteBlock.appendChild(notePhoto);
    /*later set attribute for style background photo to be "imageLink"*/
  
    noteTitle = document.createElement("div")
    noteTitle.setAttribute("class","noteBlockTitle");
    noteBlock.appendChild(noteTitle);
    /*text should go in to a p so we can center it vertically within the div*/
    noteTitleText = document.createElement("p")
        /*to be replaced with "title" from api*/
    noteTitleText.setAttribute("class","noteBlockTitleText");
    noteTitleText.innerHTML = "Title goes here! don't you know it?";
    noteTitle.appendChild(noteTitleText);
}

