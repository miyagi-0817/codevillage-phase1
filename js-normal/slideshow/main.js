//自分の解答
//  最初は画像表示
// クリックされるたびに画像切り替え
// 3回クリックしたら元に戻る
// 繰り返し

// 解答サンプル
//  - 連想配列に画像とボタンの中身の文字をセット
//  - ボタンを押す
//  - 現在の数字を確認
//  - 3だったら0にして、季節を冬に戻す
//  - それ以外だったら1を足して季節を進める
//  - 画像を表示する

// 自己解答
// let season = { season: "冬", img: 'img / slide01.png' };

// 変数をまとめる前段階で使っただけ
// 実際に完成に必要な部分ではない
// const winter = { img: './img/slide01.png', text: '冬ですね〜、さむっ！' };
// const spring = { img: './img/slide02.png', text: '春ですな〜、桜っ！' };
// const summer = { img: './img/slide03.png', text: '夏です！、暑い！' };
// const fall = { img: './img/slide04.png', text: '秋ですね〜、ちょうどいいっ！' };

const data = [
    { imgNum: 1, img: './img/slide1.png', text: '春へ' },
    { imgNum: 2, img: './img/slide2.png', text: '夏へ' },
    { imgNum: 3, img: './img/slide3.png', text: '秋へ' },
    { imgNum: 4, img: './img/slide4.png', text: '冬へ' },

    //     // winter, spring, summer, fall
];

// // console.log(data[0].text);

// const pushBtn = document.getElementById("pushBtn");

// pushBtn.addEventListener("click", function () {
//     if (imgNum === 3) {
//         imgNum = 0;
//     } else {
//         imgNum += 1;
//     };
//     pushBtn.textContent = data[0].text;
// });

const pushBtn = document.getElementById('pushBtn');
let imgNum = 0;
// console.log(imgNum);
const imgSection = document.getElementById('viewImg');
pushBtn.textContent = data[imgNum].text;
imgSection.setAttribute('src', data[imgNum].img);

pushBtn.addEventListener('click', function () {
    if (imgNum === 3) {
        imgNum = 0;
    } else {
        imgNum += 1;
    }

    imgSection.setAttribute('src', data[imgNum].img);
    pushBtn.textContent = data[imgNum].text;
});