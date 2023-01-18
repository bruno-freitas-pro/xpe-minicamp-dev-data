function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function setImcRange(imc) {
  var imcRange;
  console.log(!isFinite(imc));

  if (!isFinite(imc) || imc < 16) {
    imcRange = 'inválido';
  } else if (imc < 17) {
    imcRange = 'Muito abaixo do peso';
  } else if (imc < 18.5) {
    imcRange = 'Abaixo do peso';
  } else if (imc < 25) {
    imcRange = 'Peso normal';
  } else if (imc < 30) {
    imcRange = 'Acima do peso';
  } else if (imc < 35) {
    imcRange = 'Obesidade grau I';
  } else if (imc <= 40) {
    imcRange = 'Obesidade grau II';
  } else if (imc > 40) {
    imcRange = 'Obesidade grau III';
  } else {
    imcRange = 'inválido';
  }
  console.log('#imc-result:', document.querySelector('#imc-result'));
  return imcRange;
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcResultRange = document.querySelector('#imc-result-range');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;

  imcResultRange.textContent = setImcRange(formattedImc.replace(',', '.'));

  console.log(imcResult);
  console.log(imcResultRange);
}

start();
