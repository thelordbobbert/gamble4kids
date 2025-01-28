function login() {
    var username = document.getElementById("username-input").value;
    var password = document.getElementById("password-input").value;
    document.getElementById("login-confirmation").innerHTML = "login successful! username: " + username + ", password: " + password;
}
