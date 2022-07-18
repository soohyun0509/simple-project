'use strict';
// HTML이랑 CSS도 너무 힘들었는데...이건 얼마나...
// =을 어떻게 지 혼자 길게 있게 하는거지...(실패)
// 수식넣어줘야지...
// 인풋창에 글자나오게 해야되고...
// 일단 숫자를 누르면 나오게 해되고
// 머리터진다...이걸 인풋창에 어떻게 뜨게해...
// 지금 계산시키는게 문제가 아니여...
// 와 input을 애초에 readonly로 넣어줬으면 됐어...(이걸로 해결이 될지는 모르겠지만..)
// 처음에 div로 아예 만들어줬는데...


let numone= '';
let numtwo= '';
let sign= '';
let $sign= document.querySelector('.btn-sign');
let $result= document.querySelector('.result').value;

function numbtnClick() {
  if(sign == true) {
    numtwo += 'number';
  } else {
    numone += 'number';
  }
  console.log(numone, numtwo);
  return $result;
}


document.querySelector('#one').addEventListener('click', numbtnClick);
document.querySelector('#two').addEventListener('click', numbtnClick('2'));
document.querySelector('#three').addEventListener('click', numbtnClick('3'));
document.querySelector('#four').addEventListener('click', numbtnClick('4'));
document.querySelector('#five').addEventListener('click', numbtnClick('5'));
document.querySelector('#six').addEventListener('click', numbtnClick('6'));
document.querySelector('#seven').addEventListener('click', numbtnClick('7'));
document.querySelector('#eight').addEventListener('click', numbtnClick('8'));
document.querySelector('#nine').addEventListener('click', numbtnClick('9'));
document.querySelector('#zero').addEventListener('click', numbtnClick('0'));



function signbtnClick(signal) {
  //sign= signal;
  //signal= $sign.value
  if(numone == true && numtwo == false) {
    return $result.value;
  }
}

