// 自分の手を選ぶ
// 生成した数により相手のてを表示
// 乱数を生成
// 自分のてと相手の手を比較し勝敗を表示

// const myhand = document.getElementById('myhand');
// const pcHand = document.getElementById('cpHand');
// pcHand.textContent = '相手のて';
// const log = document.getElementById('log');
// log.textContent = '結果';

const gameStart = document.getElementById('gameStart');

const setHand = document.getElementById('setHand');
const player1Hand = document.getElementById('player1Hand');
const player = document.getElementById('player');

let p1;
let p2;

let cNum = 0;
setHand.addEventListener('click', function () {
    if (cNum === 0) {
        player1Hand.textContent = ('セット完了');
        p1 = document.getElementById('playerHand').value;
        player.textContent = ('player2');
    } else {
        player2Hand.textContent = ('セット完了');
        p2 = document.getElementById('playerHand').value;
        player.textContent = '準備完了！';
    }
    cNum += 1;
})

gameStart.addEventListener("click", function () {
    // const p2 = Ma't'h.floor(Math.random() * 3);
    // if (pcNum == 0) {
    //     pcHand.textContent = '相手はぐー！';
    // } else if (pcNum == 1) {
    //     pcHand.textContent = '相手はちー！';
    // } else if (pcNum == 2) {
    //     pcHand.textContent = '相手はぱー！';
    // };

    if (cNum !== 2) {
        alert('そんなに押さないで！');
    }

    switch (p1) {
        case '0': {
            if (p2 === '0') {
                log.textContent = 'あいこだね〜';
            } else if (p2 === '1') {
                log.textContent = 'かち！おめでっと！';
            } else if (p2 === '2') {
                log.textContent = '負けた！';
            }
            break;
        }
        case '1': {
            if (p2 === '0') {
                log.textContent = '負けた！';
            } else if (p2 === '1') {
                log.textContent = 'あいこだね〜';
            } else if (p2 === '2') {
                log.textContent = 'かち！おめでっと！';
            }
            break;
        }
        case '2': {
            if (p2 === '0') {
                log.textContent = '負けた！';
            } else if (p2 === '1') {
                log.textContent = 'かち！おめでっと！';
            } else if (p2 === '2') {
                log.textContent = 'あいこだね〜';
            }
            break;
        }
    }
    cNum = 0;
    player.textContent = "player1";
    player1Hand.textContent = "player1";
    player2Hand.textContent = "player2";

});

