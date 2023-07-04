// id btn を定数に代入

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const h2 = document.getElementById('text');
  h2.textContent = 'ボタンをクリックしました';
});



