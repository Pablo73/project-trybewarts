const positionEmail = document.getElementsByClassName('email')[0];
const positionSenha = document.getElementsByClassName('senha')[0];
const positionButton = document.getElementsByClassName('button')[0];
const textAreaEl = document.getElementById('textarea');
const counterEl = document.getElementById('counter');
const agreementCheckboxEl = document.getElementById('agreement');
const submitBtnEl = document.getElementById('submit-btn');
const informationName = document.querySelector('#name');
const informationEmail = document.querySelector('#email');
const informationHome = document.querySelector('#home');
const informationFamily = document.querySelector('#family');
const informationMatter = document.querySelector('#matter');
const informationEvaluation = document.querySelector('#evaluation');
const informationComments = document.querySelector('#comments');
const evaluationForm = document.querySelector('#evaluation-form');
const inputName = document.getElementById('input-name');
const inputLastename = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const optionHome = document.getElementById('house');
const inputFamily = document.getElementsByName('family');
const inputStudy = document.getElementsByName('techs');
const inputSatisfaction = document.getElementsByName('rate');
const inputTextarea = document.getElementById('textarea');

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

function valueFamily() {
  for (let index = 0; index < inputFamily.length; index += 1) {
    if (inputFamily[index].checked) {
      return (inputFamily[index].value);
    }
  }
}

function valueStudy() {
  const study = [];
  for (let index = 0; index < inputStudy.length; index += 1) {
    if (inputStudy[index].checked) {
      study.push(` ${inputStudy[index].value}`);
    }
  }
  return (study);
}

function valueSatisfaction() {
  for (let index = 0; index < inputSatisfaction.length; index += 1) {
    if (inputSatisfaction[index].checked) {
      return (inputSatisfaction[index].value);
    }
  }
}

function valueHome() {
  const value = optionHome.options[optionHome.selectedIndex].text;
  return (value);
}

function valueNameLastname() {
  const value = `Nome: ${inputName.value} ${inputLastename.value}, `;
  return (value);
}

function valueEmail() {
  console.log(inputEmail.value);
  const value = `Email: ${inputEmail.value}, `;
  return (value);
}

function valueObsrvation() {
  const value = `Observações: ${inputTextarea.value}`;
  return (value);
}

function worksheetData(event) {
  event.preventDefault();
  evaluationForm.style.display = 'none';

  informationName.innerHTML = valueNameLastname();
  informationEmail.innerHTML = valueEmail();
  informationHome.innerHTML = `Casa: ${valueHome()}, `;
  informationFamily.innerHTML = `Família: ${valueFamily()}, `;
  informationMatter.innerHTML = `Matérias: ${valueStudy()} `;
  informationEvaluation.innerHTML = `Avaliação: ${valueSatisfaction()}, `;
  informationComments.innerHTML = valueObsrvation();
}

submitBtnEl.addEventListener('click', worksheetData);
