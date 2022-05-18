const number_first = document.getElementById("first__number");
const number_second = document.getElementById("second__number");
const result = document.getElementById("result");
var btn = document.querySelector("button");

const comparaNumeros = (num1, num2) => {
  num1 = Number(number_first.value);
  console.log(num1);
  num2 = Number(number_second.value);
  console.log(num2);
  let some = num1 + num2;
  if (num1 === num2) {
    result.innerHTML = `Os números ${num1} e ${num2} são iguais e a soma entre eles é ${some}`;
  } else {
    result.innerHTML = `Os números ${num1} e ${num2} não são iguais e a soma entre eles é ${some}`;
  }
  console.log(some);
};
// comparaNumeros();
btn.addEventListener("click", comparaNumeros);
