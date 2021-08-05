// 流れ確認
// フォームにTodoを入力
// 入力された値を取得
// タスクリストに入力された値と削除ボタンを表示
// 削除ボタンを押すと消えるようにする

// const addbtn = document.getElementsByClassName('add-btn')[0];
// const lists = document.getElementsByClassName('lists')[0];
// const addarea = document.getElementsByClassName('add-area')[0];

const addbtn = document.getElementsByClassName('add-btn')[0];
// const addbtn = document.querySelectorAll('add-btn')[0];
// querySelectorAllでもできる！
const lists = document.getElementsByClassName('lists')[0];
const addarea = document.getElementById('add-area');
//ここミスったよ！

const removeTask = removeButton => {
    const targetTask = removeButton.closest('li');
    lists.removeChild(targetTask);
};
const addTask = task => {
    const listItem = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.innerText = '削除';
    removeButton.addEventListener('click', () => removeTask(removeButton));
    listItem.innerText = task;
    listItem.append(removeButton);
    lists.appendChild(listItem);
};
addbtn.addEventListener('click', function () {
    const task = addarea.value.trim();
    if (task === "") {
        return;
    }
    // const task = addarea;
    addTask(task);
    addarea.value = '';
    // addarea = '';
});
// addbtn.addEventListener('keydown', function () {
//     const task = addarea.value.trim();
//     //Enter以外が押されたら何も反応しない
//     if (e.key !== 'Enter') {
//         return;
//     }
//     // const task = addarea;
//     addTask(task);
//     addarea.value = '';
//     // addarea = '';
// });

