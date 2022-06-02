function add(n1, n2){
  return n1 + n2;
}

function subtact(n1, m2){
  return n1 - n2;
}

function multiply(n1, n2){
  return n1 * n2;
}

function divide(n1, n2){
  return n1 / n2;
}

function operate(operator, n1, n2){
  let result = 0;
  switch(operator){
    case '+':
      result += add(n1, n2);
      break;
    case '-':
      result += subtract(n1, n2);
      break;
    case '*':
      result += multiply(n1, n2);
      break;
    case '/':
      result += divide(n1, n2);
      break;
  };
  return Math.round((result + Number.EPSILON) * 100) /100;
};
