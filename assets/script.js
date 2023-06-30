//elementos
const btnLogin = document.getElementById("btnLogin");
const btnRecuperar = document.getElementById("btnRecuperar");
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");

//liverar button login após verificar email valido 
function onChangeEmail(){
  toggleEmailErros();
  toggleBtnLogin();
}
//liverar button login após verificar password valido
function onChangePassword(){
  toggleBtnLogin();
  togglePasswordErros();
}

//toda vez que a pagina e recarregada o botão permanece desabilitado
window.addEventListener("load", function () {
  btnLogin.disabled = true;
});

//função que habilita e desabilita os buttons
function toggleBtnLogin(){
  const emailValid = isEmailValid();
  const passwordValid = isEmailValid();
  btnLogin.disabled = !emailValid || !passwordValid;
}

//valida se o email e valido
function isEmailValid() {
  let email = inputEmail.value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

//valida se o password é valido
function isPasswordValid() {
  let password = inputPassword.value;
  if (!password) {
    return false;
  }
  return true;
}

//chama as mensagens de erro do email
function toggleEmailErros() {
  let email = inputEmail.value;
  if (!email) {
    document.getElementById("errorEmailRequire").style.display = "block";
  } else {
    document.getElementById("errorEmailRequire").style.display = "none";
  }

  if (validateEmail(email)) {
    document.getElementById("errorEmailInvalid").style.display = "none";
  } else {
    document.getElementById("errorEmailInvalid").style.display = "block";
  }
}

//chama as mensagens de erro do password
function togglePasswordErros() {
  let password = inputPassword.value;
  if (!password) {
    document.getElementById("errorPasswordRequire").style.display = "block";
  } else {
    document.getElementById("errorPasswordRequire").style.display = "none";
  }
}
