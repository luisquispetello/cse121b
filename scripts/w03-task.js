/* LESSON 3 - Programming Tasks */

let button = document.querySelectorAll('input[type="button"]');

/* FUNCTIONS */
/* Function Definition - Add Numbers */

const add = (num1, num2) => {
  return num1 + num2;
};

const addNumbers = () => {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);
  document.querySelector("#sum").value = add(addNumber1, addNumber2);
};

button[0].addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = (number1, number2) => {
  return number1 - number2;
};

const subtractNumbers = () => {
  let subtractNumber1 = Number(document.querySelector("#subtract1").value);
  let subtractNumber2 = Number(document.querySelector("#subtract2").value);
  document.querySelector("#difference").value = subtract(
    subtractNumber1,
    subtractNumber2
  );
};

button[1].addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  let factor1 = Number(document.querySelector("#factor1").value);
  let factor2 = Number(document.querySelector("#factor2").value);
  document.querySelector("#product").value = multiply(factor1, factor2);
};

button[2].addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {
  return number1 / number2;
};

const divideNumbers = () => {
  let dividend = Number(document.querySelector("#dividend").value);
  let divisor = Number(document.querySelector("#divisor").value);
  document.querySelector("#quotient").value = divide(dividend, divisor);
};

button[3].addEventListener("click", divideNumbers);

/* Decision Structure */
button[4].addEventListener("click", () => {
  let subtotal = Number(document.querySelector("#subtotal").value);
  let total = subtotal;
  if (document.querySelector("#membership").checked) {
    total *= 0.8; // Apply 20% discount
  }
  document.querySelector("#total").textContent = total.toFixed(2);
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").textContent = numbersArray;

/* Output Odds Only Array */
let oddsArray = numbersArray.filter(num => num % 2 !== 0);
document.querySelector("#odds").textContent = oddsArray;

/* Output Evens Only Array */
let evensArray = numbersArray.filter(num => num % 2 === 0);
document.querySelector("#evens").textContent = evensArray;

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((acc, curr) => acc + curr, 0);
document.querySelector("#sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(num => num * 2);
document.querySelector("#multiplied").textContent = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numbersArray.map(num => num * 2).reduce((acc, curr) => acc + curr, 0);
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;
