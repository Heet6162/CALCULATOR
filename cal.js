
const resultStr = document.getElementById('result');
const ac = document.getElementById('ac');
const del = document.getElementById('del');
const per = document.getElementById('persentage');
const div = document.getElementById('divided');
const multi = document.getElementById('multi');
const minus = document.getElementById('minus');
const pluse = document.getElementById('pluse');
const decimal = document.getElementById('decimal');
const equal = document.getElementById('equal');
const num = document.querySelectorAll('.num');

let result = '';
let prevResult = '';
let operator = '';

function upDisplay() {
  if (operator) {
    resultStr.innerText = `${prevResult} ${operator} ${result}`
  }
  else {
    resultStr.innerText = result;
  }
}

function appendNum(number) {
  if (number === '.' && result.includes('.') || result == '') return;
  result += number;
  upDisplay();
}

// calculate btn
function calCulate() {
  const prev = prevResult;
  const current = result;
  let evalResult;

  switch (operator) {
    case '+':
      evalResult = parseFloat(prev) + parseFloat(current);
      break;
    case '-':
      evalResult = parseFloat(prev) - parseFloat(current);
      break;
    case '*':
      evalResult = parseFloat(prev) * parseFloat(current);
      break;
    case '/':
      evalResult = parseFloat(prev) / parseFloat(current);
      break;
    case '%':
      evalResult = parseFloat(prev) % parseFloat(current);
      break;

    default:
      return;
  }
  result = evalResult.toString();
  operator = '';
  prevResult = '';
  upDisplay();
}

//select oprator
function selctOprator(op) {
  if (result == '') return;
  if (prevResult !== '' && operator !== '') { calCulate(); }

  operator = op;
  prevResult = result;
  result = '';
  upDisplay();
}
//Display number 
num.forEach(number => {
  number.addEventListener('click', () => {
    result += number.innerText;
    upDisplay();
  })
});

function deleteBtn() {  
  if (result === '' && prevResult === '' && operator == '') return;
  if (operator != '' && result == '') {
    operator = '';
    result = prevResult;
    prevResult = '';
    upDisplay();
  }
  else {
    result = result.slice(0, -1);
    upDisplay();
  }
}

// btn all clear
ac.addEventListener('click', () => {
  result = '';
  prevResult = '';
  operator = '';
  upDisplay();
});

// delete btn
del.addEventListener('click', () => {
  deleteBtn();
});
// 
decimal.addEventListener('click', () => {
  appendNum('.');
});

// pluse btn
pluse.addEventListener('click', () => {
  selctOprator('+');
})

minus.addEventListener('click', () => {
  selctOprator('-');
})

multi.addEventListener('click', () => {
  selctOprator('*');
})

div.addEventListener('click', () => {
  selctOprator('/');
})

per.addEventListener('click', () => {
  selctOprator('%');
})

equal.addEventListener('click', () => {
  if (result == '') return;
  calCulate();
  upDisplay();
})
