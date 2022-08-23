//-------------- DECLARACION DE IMPORTACIONES --------------//

import { usersTable } from "./usersadmin.js";
import { validation, validationPassword2} from "./functions.js";
import { expressions, UserInfomation, usersListStorage } from "./variables.js";

//-------------- DECLARACION DE CONST --------------//
const closeSession = document.getElementById("CloseSession");
const title = document.getElementById("mainTitle");
const adminUsers = document.getElementById("usersAdministration");
const adminProyects = document.getElementById("proyectAdministration");
const mainMenu = document.getElementById("mainMenu");
const formReg = document.getElementById("formRegister");
const inputs = document.querySelectorAll("#formRegister, input");

//-------------- TOMA DE INFO DE USUARIO QUE INICIO SESSION --------------//
const { userName, userAdmin } = JSON.parse(
  sessionStorage.getItem("userSession")
);

const welcomeTitle = document.createElement("h1");
welcomeTitle.innerHTML = `Bienvenido ${userName}`;
title.appendChild(welcomeTitle);

//-------------- VALIDACION DEL TIPO DE USUARIO ADMINISTRADOR --------------//
if (userAdmin ? true : false) {
  document
    .querySelector(`#usersAdministration, .hiddenElement`)
    .classList.remove(`hiddenElement`);
  document
    .querySelector(`#proyectAdministration, .hiddenElement`)
    .classList.remove(`hiddenElement`);
} else {
  document.querySelector(`#usersAdministration`).classList.add(`hiddenElement`);
  document
    .querySelector(`#proyectAdministration`)
    .classList.add(`hiddenElement`);
}

//-------------- DEFINICION PARA CERRAR SESSION --------------//

closeSession.addEventListener("click", CloseClean);

function CloseClean() {
  sessionStorage.clear();
  window.open("./../index.html", "_self");
}

//-------------- MENU LATERAL --------------//
function mainBody(e) {
  for (let index = 1; index < 5; index++) {
    document.getElementById("body" + index).classList.add(`hiddenElement`);
  }
  document
    .getElementById(`${e}`)
    .classList.remove(`hiddenElement`); 
}

const showMainBody = (e) => {
  switch (e.target.id) {
    case "usersAdministration":
      mainBody(e.target.dataset.nome)    
      break;
    case "proyectAdministration":
      mainBody(e.target.dataset.nome)
      break;
    case "visualProyect":
      mainBody(e.target.dataset.nome)
      break;
    case "iOMaterial":
      mainBody(e.target.dataset.nome)
      break;
  }
}

mainMenu.addEventListener("click", showMainBody);


adminUsers.addEventListener("click", usersTable)


 //-------------- REGISTRO DE USUARIOS --------------//
//-------------- Validación de los Inputs
const formValidation = (e) => {
  switch (e.target.name) {
    case "userNameR":
      validation(e.target.name, e.target.value, expressions.nombre);
      break;
    case "userLastNameR":
      validation(e.target.name, e.target.value, expressions.nombre);
      break;
    case "userEmailR":
      validation(e.target.name, e.target.value, expressions.correo);
      break;
    case "password1":
      validation(e.target.name, e.target.value, expressions.password);
      validationPassword2();
      break;
    case "password2":
      validationPassword2();
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", formValidation);
  input.addEventListener("blur", formValidation);
});

//-------------- Declaracion de Buttons
formReg.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValidation = usersListStorage.find(
    (Element) => Element.userEmail === e.target.userEmailR.value
  );
  if (emailValidation ? true : false) {
    Swal.fire({
      icon: "error",
      title: "Error de E-mail",
      text: "El correo electrónico ya se encuentra registrado.",
    });
  } else {
    const lastUser=usersListStorage[usersListStorage.length-1]; 
    let userId= Object.values(lastUser)[0];
    userId++;  

    const newUser = new UserInfomation(
      userId,
      e.target.userNameR.value,
      e.target.userLastNameR.value,
      e.target.userEmailR.value,
      e.target.password1.value
    );
    usersListStorage.push(newUser);
    console.log(usersListStorage);
    const newUserStorage = JSON.stringify(usersListStorage);
    console.log(newUserStorage);
    localStorage.setItem("users", newUserStorage);
    
  
  }
});  
