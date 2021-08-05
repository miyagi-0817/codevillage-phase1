// 最初にクリックされた時間を獲得する
// 2回目にクリックされた時間を獲得する
// ２つの時間の差を計算
// 時間の差を表示させる
// 時間をリセット

let timer;
let startTime;
let diffTime = null;
let nowTime;
// console.log(nowTime.getHours());

const confirmTime2 = document.getElementById('confirmTime2');
const startTimer2 = document.getElementById('startTimer2');


confirmTime2.addEventListener('click', function () {
    nowTime = new Date();
    if (diffTime === null) {
        diffTime = Math.floor((nowTime.getTime() - startTime.getTime()) / 1000);
    }
    if (diffTime === 20) {
        alert('ジャスト！やるやないかい');
    } else if (diffTime < 20) {
        alert(`まだまだだね！${diffTime}です`);
    } else {
        alert('おっせぇわ！');
    };
});

startTimer2.addEventListener('click', function () {
    startTime = new Date();
    diffTime = null;
    timer = setInterval('countUp2()', 1000);
});

const countUp2 = function () {
    let checkTime = new Date();
    let diffTime = Math.floor((checkTime.getTime() - startTime.getTime()));
    // let diffTime = Math.floor((checkTime.getTime() - startTime.getTime()) / 1000);
    if (diffTime === 4) {
        alert('やり直せ！');
    };
};

