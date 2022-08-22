//ESPRESIONES REGULARES
export const expressions = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  //ARRAY DE OBJETOS USERINFOMATION
  const userList = [
    {
      userId:1,
      userName: null,
      userLastName: null,
      userEmail: "admin@admin.com",
      userPassword: "123456",
      userAdmin: true
    },
    {
      userId:2,
      userName: "Gabriel",
      userLastName: "Di Prinzio",
      userEmail: "gdiprinzio@gmail.com",
      userPassword: "1976",
      userAdmin: true
    },
    {
      userId:3,
      userName: "Bruno",
      userLastName: "Tutor",
      userEmail: "brunotutor@gmail.com",
      userPassword: "1976",
      userAdmin: false
    },
  ];
  
  //Transformación con JSON y subida al LocalStorage
  const usersList = JSON.stringify(userList);
  localStorage.setItem("users", usersList);
  
  //Declaración de Objeto
  export class UserInfomation {
    constructor(userId, userName, userLastName, userEmail, userPassword) {
      this.id=userId;
      this.userName = userName;
      this.userLastName = userLastName;
      this.userEmail = userEmail;
      this.userPassword = userPassword;
      this.userAdmin=false;
    }
  };

 