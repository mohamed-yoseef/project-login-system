// var inputName = document.getElementById("enterName");
// var inputEmail = document.getElementById("enterEmail");
// var inputPassword = document.getElementById("enterPassword");
// var signUBtn = document.getElementById("signUBtn");

// var emailElement = document.getElementById("inputEmail");
// var passwordElement = document.getElementById("inputPassword");
// var nameElement = document.getElementById("inputName");

// function signUp() {
//   if ( inputName.value == '' || inputEmail.value  == '' || inputPassword.value == '' ){
    
//        TextMass.innerHTML = `All inputs are required`
//      }
  
// }

// signUBtn.addEventListener("click", function () {
//   signUp();
// });














// userList = [];
// function addUser() {
//   let user = {
//     email: emailElement.value,
//     password: passwordElement.value,
//   };
//   userList.push(user);
//   localStorage.setItem("loginUser", JSON.stringify(userList));

//   window.location.href = `./wel.html`;
// }
// function login() {
//   if (validationName() !== true || validationPas() !== true) {
//     document.getElementById(
//       "not"
//     ).innerHTML = `The email or password is incorrect`;
//   } else {
//     addUser();
//   }
// }
// // const username = document.getElementById("enterName").value;
// // const email = document.getElementById("enterEmail").value;
// // const password = document.getElementById("enterPassword").value;

// var TextMass = document.getElementById("msg")
// function sign() {
// if ( inputName.value == " " || inputEmail.value == " " || inputPassword.value == " " ){
//   TextMass.innerHTML = `All inputs are required`
// }
// }
// function getData(){
// let user ={
//   name : inputName.value,
//   email: inputEmail.value,
//   pass: inputPassword.value
// }
// user
// }

// --------------------------------
// function signUp() {
//   window.location.href = "index.html";
// }
// function signIN() {
//   window.location.href = "login.html";
// }

//------------------------------
// function validationName() {
//   var text = emailElement.value;
//   var regex =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   var msgNameElement = document.getElementById("msgEmail");
//   if (regex.test(text) == true) {
//     emailElement.classList.add("is-valid");
//     emailElement.classList.remove("is-invalid");
//     msgNameElement.classList.add("d-none");
//     return true;
//   } else {
//     emailElement.classList.add("is-invalid");
//     emailElement.classList.remove("is-valid");
//     msgNameElement.classList.remove("d-none");
//   }
// }
// function validationPas() {
//   var text = passwordElement.value;
//   var regex = /^[0-9]{6,20}$/;
//   var msgPasElement = document.getElementById("msgPas");
//   if (regex.test(text) == true) {
//     passwordElement.classList.add("is-valid");
//     passwordElement.classList.remove("is-invalid");
//     msgPasElement.classList.add("d-none");
//     return true;
//   } else {
//     passwordElement.classList.add("is-invalid");
//     passwordElement.classList.remove("is-valid");
//     msgPasElement.classList.remove("d-none");
//   }
// }
// function validName() {
//   var text = inputName.value;
//   var regex = /^[a-z]{3,15}$/;
//   var msgNameElement = document.getElementById("masName");
//   if (regex.test(text) == true) {
//     inputName.classList.add("is-valid");
//     inputName.classList.remove("is-invalid");
//     msgNameElement.classList.add("d-none");
//     return true;
//   } else {
//     inputName.classList.add("is-invalid");
//     inputName.classList.remove("is-valid");
//     msgNameElement.classList.remove("d-none");
//   }
// }
// function validEmail() {
//   var text = inputEmail.value;
//   var regex =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   var msgEmailElement = document.getElementById("masEmail");
//   if (regex.test(text) == true) {
//     inputEmail.classList.add("is-valid");
//     inputEmail.classList.remove("is-invalid");
//     msgEmailElement.classList.add("d-none");
//     return true;
//   } else {
//     inputEmail.classList.add("is-invalid");
//     inputEmail.classList.remove("is-valid");
//     msgEmailElement.classList.remove("d-none");
//   }
// }
// function validPas() {
//   var text = inputPassword.value;
//   var regex = /^[0-9]{6,20}$/;
//   var msgPasswordElement = document.getElementById("masPassword");
//   if (regex.test(text) == true) {
//     inputPassword.classList.add("is-valid");
//     inputPassword.classList.remove("is-invalid");
//     msgPasswordElement.classList.add("d-none");
//     return true;
//   } else {
//     inputPassword.classList.add("is-invalid");
//     inputPassword.classList.remove("is-valid");
//     msgPasswordElement.classList.remove("d-none");
//   }
// }
// var inputSignUp = document.getElementById("signUp");
// var inputSignIn = document.getElementById("signIn");

//
// let welcome = document.getElementById("welcome_message");
// localStorage.setItem("welUser", JSON.stringify(username));
// let welcomeUser = localStorage.getItem("username");
// welcome.innerHTML = `welcome ${welcomeUser}`;
