// 乱数取得
// 取得した値を表示
// 数字ごとにボタンがクリックされると停止
// 全ての値が揃えば成功

let testTimer1,
    testTimer2,
    testTimer3,
    testTimer4,
    testTimer5,
    testTimer6,
    testTimer7,
    testTimer8,
    testTimer9;

const nowTime1 = document.getElementById("nowTime1"),
    nowTime2 = document.getElementById("nowTime2"),
    nowTime3 = document.getElementById("nowTime3"),
    nowTime4 = document.getElementById("nowTime4"),
    nowTime5 = document.getElementById("nowTime5"),
    nowTime6 = document.getElementById("nowTime6"),
    nowTime7 = document.getElementById("nowTime7"),
    nowTime8 = document.getElementById("nowTime8"),
    nowTime9 = document.getElementById("nowTime9");

let count1 = 0,
    count2 = 0,
    count3 = 0,
    count4 = 9,
    count5 = 9,
    count6 = 9,
    count7 = 1,
    count8 = 1,
    count9 = 1,
    zcount = 0;


nowTime1.textContent = count1,
    nowTime2.textContent = count2,
    nowTime3.textContent = count3,
    nowTime4.textContent = count4,
    nowTime5.textContent = count5,
    nowTime6.textContent = count6,
    nowTime7.textContent = count7,
    nowTime8.textContent = count8,
    nowTime9.textContent = count9;

const setTime1 = document.getElementById('setTime1'),
    setTime2 = document.getElementById('setTime2'),
    setTime3 = document.getElementById('setTime3');

let slotFunction1;
let slotFunction2;
let slotFunction3;


// スロットが実行される関数及び変数
const countup1 = function () {
    // const slotFunction = setInterval(function () {
    slotFunction1 = setInterval(function () {
        if (count1 === 0) {
            count1 = 0;
            count1 += 1;
            // zcount +=1;
            nowTime1.textContent = count1;
            // nowTime4.textContent = count4;
            // count1++;
        } else if (count1 === 9) {
            count1 = 0;
            nowTime1.textContent = count1;
        } else {
            count1 += 1;
            // count1++;
            nowTime1.textContent = count1;
        };

        if (count4 === 0) {
            count4 = 0;
            count4 += 1;
            nowTime4.textContent = count4;
            // nowTime4.textContent = count4;
            // count4++;
        } else if (count4 === 9) {
            count4 = 0;
            nowTime4.textContent = count4;
        } else {
            count4 += 1;
            // count4++;
            nowTime4.textContent = count4;
        };

        if (count7 === 0) {
            count7 = 0;
            count7 += 1;
            nowTime7.textContent = count7;
            // nowTime7.textContent = count7;
            // count7++;
        } else if (count7 === 9) {
            count7 = 0;
            nowTime7.textContent = count7;
        } else {
            count7 += 1;
            // count7++;
            nowTime7.textContent = count7;
        };

    }, 10000);

}
const countup2 = function () {
    // const slotFunction1 = setInterval(function () {
    slotFunction2 = setInterval(function () {
        if (count2 === 0) {
            count2 = 0;
            count2 += 1;
            nowTime2.textContent = count2;
            // count2++;
        } else if (count2 === 9) {
            count2 = 0;
            nowTime2.textContent = count2;
        } else {
            count2 += 1;
            // count2++;
            nowTime2.textContent = count2;
        };

        if (count5 === 0) {
            count5 = 0;
            count5 += 1;
            nowTime5.textContent = count5;
            // nowTime5.textContent = count5;
            // count5++;
        } else if (count5 === 9) {
            count5 = 0;
            nowTime5.textContent = count5;
        } else {
            count5 += 1;
            // count5++;
            nowTime5.textContent = count5;
        };

        if (count8 === 0) {
            count8 = 0;
            count8 += 1;
            nowTime8.textContent = count8;
            // nowTime8.textContent = count8;
            // count8++;
        } else if (count8 === 9) {
            count8 = 0;
            nowTime8.textContent = count8;
        } else {
            count8 += 1;
            // count8++;
            nowTime8.textContent = count8;
        };
    }, 10000);
};

const countup3 = function () {
    console.log(zcount);
    // const slotFunction1 = setInterval(function () {
    slotFunction3 = setInterval(function () {
        if (count3 === 0) {
            count3 = 0;
            count3 += 1;
            nowTime3.textContent = count3;
            // count3++;
        } else if (count3 === 9) {
            count3 = 0;
            nowTime3.textContent = count3;
        } else {
            count3 += 1;
            // count3++;
            nowTime3.textContent = count3;
        };
        if (count6 === 0) {
            count6 = 0;
            count6 += 1;
            nowTime6.textContent = count6;
            // nowTime6.textContent = count6;
            // count6++;
        } else if (count6 === 9) {
            count6 = 0;
            nowTime6.textContent = count6;
        } else {
            count6 += 1;
            // count6++;
            nowTime6.textContent = count6;
        };

        if (count9 === 0) {
            count9 = 0;
            count9 += 1;
            nowTime9.textContent = count9;
            // nowTime9.textContent = count9;
            // count9++;
        } else if (count9 === 9) {
            count9 = 0;
            nowTime9.textContent = count9;
        } else {
            count9 += 1;
            // count9++;
            nowTime9.textContent = count9;
        };
    }, 10000);

};



// const startTimer = document.getElementById('startTimer');

// スロットスタート
startTimer.addEventListener('click', function () {
    // slotFunction1;
    // 変数は（）必要！！
    zcount = 0;
    countup1();
    countup2();
    countup3();
    setTime1.disabled = false;
    setTime2.disabled = false;
    setTime3.disabled = false;
    // console.log(zcount);

})

// // const setTime1 = document.getElementById('setTime1');

// // スロットを止める関数
setTime1.addEventListener('click', function () {
    clearInterval(slotFunction1);
    setTime1.disabled = true;
    zcount += 1;
    result();

})
setTime2.addEventListener('click', function () {
    clearInterval(slotFunction2);
    setTime2.disabled = true;
    zcount += 1;
    result();
})
setTime3.addEventListener('click', function () {
    clearInterval(slotFunction3);
    setTime3.disabled = true;
    zcount += 1;
    console.log(zcount);
    result();
});

const result = function () {

    if (zcount === 3) {
        if (nowTime1.textContent === nowTime2.textContent && nowTime1.textContent === nowTime3.textContent) {
            alert('揃った！');
        } else {
            alert('残念！');
        };
    };
};

// const setTime1 = document.getElementById('setTime1'),
//     setTime2 = document.getElementById('setTime2'),
//     setTime3 = document.getElementById('setTime3');

// const startTimer = document.getElementById('startTimer');

// setTime1.addEventListener('click', function () {
//     setTime1.disabled = true;

// });

// startTimer.addEventListener('click', function () {
//     setTime1.disabled = false;
//     // nowtime1.textContent = 1;
//     nowtime2.textContent = 1;
//     nowtime3.textContent = 1;

//     for (i = 0; i < 10; i++) {
//         // console.log(i);
//         nowtime1.textContent = i;
//     }
// })
// let testTimer1 = document.getElementById('testTimer1');
//コピペ
// let testTimer1, testTimer2, testTimer3;
// const nowTime1 = document.getElementById("nowTime1"),
//     nowTime2 = document.getElementById("nowTime2"),
//     nowTime3 = document.getElementById("nowTime3");

// let count1 = 0, count2 = 0, count3 = 0, leftCount = 3;

// nowTime1.textContent = count1;
// nowTime2.textContent = count2;
// nowTime3.textContent = count3;

// const setTime1 = document.getElementById("setTime1"),
//     setTime2 = document.getElementById("setTime2"),
//     setTime3 = document.getElementById("setTime3"),
//     startTimer = document.getElementById("startTimer");

// startTimer.addEventListener("click", (function () {
//     setTime1.disabled = !1,//　　　　trueと言うことにしている
//         setTime2.disabled = !1,
//         setTime3.disabled = !1,
//         clearInterval(testTimer1),
//         clearInterval(testTimer2),
//         clearInterval(testTimer3),
//         slotFunction(),
//         leftCount = 3
// }));

// // スロットが０の時の表示とそれ以外の時の動作の関数
// const slotFunction = function () {
//     testTimer1 = setInterval((function () {
//         0 === count1 ? (count1 = 0, nowTime1.textContent = count1, count1 += 1) :
//             9 === count1 ? (nowTime1.textContent = count1, count1 = 0) :
//                 (nowTime1.textContent = count1, count1 += 1)
//     }), 100),
//         // testTimer1 = setInterval((function () {
//         //     0 === count1 ? (count1 = 0, nowTime1.textContent = count1, count1 += 1) :
//         //         9 === count1 ? (nowTime1.textContent = count1, count1 = 0) :
//         //             (nowTime1.textContent = count1, count1 += 1)
//         // }), 100),
//         testTimer2 = setInterval((function () {
//             0 === count2 ? (count2 = 0, nowTime2.textContent = count2, count2 += 1) :
//                 9 === count2 ? (nowTime2.textContent = count2, count2 = 0) : (nowTime2.textContent = count2, count2 += 1)
//         }), 100),
//         testTimer3 = setInterval((function () {
//             0 === count3 ? (count3 = 0, nowTime3.textContent = count3, count3 += 1) :
//                 9 === count3 ? (nowTime3.textContent = count3, count3 = 0) : (nowTime3.textContent = count3, count3 += 1)
//         }), 100)
// };

// // ストップボタンクリック時
// setTime1.addEventListener("click", (function () {
//     // setTime1.
//     setTime1.setAttribute("disabled", "true"),
//         clearInterval(testTimer1), leftCount -= 1, checkCount()
// })),
//     setTime2.addEventListener("click", (function () {
//         setTime2.setAttribute("disabled", "true"),
//             clearInterval(testTimer2), leftCount -= 1, checkCount()
//     })),
//     setTime3.addEventListener("click", (function () {
//         setTime3.setAttribute("disabled", "true"),
//             clearInterval(testTimer3), leftCount -= 1, checkCount()
//     }));

// // アラート表示
// const checkCount = function () {
//     0 === leftCount && (leftCount = 3,
//         nowTime1.textContent === nowTime2.textContent &&
//             nowTime1.textContent === nowTime3.textContent ?
//             alert("\u304a\u3081\u3067\u3068\u3046")
//             // nowTime1.textContent === nowTime2.textContent && 
//             nowTime1.textContent === nowTime3.textContent ?
//         alert("")
//         : alert("アラート"))
// };

