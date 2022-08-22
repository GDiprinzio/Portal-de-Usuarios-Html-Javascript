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

closeSession.addEventListener("click", CloseClean);

function CloseClean() {
  sessionStorage.clear();
  window.open("./../index.html", "_self");
}

document
  .querySelector("#usersAdministration")
  .addEventListener("click", takeData);

function clearTable() {
  document.querySelector("#tableUsers").innerHTML = "";
}

function takeData() {
  fetch("./../assets/data/db.json")
    .then((response) => response.json())

    .then((data) => {
      let tableUsers = document.querySelector("#tableUsers");

      clearTable();

      for (let user of data) {
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
        let $tdCheck = document.createElement("td");
        let $divInput = document.createElement("div");
        let $input = document.createElement("input");

        $thId.setAttribute("scope", "row");
        $thId.setAttribute("id", "id");
        $thId.appendChild($thIdText);

        $tdName.appendChild($tdNameText);
        $tdLastName.appendChild($tdLastNameText);
        $tdEmail.appendChild($tdEmailText);
        $tdAdmin.appendChild($tdAdminText);

        $input.setAttribute("class", "form-check-input checkbox");
        $input.setAttribute("type", "checkbox");
        $input.setAttribute("value", `${user.userId}`);
        $input.setAttribute("id", `check${user.userId}`);
        $input.setAttribute("name", "checkDelet");

        $divInput.setAttribute("class", "form-check");
        $divInput.appendChild($input);
        $tdCheck.appendChild($divInput);

        $tr.appendChild($thId);
        $tr.appendChild($tdName);
        $tr.appendChild($tdLastName);
        $tr.appendChild($tdEmail);
        $tr.appendChild($tdAdmin);
        $tr.appendChild($tdCheck);

        tableUsers.appendChild($tr);
      }
    });
}

const checkboxs = document.getElementsByTagName("input");
console.log(checkboxs);


