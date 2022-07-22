'use strict';
const $calculator= document.querySelector('.calculator');
const $input= document.querySelector('.input');
const $keys= document.querySelector('.calculator-keys')

function numClick(event) {

    const key= event.target;
    const keyValue= key.textContent;
    const result= $input.textContent;
    const $type= key.dataset.type; // 얘는 또 type 안붙이면 안나와...뭐야 진짜...
    const previousKey= $calculator.dataset; //이거 진짜 정말 진심 모르겠어...
    //이거 해결 못하면 절대 못할것같아...
    const $operator= key.dataset;
    console.log(previousKey);

    switch($type) {
        case 'a_reset':
             $input.textContent= '0'; //result= ~~은 안됨 내 생각엔 const로 설정해놔서 변수명으로 넣어주면 안되는듯
            break;

        
        case 'num':
            if(result === '0' || previousKey === 'operator') {
                 $input.textContent= keyValue;
                 console.log('ok');
            } 
            // if(numOne= true) {
            //     numOne= result + keyValue;
            //     $input.textContent= numOne;
            //     }
            
            break;

          

        case 'operator':


        }
        // case 'operator':
        //     operator= keyValue;
        //     // $input.textContent= operator;
        //     switch($operator) {
        //         case 'plus':
        //             parseFloat(numOne) + parseFloat(numTwo);
        //             break;
        //     }
        //     break;
            


        }



            // if(result === '0' || result === numOne) { //numOne= '0' 으로 해놨어서 계속 앞에 0안사라졌었음!!!
            //     numOne= keyValue;
            //     $input.textContent= numOne;
            // } else if (operator= true) {
            //     numTwo= keyValue;
            //     $input.textContent= numTwo;
            // } else {$input.textContent= result + keyValue;}
            // // $input.textContent= result + numTwo; ->이렇게 해서 앞에 0 안사라지는건가...
            // console.log(numOne, numTwo);
            // break;


    // if($type === 'a_reset') {
    //     $input.textContent= '0';
    // }

    // if($type === 'num') {
    //     $input.textContent= keyValue;

    //     if(result === '0'){
    //         $input.textContent= keyValue;
    //     }
    // } 

    // if($type === 'btn-operator') {
    //     $input.textContent= result + keyValue;
    // }

    // if($type === 'a_deciaml') {

    // }

    // if($type === 'a_equal') {

    // }

    // operator 버튼


$keys.addEventListener('click', numClick);