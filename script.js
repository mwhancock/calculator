const display = document.getElementById('disp-txt');
const buttons = document.querySelectorAll('button');

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


let num1;
let num2;
let op;
function calculate(operator, n1, n2){
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if(e.target.innerText === '='){
        display.innerText = operate(op, num1, num2);
        console.log(operate(op, num1, num2))
      }else if(e.target.className === 'op-btn'){
        op = e.target.innerText;
        display.innerText += ' ' + op;
      }else if(!num1){
        num1 = parseInt(e.target.innerText);
        display.innerText = e.target.innerText;
      }else if(num1 && !num2){
        num2 = parseInt(e.target.innerText);
        display.innerText += ' ' + e.target.innerText;
      }
    })
  })
}

calculate(op, num1, num2);
