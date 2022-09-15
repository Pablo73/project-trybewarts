const positionEmail = document.getElementsByClassName('email')[0];
const positionSenha = document.getElementsByClassName('senha')[0];
const positionButton = document.getElementsByClassName('button')[0];
const textAreaEl = document.getElementById('textarea');
const counterEl = document.getElementById('counter');
const agreementCheckboxEl = document.getElementById('agreement');
const submitBtnEl = document.getElementById('submit-btn');

function logPassword() {
  if (positionEmail.value === 'tryber@teste.com' && positionSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
positionButton.addEventListener('click', logPassword);

function updateCounter() {
  const charactersLeft = Math.abs(textAreaEl.value.length - 500);
  counterEl.textContent = charactersLeft;
}

function enableSubmitBtn(event) {
  const isChecked = event.target.checked;
  submitBtnEl.classList.toggle('disabled', !isChecked);
  if (isChecked) submitBtnEl.disabled = false;
}

textAreaEl.addEventListener('input', updateCounter);
agreementCheckboxEl.addEventListener('click', enableSubmitBtn);
