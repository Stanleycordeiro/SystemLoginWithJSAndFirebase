// elementos
const btnLogin = document.getElementById("btnLogin");
const btnRecuperar = document.getElementById("btnRecuperar");
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");




// liberar botão de login após verificar e-mail válido
function onChangeEmail() {
  toggleEmailErros();
  toggleBtnLogin();
}

// liberar botão de login após verificar senha válida
function onChangePassword() {
  toggleBtnLogin();
  togglePasswordErros();
}

//desabilitar tecla enter
document.addEventListener('keypress', function(event) {
  var key = event.which || event.keyCode;
  if (key === 13) {
    event.preventDefault();
  }
});

// acionar verificação ao digitar no campo de e-mail
inputEmail.addEventListener("input", onChangeEmail, login);

// acionar verificação ao digitar no campo de senha
inputPassword.addEventListener("input", onChangePassword, login);

// função que habilita ou desabilita o botão de login
function toggleBtnLogin() {
  const emailValid = isEmailValid();
  const passwordValid = isPasswordValid();
  btnLogin.disabled = !emailValid || !passwordValid;
}

//redireciona para a pagina home
function login() {
  showLoading();
  let email = inputEmail.value;
  let password = inputPassword.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      hideLoading();
      window.location.href = "./pages/home/home.html";
    })
    .catch((error) => {
      hideLoading();
      alert(getErrorMessage(error));
    });
}

function getErrorMessage(error) {
  if (error.code == "auth/user-not-found") {
    return "Usuario não cadastrado";
  }
  return error.message;
}

function register() {
  window.location.href = "./pages/register/register.html";
}

// valida se o e-mail é válido
function isEmailValid() {
  let email = inputEmail.value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

// valida se a senha é válida
function isPasswordValid() {
  let password = inputPassword.value;
  if (!password) {
    return false;
  }
  return true;
}

// chama as mensagens de erro do e-mail
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

// chama as mensagens de erro da senha
function togglePasswordErros() {
  let password = inputPassword.value;
  if (!password) {
    document.getElementById("errorPasswordRequire").style.display = "block";
  } else {
    document.getElementById("errorPasswordRequire").style.display = "none";
  }
}

//quando atulaizar a pagina btn login desativado
window.addEventListener("load", function () {
  btnLogin.disabled = true;
});
