const closeSession = document.getElementById("CloseSession");
const adminSession = document.getElementById("usersAdministration");
const adminProyect = document.getElementById("proyectAdministration");
const title = document.getElementById("mainTitle");
const btns = document.querySelectorAll("#menuBody, button");
const visualBody = document.getElementById("visualBody");

const { userName, userAdmin } = JSON.parse(
  sessionStorage.getItem("userSession")
);

const welcomeTitle = document.createElement("h1");
welcomeTitle.innerHTML = `Bienvenido ${userName}`;
title.appendChild(welcomeTitle);

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

/* document.getElementById(`${e.target.dataset.nome}`).classList.remove(`hiddenElement`) */

function showBody(e) {
  for (let index = 1; index < 5; index++) {
    document.getElementById("body" + index).classList.add(`hiddenElement`);
  }
  document
    .getElementById(`${e.target.dataset.nome}`)
    .classList.remove(`hiddenElement`);
}

btns.forEach((button) => {
  button.addEventListener("click", showBody);
});

/* const showBody= (e)=> {
 document.getElementById(usersAdmin).hidden=true;
} */

closeSession.addEventListener("click", CloseClean);

function CloseClean() {
  sessionStorage.clear();
  window.open("./../index.html", "_self");
}

/* document.querySelector("#btn").addEventListener("click", takeData);

function takeData() {
  /* const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "./../assets/data/db.json", true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let data = JSON.parse(this.responseText);
      console.log(data);
      let tableUsers = document.querySelector("#tableUsers");
      tableUsers.innerHTML = "";

      for (let user of data) {
        tableUsers.innerHTML += `
        <tr>
        <td>${user.userName}</td>
        <td>${user.userLastName}</td>
        <td>${user.userEmail}</td>
        <td>${user.userAdmin}</td>
        </tr>        
        `;
      }
    }
  };  */

/*S fetch("./../assets/data/db.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let tableUsers = document.querySelector("#tableUsers");
      tableUsers.innerHTML = "";

      for (let user of data) {
        tableUsers.innerHTML += `
        <tr>
        <td>${user.userName}</td>
        <td>${user.userLastName}</td>
        <td>${user.userEmail}</td>
        <td>${user.userAdmin}</td>
        </tr>
        <hr>   
        `;
      }
    });
}
 */
