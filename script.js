const positionEmail = document.getElementsByClassName('email')[0];
const positionSenha = document.getElementsByClassName('senha')[0];
const positionButton = document.getElementsByClassName('button')[0];

function logPassword() {
  if (positionEmail.value === 'tryber@teste.com' && positionSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
positionButton.addEventListener('click', logPassword);
