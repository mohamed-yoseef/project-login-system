var inputName = document.getElementById("enterName");
var inputEmail = document.getElementById("enterEmail");
var inputPassword = document.getElementById("enterPassword");
var signUBtn = document.getElementById("signUBtn");
var msg = document.getElementById("msg");
//
// let signMo = document.querySelector("#sign-mo");
// let signJo = document.querySelector("#sign-jo");

// signMo.addEventListener("click", function () {
//   location.href = "/login.html";
// });
// signJo.addEventListener("click", function () {
//   location.href = "/index.html";
// });

let users = [];

if (JSON.parse(localStorage.getItem("userInfo") != null)) {
  users = JSON.parse(localStorage.getItem("userInfo"));
}

function signUp() {
  if (
    inputName.value == "" ||
    inputEmail.value == "" ||
    inputPassword.value == ""
  ) {
    msg.innerHTML = `<p class ="text-danger my-3">All input are required</p>`;
  } else {
    for (let i = 0; i < users.length; i++) {
      localStorage.setItem("userName", JSON.stringify(users[i].name));
      if (users[i].email == inputEmail.value) {
        msg.innerHTML = `<p class ="text-danger my-3">email already exist</p>`;
      }
    }

    getUser();
    msg.innerHTML = `<p class ="text-success my-3">success</p>`;
  }
}
function getUser() {
  let user = {
    name: inputName.value,
    email: inputEmail.value,
    pass: inputPassword.value,
  };
  users.push(user);
  localStorage.setItem("userInfo", JSON.stringify(users));
  location.href = `/login.html`;
}

//
signUBtn?.addEventListener("click", function () {
  signUp();
});

var emailElement = document.getElementById("inputEmail");
var passwordElement = document.getElementById("inputPassword");
var checkInput = document.getElementById("check-input");
var logBtn = document.getElementById("log-Btn");

function login() {
  if (emailElement.value == "" || passwordElement.value == "") {
    checkInput.innerHTML = `<p class ="text-danger my-3">All inputs are required</p>`;
  } else {
    checkInput.innerHTML = `<p class ="text-success my-3">success</p>`;
    location.href = "/wel.html";
  }
}
logBtn?.addEventListener("click", function () {
  login();
});

let welcomeMessage = document.getElementById("welcome_message");

let loggedUser = localStorage.getItem("userName");
welcomeMessage.innerHTML = `welcome ${loggedUser}`;
let logOut = document.getElementById("log-out");

logOut.addEventListener("click", function () {
  location.href = "/login.html";
});
