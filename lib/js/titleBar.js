var TitleBar,
    titlebarId = "titlebar",
    titlebarElement,
    titleTextId = "titleText",
    titleTextElement,
    alertCountId = "alertCount",
    alertCountElement,
    addItemId = "addItem",
    addItemElement;

function setAlertCount(numberOfAlerts) {
   // Using the reference to the alert counter, update the number inside 
}

function hideAddItem() {
    // Using the reference to the "addItem" element, hide it
}

function showAddItem() {
    // Using the reference to the "addItem" element, show it
}

function hideAlertCount() {
    // Using the reference to the "alertCount" element, hide it
}

function showAlertCount() {
    // Using the reference to the "alertCount" element, show it
}

function setTitleText(titleText) {
    // Using the reference to the "titleText" element, set the text in it 
}

// How we expose the abilities to the other modules
TitleBar = {
    setTitleText: setTitleText,
    AddItem: {
        hide: hideAddItem,
        show: showAddItem
    },
    AlertCount: {
        hide: hideAlertCount,
        show: showAlertCount,
        setAlertCount: setAlertCount
    }
}

module.exports = TitleBar;
