const display = document.getElementById('disp-txt');
const clear = document.getElementById('clear');
const del = document.querySelector('delete');
const numButtons = Array.from(document.getElementsByClassName('num-btn'));
const opButtons = Array.from(document.getElementsByClassName('op-btn'));
const eql = document.getElementById('equal');
let num1;
let num2;
let op;


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

function getNum1(num){
  if(!op){
    display.innerText += num;
    num1 = display.innerText;
    console.log(num1)
  }
}

function getNum2(num){
  if(op){
    clearDisp();
    display.innerText += num;
    num2 = display.innerText;
    console.log(num2)
  }
}

function getOperator(operator){
  op = operator;
  display.innerText = op;
}

function clearCalc(){
    num1 = undefined;
    num2 = undefined;
    op = undefined;
    display.innerText = '';
}

function clearDisp(){
  clearDisp = function(){};
  display.innerText = '';
}



numButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    getNum1(e.target.innerText);
    getNum2(e.target.innerText);
  })
})

opButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    getOperator(e.target.innerText);
  })
})

clear.addEventListener('click', () => {
  clearCalc();
})

eql.addEventListener('click', () => {
  display.innerText = operate(op, num1, num2);
  num1 = num2;
  num2 = undefined;
  op = undefined;
})
