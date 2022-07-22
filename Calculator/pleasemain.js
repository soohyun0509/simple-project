const $calculator= document.querySelector('.calculator');
const $keys= document.querySelector('.calculator-keys');
const $input= document.querySelector('.input');

$keys.addEventListener('click', event => {
    const key= event.target;
    const result= $input.textContent;
    const keyValue= key.textContent;
    const $type= key.dataset.type;
    const $sign= key.dataset.sign;
    const {previousKey}= $calculator.dataset;
// 와 진짜 눈물날수도...뭔가 해결은 안됐지만 조금은 알것같아
// 그니까 밑에서 operator에 이걸 설정해주는게 중요한듯!
// $calculator.dataset.previouskey= 'opearator'
// 이거 해주면 화면 html요소에 operator버튼 누를때마다 이게 생겨...근데 위에서 하는 previous변수 선언은 아직 왜 하는지 모르겠어...
// 이거 안해도 요소에서 변동은 생겨
// 근데 왜 해결이 안되지...
// 와 씨 됐어 일단 $calculator.dataset.previouskey= 'opearator' 요기 operator 오타있어서 previous === 'operator'인식못했음
// 그리고 previousKey에 {} 이거 꼭 쳐줘야됨 왤까 뭘까
// object로 만들어줘야 key:value 이런식으로 만들어져서 그런건가??
// 그니까 약간 $calculator.dataset 이 뒤에 .붙이고 쓰는게 요소화면에 나와 이게 중요한건가
    // console.log($type);

    switch($type) {
        case 'a_reset': // 아 previousKey 등등이 안없어짐...
            $input.textContent= '0';

            break;
        
        case 'num':
            $calculator.dataset.previousKey= 'num'
            if(result === '0' || previousKey === 'operator') {
                $input.textContent= keyValue;
            } else {$input.textContent= result + keyValue;}
            // operator누르고 num 눌러도 previousKey가 안바뀌니까 두번째숫자는 계속 하나씩만 나옴    
            // $calculator.dataset.previousKey= 'num' 이거로 해결
            break;

        case 'operator':
            $calculator.dataset.previousKey= 'operator'
            $calculator.dataset.firstNum= result; // 와 이해했어 대박이야 진짜 소름 이렇게 쓴게 요소html에 만들어진다는게 제일 중요한거네
            $calculator.dataset.operator= $sign;

            break;


        case 'a_decimal':
            if(result.indexOf('.') === -1) {
                $input.textContent= result + keyValue;
            } else {return;}
            break;

        case 'a_equal':
            const numberOne= $calculator.dataset.firstNum;
            const signal= $calculator.dataset.operator;
            const numberTwo= result;


            switch(signal) {
                case 'plus':
                    $input.textContent= parseFloat(numberOne) + parseFloat(numberTwo);
                    
                    break;

                case 'minus':
                    $input.textContent= parseFloat(numberOne) - parseFloat(numberTwo);
                    break;
                
                case 'mul':
                    $input.textContent= parseFloat(numberOne) * parseFloat(numberTwo);
                    break;

                case 'divide':
                    $input.textContent= parseFloat(numberOne) / parseFloat(numberTwo);
                    break;     
            }
           //$input.textContent= parseFloat().toFixed(7); //parseFloat(result.toFixed(7)) -> nope!
            //아 이게 막 3.0000000 이딴식으로 뜨네 왜이래진짜
        
        break;

        default:
             alert('뭘 누르신거지요?');

    }
})



// = 이거 누르고 다시 숫자누를때 자동으로 초기화 시키고싶다
// 숫자 범위 밖에 나가는것도 못하게 하고싶다
// = 을 date-operator에 뜨게해줘야할듯
