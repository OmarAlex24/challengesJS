const validateLength = (name) => name.length > 3;

const hasNumbers = (name) => {
  const regex = /^[0-9]*$/;

  return regex.test(name);
};

const validateName = (inputName, errDiv) => {
  if (!validateLength(inputName.value)) {
    errDiv.innerText = 'El nombre debe ser mayor a 3 caracteres';
    return false;
  }
  if (hasNumbers(inputName.value)) {
    errDiv.innerText = 'El nombre no puede contener numeros';
    return false;
  }
  errDiv.innerText = '';
  return true;
};

const validateMail = (inputMail, errDiv) => {
  const mailRgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!mailRgx.test(inputMail.value)) {
    errDiv.innerText = 'El email no es valido';
    return false;
  }
  errDiv.innerText = '';
  return true;
};

const formCards = document.querySelectorAll('.card');

const inputs = document.querySelectorAll('.input');
const errName = document.querySelector('.err-name');
const errEmail = document.querySelector('.err-email');

const continueBtn = document.querySelector('.btn-register');

continueBtn.addEventListener('click', () => {
  if (!validateName(inputs[0], errName)) {
    return false;
  }
  if (!validateMail(inputs[1], errEmail)) {
    return false;
  }

  formCards[0].style.display = 'none';
  formCards[1].style.display = '';
});
