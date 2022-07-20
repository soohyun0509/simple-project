'use strict';
const $calculator= document.querySelector('.calculator');
const $input= document.querySelector('.input');
const $keys= document.querySelector('.calculator-keys')

function numClick(event) {
    const key= event.target
    let keyValue= key.textContent
    let result= $input.textContent
    let $sign= key.dataset.type

    if($sign == 'num') {
        $input.textContent= keyValue;
    } 
}

$keys.addEventListener('click', numClick);