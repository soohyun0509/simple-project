
let $calculator= document.querySelector('.calculator');
let $result= document.querySelector('.result');
let $keys= document.querySelector('.calculator__keys');

$keys.addEventListener('click', e => {
    if(!e.target.closest('button')) {
        return;
    }  
    let key= e.target; // key = $keys.addEventListener 
    let keyvalue= key.textContent;
    let resultvalue= $result.textContent;
    let {type}= key.dataset;
    let {previousKeyType}= $calculator.dataset;

    if(type === 'reset') {
        $result.textContent= '0';
    }
    // if (type === 'clear') {
    //     display.textContent = (display.textContent).slice(0,-1);
    // }  뭔지 모르겠음

    if(type === 'number') {
        if(
            resultvalue === '0' ||
            previousKeyType === 'sign'
            ) {
                $result.textContent= keyvalue;
            } else {
                $result.textContent= resultvalue + keyvalue;
            }
    }

    if(type === 'sign') {
        let signkeys= $keys.querySelectorAll('[data-type= "sign"]')
        signkeys.forEach(element => {
            element.dataset.state= ''
        })
        key.dataset.state= 'selected';
        $calculator.dataset.firstnumber= resultvalue;
        $calculator.dataset.sign= key.dataset.key;
    }
    if(type === 'decimal') {
        if(resultvalue.indexOf('.') === -1 ) {
            $result.textContent= resultvalue + keyvalue;
        } else {return;}
    }

    if (type === 'equal') {
        const firstNumber = $calculator.dataset.firstNumber;
        const sign = $calculator.dataset.sign;
        const secondNumber = resultvalue;
        const input = calculate(firstNumber, sign, secondNumber);
        $result.textContent = parseFloat(input.toFixed(7));
    }

    $calculator.dataset.previousKeyType = type;
});

function calculate (firstNumber, sign, secondNumber) {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    if (sign === 'plus') return firstNumber + secondNumber;
    if (sign === 'minus') return firstNumber - secondNumber;
    if (sign === 'mul') return firstNumber * secondNumber;
    if (sign === 'divide') return firstNumber / secondNumber;
}

