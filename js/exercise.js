console.log(1 + 2);
let num = 5;
console.log(num);

function sumFilteredEvens(numbers) {
  let sum = 0;
  for(let i = 0; i < 8; i++){
    if(numbers[i] % 2 == 0 && numbers[i] % 5 !== 0){
      sum += numbers[i]
    }
  }
  return sum
}

const numbers = [2, 4, 5, 10, 12, 15, 20, 22];
console.log(sumFilteredEvens(numbers)); // 関数の実行

function isPrime(number) {
  // 演習問題 2
  // ここにコードを書いてください
}

number = 5;
console.log(isPrime(number));

