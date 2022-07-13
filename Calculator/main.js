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


let main= document.querySelector('.result');
let sign= document.querySelector('.btn-sign');
let num= document.querySelector('.btn-num');

function btn_click{
    if()
    
} 

document.getElementById('#one').addEventListener('click', )


const onClickNumber = (number) => () => {
    if (operator) {
      numTwo += number;
    } else {
      numOne += number;
    }
    console.log(numOne, numTwo);
    $result.value += number;
  }