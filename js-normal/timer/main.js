// フォームで任意の数を指定
// ー指定の数を受け取る
// ボタンが押されたら指定された数から１秒ごとにカウントダウン
// ストップボタンで数を一時停止
// ０になったらアラート表示

// const startTimer = document.getElementById('startTimer');
// const stopTimer = document.getElementById('stopTimer');

// if (sec>60){
//     let tiMin= sec/60;
// }
// let inputTime = document.getElementById('inputTime');

// miss! let nowTime = document.getElementById('nowTime');
// const nowTime = document.getElementById('nowTime');
// miss! inputTime = 10;
// let sec = 10;


//     const setTime = document.getElementById('setTime');
// let sec;
// let tiSec;
// let tiMin;
// let tiHour;


// // miss! setTime = addEventListener('click',function(){
// setTime.addEventListener('click', function () {
//     clearInterval(timer);
//     sec = document.getElementById('inputTime').value;

//     tiSec = Math.floor(sec / 60);
//     tiMin = Math.floor((sec % 3600) / 60);
//     tiHour = Math.floor(sec / 3600);
//     // nowTime.innerHTML;
//     nowTime.textContent = `${tiHour}時間${tiMin}分${tiSec}秒です`;
// });

// const countDown = function () {
//     sec -= 1;
//     nowTime.textContent = sec;
//     if (sec === 0) {
//         clearInterval(timer);
//         tiSec = Math.floor(sec / 60);
//         tiMin = Math.floor((sec % 3600) / 60);
//         tiHour = Math.floor(sec / 3600);
//         alert('終了！');
//     }
// };

// let timer;
// startTimer.addEventListener("click", function () {
//     clearInterval(timer);
//     timer = setInterval('countDown()', 1000);
// });

// stopTimer.addEventListener('click', function () {
//     clearInterval(timer);
//     tiSec = Math.floor(sec / 60);
//     tiMin = Math.floor((sec % 3600) / 60);
//     tiHour = Math.floor(sec / 3600);
//     // nowTime.innerHTML('sutoppuchuudesu')
//     nowTime.textContent = `${tiHour}時間${tiMin}分${tiSec}秒で止まっています！`;
// })
let timer;
let sec = 10;

const nowTime = document.getElementById('nowTime');
// const setTime = document.getElementById('setTime');
// const startTimer = document.getElementById('startTimer');
// const stopTimer = document.getElementById('stopTimer');

setTime.addEventListener('click', function () {
    sec = document.getElementById('inputTime').value;
    nowTime.textContent = `${sec}：セット完了です`;
});

startTimer.addEventListener('click', function () {
    clearInterval(timer);
    timer = setInterval('countDown()', 1000);
});

const countDown = function () {
    sec -= 1;
    nowTime.textContent = sec;
    console.log(sec);
    if (sec === 0) {
        alert('終了');
        clearInterval(timer);
    }
};

stopTimer.addEventListener('click', function () {
    clearInterval(timer);
    nowTime.textContent = `${sec} + ：ストップしました`;
});