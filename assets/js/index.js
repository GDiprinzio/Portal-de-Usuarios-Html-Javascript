//-------------- DECLARACION DE IMPORTACIONES --------------//
import { validation, validationPassword2, sessionUser } from "./functions.js";
import { expressions, UserInfomation, takedata, usersListStorage } from "./variables.js";

//-------------- DECLARACION DE CONST --------------//
const formLogin = document.getElementById("formLogin");
const inputsL = document.querySelectorAll("#formLogin, input");
const formReg = document.getElementById("formRegister");
const inputs = document.querySelectorAll("#formRegister, input");


//-------------- CARGA DE INFORMACION A LOCALSTORAGE --------------//
takedata();


//-------------- LOGIN DE USUARIOS --------------//
const validationLogin = (e) => {
  switch (e.target.name) {
    case "userNameLogin":
      validation(e.target.name, e.target.value, expressions.correo);
      break;

    case "userPasswordL":
      validation(e.target.name, e.target.value, expressions.password);
      break;
  }
};

inputsL.forEach((input) => {
  input.addEventListener("keyup", validationLogin);
  input.addEventListener("blur", validationLogin);
});

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(usersListStorage);
  const userValidation= usersListStorage.find((Element)=> Element.userEmail === e.target.userNameLogin.value && Element.userPassword === e.target.userPasswordL.value);
  if( userValidation ? true : false){
    const position= usersListStorage.findIndex(user=>user.userEmail ===e.target.userNameLogin.value);
    const userLogin = usersListStorage[position];
    sessionUser(userLogin); 
    window.open('./../../pages/main.html',"_self");
 
  }else{
  
Swal.fire({
  icon: 'error',
  title: 'Error de Login',
  text: 'Usuario o contraseña incorrecto!'
})
  }
});

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
      userId.
      e.target.userNameR.value,
      e.target.userLastNameR.value,
      e.target.userEmailR.value,
      e.target.password1.value
    );
    usersListStorage.push(newUser);
    const newUserStorage = JSON.stringify(usersListStorage);
    localStorage.setItem("users", newUserStorage);
    sessionUser(newUser);
    window.open('./../../pages/main.html',"_self");
  }
}); 
