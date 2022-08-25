//ESPRESIONES REGULARES
export const expressions = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    number: /^[0-9]$/,
  };

  //Traer la información de db.json
export  function takedata(){
    fetch("./../assets/data/db.json")
    .then ((response) => response.json())
    .then ((data)=> {
      //Transformación con JSON y subida al LocalStorage
      const usersList = JSON.stringify(data);
    localStorage.setItem("users", usersList);
    })
  }
  
export  const usersListStorage = JSON.parse(localStorage.getItem("users"));
  
  //Declaración de Objeto
  export class UserInfomation {
    constructor(userId, userName, userLastName, userEmail, userPassword, userAdmin) {
      this.userId=userId;
      this.userName = userName;
      this.userLastName = userLastName;
      this.userEmail = userEmail;
      this.userPassword = userPassword;
      this.userAdmin=userAdmin;
    }
  };

 