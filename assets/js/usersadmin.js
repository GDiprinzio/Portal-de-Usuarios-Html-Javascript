//-------------- DECLARACION DE IMPORTACIONES --------------//
import { usersListStorage } from "./variables.js";




function clearTable() {
  document.querySelector("#tableUsers").innerHTML = "";
}

export function usersTable() {

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
    /* let $tdCheck = document.createElement("td");
    let $divInput = document.createElement("div");
    let $input = document.createElement("input"); */
    let $tdButton = document.createElement("td");
    let $btn = document.createElement("button");
    let $btnText = document.createTextNode("Eliminar")

    $thId.setAttribute("scope", "row");
    $thId.setAttribute("id", "id");
    $thId.appendChild($thIdText);

    $tdName.appendChild($tdNameText);
    $tdLastName.appendChild($tdLastNameText);
    $tdEmail.appendChild($tdEmailText);
    $tdAdmin.appendChild($tdAdminText);

    /*  $input.setAttribute("class", "form-check-input checkbox");
     $input.setAttribute("type", "checkbox");
     $input.setAttribute("value", `${user.userId}`);
     $input.setAttribute("id", `check${user.userId}`);
     $input.setAttribute("name", "checkDelet"); */

    /* $divInput.setAttribute("class", "form-check");
    $divInput.appendChild($input);
    $tdCheck.appendChild($divInput); */
    $btn.setAttribute("type", "button");
    $btn.setAttribute("class", "btn btnBasic btnBasic2 deletUser");
    $btn.setAttribute("id", `btn${user.userId}`);
    $btn.setAttribute("value", `${user.userId}`)
    /* $btn.setAttribute("onclick","deleting()");  */
    $btn.appendChild($btnText);
    $tdButton.appendChild($btn);

    $tr.appendChild($thId);
    $tr.appendChild($tdName);
    $tr.appendChild($tdLastName);
    $tr.appendChild($tdEmail);
    $tr.appendChild($tdAdmin);
    /* $tr.appendChild($tdCheck); */
    $tr.appendChild($tdButton);

    tableUsers.appendChild($tr);
  }

}


  
 

