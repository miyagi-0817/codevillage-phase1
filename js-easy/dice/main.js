const startBtn1 = document.getElementById('player1Btn');
const body1 = document.querySelector('body');
const dice1 = document.getElementById('setPlayer1dice');



let diceNum1 = './img/saikoro1.png'
dice1.setAttribute('src', diceNum1);
body1.appendChild(dice1);


// 自作
let timer1;
startBtn1.addEventListener('click', function () {
    clearInterval(timer1);
    timer1 = setInterval('random1()', 100);
    setTimeout(() => {
        clearInterval(timer1);
    }, 3000);
});


const hikaku1 = Math.floor(Math.random() * 6 + 1);
const random1 = function () {
    diceNum1 = `./img/saikoro${hikaku1}.png`;
    // diceNum1 = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
    dice1.setAttribute('src', diceNum1);
};






const startBtn2 = document.getElementById('player2Btn');
const body2 = document.querySelector('body');
const dice2 = document.getElementById('setPlayer2dice');



let diceNum2 = './img/saikoro1.png'
dice2.setAttribute('src', diceNum2);
body2.appendChild(dice2);


// 自作
let timer2;
startBtn2.addEventListener('click', function () {
    clearInterval(timer2);
    timer2 = setInterval('random2()', 100);
    setTimeout(() => {
        clearInterval(timer2);
    }, 3000);
});


const hikaku2 = Math.floor(Math.random() * 6 + 1);
const random2 = function () {
    // diceNum2 = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
    diceNum2 = `./img/saikoro${hikaku2}.png`;
    dice2.setAttribute('src', diceNum2);
};

const result = function () {


    if (hikaku1 > hikaku2) {
        result.innerHTML('2の勝ち！');
    } else {
        result.innerHTML('１の勝ち！');
    };
}

const player1Btn = document.getElementById("player1Btn");
const player2Btn = document.getElementById("player2Btn");
const setPlayer1dice = document.getElementById("setPlayer1dice");
const setPlayer2dice = document.getElementById("setPlayer2dice");
const result = document.getElementById("result");

let player1Timer;
let player2Timer;
let player1Num = 1;
let player2Num = 1;
let turn = 2;

let player1Dice = `./img/saikoro${player1Num}.png`;
setPlayer1dice.setAttribute("src", player1Dice);
let player2Dice = `./img/saikoro${player2Num}.png`;
setPlayer2dice.setAttribute("src", player2Dice);
//プレイヤーのダイスの番号を決めて画像のパスを返す
const createPlayerDice = (player) => {
    const playerNum = Math.floor(Math.random() * 6 + 1);
    if (player === 1) {
        player1Num = playerNum;
    } else if (player === 2) {
        player2Num = playerNum;
    }
    const playerDice = `./img/saikoro${playerNum}.png`;
    return playerDice;
};
// サイコロを振る
const playerRandom = function (player) {
    playerDice = createPlayerDice(player);
    if (player === 1) {
        setPlayer1dice.setAttribute("src", playerDice);
    } else if (player === 2) {
        setPlayer2dice.setAttribute("src", playerDice);
    }
};
// ボタン
const player1 = 1;
const player2 = 2;
player1Btn.addEventListener("click", function () {
    clearInterval(player1Timer);
    player1Timer = setInterval(() => playerRandom(player1), 100);
    player1Btn.disabled = true;
    asyncFunc(player1);
});
player2Btn.addEventListener("click", function () {
    clearInterval(player2Timer);
    player2Timer = setInterval(() => playerRandom(player2), 100);
    player2Btn.disabled = true;
    asyncFunc(player2);
});
const check = () => {
    if (turn !== 0) {
        return;
    }
    if (player1Num > player2Num) {
        result.textContent = "player1の勝利";
    } else if (player1Num === player2Num) {
        result.textContent = "引き分け";
    } else {
        result.textContent = "player2の勝利";
    }
    player1Btn.disabled = false;
    player2Btn.disabled = false;
    turn = 2;
};
// playerという関数に対してasyncと宣言（この関数は非同期処理！）し、asyncFuncに代入
const asyncFunc = async (player) => {
    // 無名関数にasyncと宣言。randomに代入
    const random = async () => {
        // awaitでPromiseの中にあるresolveが実行されるまで待機（処理を一時停止）させる！
        await new Promise((resolve) => {
            // ifなどの条件に当てはまらない場合は３秒後は???の表示が続く
            result.textContent = "???";
            // ３秒後に実行されるもの
            setTimeout(() => {
                // resolve＝処理完了！161行目のランダムに返す
                resolve();

                // もしplayerが1ならplayer1Timerが終了する
                if (player === 1) {
                    clearInterval(player1Timer);
                    // もしplayerが2ならplayer2Timerが終了する
                } else if (player === 2) {
                    clearInterval(player2Timer);
                }

            }, 3000);

        });
    };
    // resolveされると143行目のrandomがまた実行される！
    await random();


    turn -= 1;
    check();
};









