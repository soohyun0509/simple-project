'use strict';
// 시간, 분, 초, AM 설정해야함
// 12시간으로 해야함 / AM PM 바뀌게 해야함
// 시간 흐르게...
// 이걸 HTMl에 안넣고 화면에 어떻게 나오게하지...

//헐 대박이야 화면에 나왔어 완전 머리에서 나온건아니지만...그래도..
//querySelector랑 innerText를 이어붙이는것도 생각못했고, = 붙이고 변수넣을것도 생각못했어...

function showTime() {
    let time= new Date();
    let hour= time.getHours();
    let minute= time.getMinutes();
    let second= time.getSeconds();
    let set= "AM";

    if (hour > 12) {
        set= "pm";
        hour= hour - 12;
    }

    hour= (hour < 10) ? "0" + hour : hour;
    minute= (minute < 10) ? "0" + minute : minute;
    second= (second < 10) ? "0" + second : second;

    let clock = hour +":" + minute+ ":" + second + " " + set;
    document.querySelector(".clock").innerText= clock;
    document.querySelector(".clock").textContent= clock; // 이건 왜넣는걸까? 안넣어도 구현되던데
    //왜 해설에서는 계속 id로 설정할까...

    setTimeout(showTime, 1000);
}

showTime();



// 실패작
// function showTime() {
//     if (hour > 12) {
//         return hour= "00";
//     }
// }

//헿 AM-PM 바꾸기는 쉽게했엏 힣(너무너무 쉬운거였지만...)

//그냥 -12하면 된다니 좀 충격이야...

//     if (hour < 10) {
//    hour= "0" + hour;
// }
//이렇게 해놨는데 ? : 이게 있었네...다들 천재네...

//const로 해놓고 계속 변수를 바꾸고 앉아있으니 안되지 바보야...정신차려

//아 시간이 가야되는데...새로고침을 해야 시간이 바뀌네 뭐지 어떡해야되지
//setTimeout 왜 넣는건가 했는데 알겠어
// 1초에 한번씩 계속 나타나게 해주는것같은데 왜넣어도 안되지 앞에 0만 자꾸 추가돼
// hour= (hour < 10) ? "0"+ hour : hour;
// minute= (minute < 10) ? "0"+ minute : minute;
// second= (second < 10) ? "0"+ second : second;
// 이 부분이 한번만 나오게 해야되는데 setTimeout 넣으니까 계속 0이 생겨
// 아 진짜 왤까...setTimeout 먼저 실행되게 해야하는것같은데 그걸 어떻게하는거지

//아니 변수를 안에설정안했다고 안될일이야...? 대체왜??????
// 아 진짜 모르겠어 뭐지 왜지 왤까
//변수를 clock 제외하고 다 전역변수로 선언했는데 전역변수랑 지역변수에서 똑같이 선언하면 지역변수에서 선언한게 우선시된다고 하는데 그래서 뭔가 자꾸 시간업데이트를 안하고
// hour= (hour < 10) ? "0"+ hour : hour; 이 부분이 계속 먼저 호출되면서 그런것같긴해 근데 확실하진않아...
// 전역변수로 하면 가끔 여러가지 문제가 생긴대... 꼭 전역변수로 해야되는거 아니면 가급적 자제하는게 좋대