let sampleForm = document.getElementById('sampleForm');
let textarea;
let textCounter = document.getElementById('textCounter');


const resetBtn = document.getElementById('resetBtn');
const iniDel = document.getElementById('iniDel');
const endDel = document.getElementById('endDel');
const wordCount = 400;


// let wordCount = 400;
// let add = document.createElement('p');

// textCounter.textContent = `${wordCount}-${sampleForm.value.length}`;
textCounter.textContent = `あと ${wordCount - sampleForm.value.length} 文字`;
// 関数の中に入れる必要はない！

sampleForm.addEventListener('keyup', function () {
    // wordCount -= 1;
    textCounter.textContent = `あと ${wordCount - sampleForm.value.length} 文字`;
    // textCounter.innerHTML = `あと ${sampleForm.value.length} 文字`;
    textarea = sampleForm.value;
});



resetBtn.addEventListener('click', function () {
    // wordCount -= 1;
    textCounter.innerHTML = `あと ${wordCount} 文字`;
    textarea = "";
});

iniDel.addEventListener('click', function () {
    // sampleForm.slice(1);
    textarea = textarea.slice(1);
    sampleForm.value = textarea;
    textCounter.innerHTML = `あと ${wordCount - sampleForm.value.length} 文字`;

});




endDel.addEventListener('click', function () {
    sampleForm.slice(0, -1);

});

