var usernameInput,
    passwordInput;
    
function submit() {
    usernameInput = document.getElementById("username").value;
    passwordInput = document.getElementById("password").value;
    springPad.login(usernameInput,passwordInput);
}
