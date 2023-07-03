let num;
// ランダムな整数 999までに設定
num = Math.floor( Math.random() * 1000 );
// 確認用の値設定
// num = 30;

if(num % 15 == 0){
    console.log("3と5の倍数です");
}
else if(num % 3 == 0){
  console.log("3の倍数です");
}
else if (num % 5 == 0){
  console.log("5の倍数です");
}
else{
  console.log(num);
}







