// 現在のパスワードを表示
// 現在のパスワードを入力
// 新しいパスワードに書き換えると新しいパスワードが表示される

const nowPassword = document.getElementById('nowPassword');
let PasswordValue = 'aaaaa';
let passwordLength = newPassword.length;

nowPassword.textContent = `今パス${PasswordValue}`;

const setPassword = document.getElementById('setPassword');
setPassword.addEventListener('click', function () {
    const confirmPassword = document.getElementById('confirmPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    // nowPassword.textContent = `${PasswordValue}`;

    if (PasswordValue === confirmPassword) {
        if (PasswordValue !== newPassword) {
            let result = newPassword.match(/^\d{3}-?\d{4}$/g);
            if (!result) {
                alert("型が合うように入力して下さい。");
                // if (/\W+/g.test(PasswordValue)) {
                // ▼半角英数字以外の文字が存在したらエラー
                // }
                // if (8 <= passwordLength) {

            } else {
                PasswordValue = newPassword;
                nowPassword.textContent = `現在のパスワードは${PasswordValue}`
                alert('新しいパスワードは' + PasswordValue + 'です！');
                // alert('8字以上にしてください！');
            }

        }
        else {
            alert('同じ奴は無理！');
        }

    } else {
        alert("古いやつ間違っとるで〜");
    }
    // if (PasswordValue <= 5) {
    //     alert('文字数は５以上でおなしゃす！');
    // }
});
