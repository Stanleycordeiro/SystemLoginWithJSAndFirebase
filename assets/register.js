//elementos
const form = {
  email: () => document.getElementById("inputEmail"),
  password: () => document.getElementById("inputPassword"),
  confirmPassworrd: () => document.getElementById("inputConfirmPassword"),
  btnRegister: () => document.getElementById("btnRegister"),
  //mensagens de erro
  messageErrorRequireEmail: () => document.getElementById("errorEmailRequire"),
  messageErrorInvalidEmail: () => document.getElementById("errorEmailInvalid"),
  messageErrorRequirePassword: () =>
    document.getElementById("errorPasswordRequire"),
  messageErrorInvalidPassword: () =>
    document.getElementById("errorPasswordInvalid"),
  messageErrorConfirmPassword: () =>
    document.getElementById("errorConfirmPassword"),
};

//validação ao digitar
form.email().addEventListener("input", onChangeEmail);
form.password().addEventListener("input", onChangePassword);
form.confirmPassworrd().addEventListener("input", onChangeConfirmPassword);

//função validação input email chamando error message
function onChangeEmail() {
  const email = form.email().value;
  form.messageErrorRequireEmail().style.display = email ? "none" : "block";
  form.messageErrorInvalidEmail().style.display = validateEmail(email)
    ? "none"
    : "block";
    toogleBtnRegister();
}

//função validação input password chamando error message
function onChangePassword() {
  const password = form.password().value;
  form.messageErrorRequirePassword().style.display = password
    ? "none"
    : "block";
  form.messageErrorInvalidPassword().style.display =
    password.length >= 6 ? "none" : "block";
  validatePasswordMatch();
  toogleBtnRegister();
}

//função validação input confirm password chamando error message
function onChangeConfirmPassword() {
  validatePasswordMatch();
  toogleBtnRegister();
}

//função de validação de senha iguais
function validatePasswordMatch() {
  const confirmPassworrd = form.confirmPassworrd().value;
  const password = form.password().value;
  form.messageErrorConfirmPassword().style.display =
    confirmPassworrd == password ? "none" : "block";
}

//função para validar e habilitar e desabilitar o button registraar
function toogleBtnRegister() {
  form.btnRegister().disabled = !isFormValid();
}

//função de validação do formulario
function isFormValid() {
  const email = form.email().value;
  if (!email || !validateEmail(email)) {
    return false;
  }
  const password = form.password().value;
  if (!password || password.length < 6) {
    return false;
  }

  const confirmPassworrd = form.confirmPassworrd().value;
  if (password != confirmPassworrd) {
    return false;
  }
  return true;
}
