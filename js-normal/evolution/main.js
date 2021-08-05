// ボタンを押す
// 4 / 10 の確率で1枚の画像を表示する
// 3 / 10 の確率で2枚の画像を表示する
// 2 / 10 の確率で3枚の画像を表示する
// 1 / 10 の確率で4枚の画像を表示する

const showImg = document.getElementById("showImg");
const setBtn = document.getElementById('setBtn');
const resetBtn = document.getElementById('resetBtn');

const first = document.createElement('div');

// console.log(random);

setBtn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * 10);
    console.log(random);

    // showImg.innerHTML = "<img src= ' ./ img / evolution1.png'/>";
    // first.innerHTML = "<img src= ' ./ img / evolution1.png'/>";
    showImg.innerHTML = "";
    first.innerHTML = "<img src='./img/evolution1.png' alt='原人'  />";
    // showImg.innerHTML = "<img src='./img/evolution1.png' alt='原人'  />";
    showImg.appendChild(first);

    // document.write('<img src= " ./ img / evolution1.png">');
    // if (random >= 9) {
    //     // showImg.innerHTML = '<img src= " / img / evolution4.png">';
    //     first.innerHTML = "<img src= './img/evolution4.png'>";
    //     showImg.appendChild(first);

    // }
    // if (random >= 7) {
    //     const second = document.createElement('div');

    //     second.innerHTML = "<img src= './img/evolution3.png'>";
    //     showImg.appendChild(second);
    // }
    // if (random >= 4) {
    //     const third = document.createElement('div');

    //     third.innerHTML = "<img src= './img/evolution2.png'>";
    //     showImg.appendChild(third);
    // }
    if (random >= 4) {
        const second = document.createElement('div');
        second.innerHTML = "<img src='./img/evolution2.png' alt='旧人'  />";
        showImg.appendChild(second);
    }
    if (random >= 7) {
        const third = document.createElement('div');
        third.innerHTML = "<img src='./img/evolution3.png' alt='新人'/>";
        showImg.appendChild(third);
    }
    if (random >= 9) {
        const fourth = document.createElement('div');
        fourth.innerHTML = "<img src='./img/evolution4.png' alt='現代人'/>";
        showImg.appendChild(fourth);
    }
});

resetBtn.addEventListener('click', function () {
    showImg.innerHTML = "";
    // random = 0;
})