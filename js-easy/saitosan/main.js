// マウスオーバーで、myFunction を実行します
// function myFunction() {
//     document.getElementById("myCheck").click();
// }

// function setBtn = function () {

// let i = [0, 1, 2, 3, 4, 5];

// let random = [];

// const setBtn = function () {
//     for (let i = 0; i < 10; i++) {
//         random.push(Math.floor(Math.random() * 10) + 1);
//     }
//     console.log(random([1]));
// };

const setBtn = function () {
    const hoge = Math.random() * 10;
    // if (hoge < 5) {
    //     alert("ペッペッペー");
    // } else {
    //     alert("斉藤さんだぞ！");
    // }
    (hoge < 5) ? alert("ペッペッペー") : alert("斉藤さんだぞ！");
};

const setBtn = function () {
    const hoge = Math.random() * 10;
    // if (hoge < 5) {
    //     alert("ペッペッペー");
    // } else {
    //     alert("斉藤さんだぞ！");
    // }
    (hoge < 5) ? confirm("ペッペッペー") : alert("斉藤さんだぞ！");
    (true) ? confirm : alert("peppeppe-") : alert("saitousan");
};

// 条件演算子
// (hoge < 5) ? alert("ペッペッペー") : alert("斉藤さんだぞ！");

// let array = []
// for (let i = 0; i < 10; i++) {
//     array.push(Math.floor(Math.random() * 6) + 1);
// }
// console.log(array);