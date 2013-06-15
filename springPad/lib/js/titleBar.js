var titlebar,
    titlebarId = "titlebar",
    titlebarElement,
    titleTextId = "titlebarText",
    titleTextElement,
    notebookAlertId = "notebookAlert",
    notebookAlertElement,
    addItemId = "addItem",
    addItemElement;

function setNotebookAlertCount(numberOfAlerts) {
   // Using the reference to the alert counter, update the number inside 
   // Change background color to red if new alerts are present.
    notebookAlertElement = document.getElementById(notebookAlertId);
    notebookAlertElement.innerHTML = numberOfAlerts;
    if (numberOfAlerts > 0) {
        notebookAlertElement.style.backgroundColor = '#BF301F';
    }
    else {
        notebookAlertElement.style.backgroundColor = '#AAAAAA';
    } 
}

function hideAddItem() {
    // Using the reference to the "addItem" element, hide it
    addItemElement = document.getElementById(addItemId);
    addItemElement.style.display = 'none';
}

function showAddItem() {
    // Using the reference to the "addItem" element, show it
    addItemElement = document.getElementById(addItemId);
    addItemElement.style.display = 'block';
}

function hideNotebookAlert() {
    // Using the reference to the "alertCount" element, hide it
    addItemElement = document.getElementById(notebookAlertId);
    addItemElement.style.display = 'none';
}

function showNotebookAlert() {
    // Using the reference to the "alertCount" element, show it
    addItemElement = document.getElementById(notebookAlertId);
    addItemElement.style.display = 'block';
}

function setTitleText(titleText) {
    // Using the reference to the "titleText" element, set the text in it 
    notebookAlertElement = document.getElementById(titleTextId);
    notebookAlertElement.innerHTML = titleText;
}

// How we expose the abilities to the other modules

titlebar = {
    setTitleText: setTitleText,
    additem: {
        hide: hideAddItem,
        show: showAddItem
    },
    notebookalert: {
        hide: hideNotebookAlert,
        show: showNotebookAlert,
        setCount: setNotebookAlertCount
    }
};

module.exports = titlebar;