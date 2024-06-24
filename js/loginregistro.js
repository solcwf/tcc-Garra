function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if (i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

function login() {
    var x = document.getElementById("loginForm");
    var y = document.getElementById("registerForm");
    x.style.left = "4px";
    y.style.right = "-520px";
    document.getElementById("loginBtn").className += " white-btn";
    document.getElementById("registerBtn").className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    var x = document.getElementById("loginForm");
    var y = document.getElementById("registerForm");
    x.style.left = "-510px";
    y.style.right = "5px";
    document.getElementById("loginBtn").className = "btn";
    document.getElementById("registerBtn").className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Seu perfil foi conectado");
    window.location.href = "../../index.html";
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Seu perfil foi conectado");
    window.location.href = "../../index.html";
});