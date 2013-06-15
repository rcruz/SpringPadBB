function loginHide() {
    var loginDiv = document.getElementById("login");

    login.setAttribute("class", "hidden");
}

function loginSubmit() {
    var usernameInput = document.getElementById("username").value,
        passwordInput = document.getElementById("password").value;

    springpad.login(usernameInput, passwordInput);
    loginHide();
    screenmanager.load("sampleScreen");
}
