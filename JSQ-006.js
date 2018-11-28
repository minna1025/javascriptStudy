var numbers = [ 10, 9, 8, 7, 6, 5, 4 ];

function checkEvenNumber(num){
  return ( num%2 === 0 )? true:false;
  // 조건을 따지는 수식의 결과값이 참/거짓이라면 굳이 3항 연산자를 사용하지 않아도 됨
  // return (num % 2 === 0);
}

var evenNumbers = numbers.filter(checkEvenNumber);
console.log(evenNumbers);
