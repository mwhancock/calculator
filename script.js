const display = document.getElementById('disp-txt');
const buttons = document.querySelectorAll('button');
const numButtons = Array.from(document.getElementsByClassName('num-btn'));
const opButtons = Array.from(document.getElementsByClassName('op-btn'));
const eql = document.getElementById('equal');

function add(n1, n2){
  return n1 + n2;
}

function subtract(n1, n2){
  return n1 - n2;
}

function multiply(n1, n2){
  return n1 * n2;
}

function divide(n1, n2){
  return n1 / n2;
}

function operate(operator, n1, n2){
  let result;
  switch(operator){
    case '+':
      result = add(n1, n2);
      break;
    case '−':
      result = subtract(n1, n2);
      break;
    case '×':
      result = multiply(n1, n2);
      break;
    case '÷':
      result = divide(n1, n2);
      break;
  };
  return Number.parseFloat(result.toFixed(3));
};


function calculate(operator, n1, n2){
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // display.innerText = operate(operator, n1, n2);
    })
  })
}

let num1;
let num2;
 function getNum1(){
  numButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let num;
      display.innerText += e.target.innerText;
      if(e !== numButtons){
        num1 = display.innerText;
        if(num1 && e !== eql){
          display.innerText += display.innerText;
        }
      }
    })
  })
}

function getOperator(){
  opButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let op = e.target.innerText;
      display.innerText += op;

    })
  })
}
calculate(getOperator(), num1, num2;
