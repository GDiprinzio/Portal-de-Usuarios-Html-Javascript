const modalAddUser = document.getElementById("modalAddUser");
/* const formUserRegister=document.createElement("div.contianerFormRegister") */
export const bodyAddUser=()=> {
  modalAddUser.innerHTML=`
  <div class="contianerFormRegister">
  <div class="formRegister">
    <div class="titleRegister">
      <h5>Por favor ingrese los datos para registrarse.</h5>
    </div>
    <form action="#" class="formUserRegister" id="formRegister">
      <div class="formItem itemUserName" id="item__userNameR">
        <label for="userName" class=" formLabel userName" id="fromLabel">Nombre:</label>
        <input
          type="text"
          class="input-group mb-3 formInput imputUserLastName"
          name="userNameR"
          id="userNameR"
          required
        />
        <p class="inputAlertaError_userNameR">Se han ingresado caracteres no validos</p>
      </div>
      <div class="formItem itemUserLastName" id="item__userLastNameR">
        <label for="userLastName" class=" formLabel userLastName">Apellido:</label>
        <input
          type="text"
          class="input-group mb-3 formInput imputUserLastName"
          name="userLastNameR"
          id="userLastNameR"
          required
        />
        <p class="inputAlertaError_userLastNameR">Se han ingresado caracteres no validos</p>
      </div>
      <div class="formItem itemEmail" id="item__userEmailR">
        <label for="inputEmail" class=" formLabel userEmail">E-mail:</label>
        <input
          type="email"
          class="input-group mb-3 formInput inputEmail"
          name="userEmailR"
          id="userEmailR"
          required
        />
        <p class="inputAlertaError_userEmailR">Formato e-mail incorrecto.</p>
        <!-- <p class="inputAlertaError2_userEmailR">El e-mail ingresado ya se encuentra registrado.</p> -->
      </div>
      <div class="formItem itemPassword password1" id="item__password1">
        <label for="inputPasswprd" class=" formLabel userPassword"
          >Por favor ingrese un password:</label
        >
        <input
          type="password"
          class="input-group mb-3 formInput inputPassword"
          name="password1"
          id="password1"
          required
        />
        <p class="inputAlertaError_password1">La contraseña tiene que ser de 4 a 12 dígitos.</p>
      </div>
      <div class="formItem itemPassword password2" id="item__password2">
        <label for="inputPasswprd" class=" formLabel userPassword"
          >Por favor ingrese nuevamente el password:</label
        >
        <input
          type="password"
          class="input-group mb-3 formInput inputPassword"
          name="password2"
          id="password2"
          required
        />
        <p class="inputAlertaError_password2">Los password no coinciden.</p>
      </div>
      <div class="containerButtons" id="containerButtons">
        <button class="btn btnR btnSpecial me-3" id="registrar" type="submit" >Registrarse</button>
        <button class="btn btnSpecial me-3" id="reset" type="reset">reset</button>
      </div>
    </form>
  </div>
  
</div>`;

    
/*       modalAddUser.append(formUserRegister); */
}

