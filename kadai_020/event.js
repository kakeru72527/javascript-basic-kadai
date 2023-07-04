// btnの値を定数に代入
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  // 二秒後にh2のテキストを変更する
  setTimeout( () => {
    const h2 = document.getElementById('text');
    h2.textContent = "ボタンをクリックしました";
  },2000);
});



