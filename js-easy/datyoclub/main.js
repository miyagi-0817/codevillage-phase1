// let num = document.getElementById("num");

// let num = 0;
// function cntUp() {
//     num++;
//     document.getElementById("num").innerHTML = num;
// }

let cntPerson = 0;

const cntUp = function () {
    // 今関数を作っています
    cntPerson += 1;
    // const cntDoc = "どうぞどうぞ";
    // alert(`${cntDoc.repeat()}`);
    // reply = 0;
}
const reply = function () {
    // 今関数を作っています
    const cntDoc = "どうぞどうぞ";
    alert(`${cntDoc.repeat(cntPerson)}`);
    reply = 0;
}
const cntDown = function () {
    if (cntPerson < 0) {
        alert("もう誰もいない");
        reply = 0;
    } else {
        cntPerson -= 1;

    }
}