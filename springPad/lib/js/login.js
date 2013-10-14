function loginHide() {
    var loginDiv = document.getElementById("login");

    login.setAttribute("class", "hidden");

}

function loginSubmit() {
    var usernameInput = document.getElementById("username"),
        passwordInput = document.getElementById("password");

    springpad.login(usernameInput.value, passwordInput.value);
    loginHide();
    usernameInput.blur();
    passwordInput.blur();
    screenmanager.load("notebookContentsScreen", notebookcontents.load);
}
