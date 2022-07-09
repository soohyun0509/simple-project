

const start = document.querySelector('#btn-start');
const stop = document.querySelector('#btn-stop');
const reset = document.querySelector('#btn-reset');
const classtens= document.querySelector(".tens");
const classsecond= document.querySelector(".second");
let tens = 00;
let second = 00;
let Interval =null; //이거 왜 하는지 진짜 모르겠어...

// 1. tens++ 시켜야함
// 2. 숫자가 올라가는 속도를 설정해야함 1000ms- 1sec / 10000ms - 1ten 으로 (이거 필요없었음...)
// 3. start 버튼 누르면 계속 그 행동 반복하게
// 4. tens < 99 되고나면 second++ 되게
// 5. reset ~~~ 

function btnStart() {
   start.addEventListener('click', () => {
    clearInterval(Interval); // 이건 대체 왜쓰는거야?? 지금 중단하는것도 아닌데???
    Interval = setInterval(countStart, 10); // 계속 countStart 뒤에 ()넣어서 호출안됐었음
    // ()넣어버리면 countStart함수먼저 실행되기때문에 당연히 반복안됨
    }
   )}
//아니 반복이 안돼...

function btnStop() {
    stop.addEventListener('click', () =>{
        clearInterval(Interval);
    })
}

function btnReset() {
    reset.addEventListener('click', () => {
        clearInterval(Interval); // 여기엔 안넣어도 구현은 되는데 대체 왜 넣는걸까 이거...
        tens= "00";
        second= "00"; 
        classtens.innerHTML= tens;
        classsecond.innerHTML= second;

    })
}


function countStart() {
    tens++;

    if(tens <= 9) {
        classtens.innerHTML= "0" + tens;
    }

    if(tens > 9) {
        classtens.innerHTML= tens; 
    }

    if(tens > 99) {
        second++;
        classsecond.innerHTML= "0" + second;
        tens= 0;
        classtens.innerHTML= "0" + 0; // 이걸 넣어야 부드럽게 숫자가 올라가던데 이 문장이 뭔 의미인지 잘 모르겠어...
    }
    
    if(second > 9) {
        classsecond.innerHTML= second;
    }

}

btnStart();
btnStop();
btnReset();