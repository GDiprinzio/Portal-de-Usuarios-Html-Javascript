//-------------- DECLARACION DE IMPORTACIONES --------------//

/* import { usersTable } from "./usersadmin.js"; */
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
const formDeletUser= document.getElementById("formDeletUser");
const deletUserId=document.getElementById("deletUserId");


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


//-------------- BUTTON AdminUsers --------------//
function clearTable() {
  document.querySelector("#tableUsers").innerHTML = "";
}

function usersTable() {

  let tableUsers = document.querySelector("#tableUsers");

  clearTable();

  for (let user of usersListStorage) {
    let $tr = document.createElement("tr");
    let $thId = document.createElement("th");
    let $thIdText = document.createTextNode(`${user.userId}`);
    let $tdName = document.createElement("td");
    let $tdNameText = document.createTextNode(`${user.userName}`);
    let $tdLastName = document.createElement("td");
    let $tdLastNameText = document.createTextNode(`${user.userLastName}`);
    let $tdEmail = document.createElement("td");
    let $tdEmailText = document.createTextNode(`${user.userEmail}`);
    let $tdAdmin = document.createElement("td");
    let $tdAdminText = document.createTextNode(`${user.userAdmin}`);
/*     let $tdButton = document.createElement("td");
    let $btn = document.createElement("button");
    let $btnText = document.createTextNode("Eliminar") */

    $thId.setAttribute("scope", "row");
    $thId.setAttribute("id", "id");
    $thId.appendChild($thIdText);

    $tdName.appendChild($tdNameText);
    $tdLastName.appendChild($tdLastNameText);
    $tdEmail.appendChild($tdEmailText);
    $tdAdmin.appendChild($tdAdminText);

/*     $btn.setAttribute("type", "button");
    $btn.setAttribute("class", "btn btnBasic btnBasic2 deletUser");
    $btn.setAttribute("id", `btn${user.userId}`);
    $btn.setAttribute("value", `${user.userId}`)
    $btn.setAttribute("onclick",`deleting(${user.userId})`);
    $btn.appendChild($btnText);
    $tdButton.appendChild($btn); */

    $tr.appendChild($thId);
    $tr.appendChild($tdName);
    $tr.appendChild($tdLastName);
    $tr.appendChild($tdEmail);
    $tr.appendChild($tdAdmin);
/*     $tr.appendChild($tdButton); */

    tableUsers.appendChild($tr);
  }
}


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

    let userAdmin=document.getElementById("userType").value;
    console.log(userAdmin);

    const newUser = new UserInfomation(
      userId,
      e.target.userNameR.value,
      e.target.userLastNameR.value,
      e.target.userEmailR.value,
      e.target.password1.value,
      userAdmin
    );
    usersListStorage.push(newUser);
    console.log(usersListStorage);
    const newUserStorage = JSON.stringify(usersListStorage);
    console.log(newUserStorage);
    localStorage.setItem("users", newUserStorage);
  }
  usersTable();
 
});

/*---- ELIMINAR USUARIO ----*/

const validationNumber=(e)=>{
  validation(e.target.name, e.target.value, expressions.number)
}

  
deletUserId.addEventListener("keyup",validationNumber);

formDeletUser.addEventListener("submit", (e)=>{
  e.preventDefault();
  const userIdValidation = usersListStorage.find((Element)=> Element.userId === e.target.deletUserId.value)
 if (userIdValidation ? true : false){
  const index= usersListStorage.indexOf(e.target.deletUserId.value)
  usersListStorage.splice(index, 1)
  const newUserStorage = JSON.stringify(usersListStorage);
    localStorage.setItem("users", newUserStorage);

    usersTable();

 }else{
  Swal.fire({
    icon: 'error',
    title: 'Id no enctrado',
    text: 'El Id que ha ingresado no es valido o no existe ningun usuario registrado con el.',
  })
 }
})