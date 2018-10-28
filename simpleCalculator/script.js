/*
이 계산기는 간단한 정수 연산만 가능하도록 만들겠습니다.
(1) 덧셈, 곱셈은 예상하는 대로 작동합니다.
(2) 뺄셈은 결과가 음수일 경우 결과가 무조건 0이 됩니다.
(3) 나눗셈은 0으로 나누려고 하면 결과가 무조건 0이 됩니다.
(4) 그리고 나눗셈 결과가 정수가 아닐 경우 강제로 반올림합니다.

이것은 연산 로직을 연습하기 위한 문제가 아닙니다.
(1) jQuery를 사용한 기본적인 DOM 처리
(2) 자바스크립트 함수 사용법
이러한 것들을 연습하기 위한 것입니다.

아래 코드에서 TODO 표기된 설명에 맞게 코드를 작성하세요.
 */

var lastNum = 0; // 마지막 숫자 (저장된 계산 결과)
var currentOpr = '='; // 현재 대기 중인 연산자
var currentNum = 0; // 현재 입력된 숫자

// 숫자를 표시하는 함수: 그대로 사용합니다.
function printNumber (num, resultArea) {
  memoNumber(num);
  printResult(currentNum, resultArea);
}

// 연산자를 표시하는 함수: 그대로 사용합니다.
function printOperator (opr, resultArea) {
  memoOperator(opr);
  printResult(lastNum, resultArea);
}

// 현재 상태 표시에 공통으로 사용되는 함수: 코드를 작성합니다.
function printResult (result, resultArea) {
  // TODO: '.result-area' 영역에 알맞는 출력을 해야 합니다.
  resultArea.html(result);
}

// 계산하려는 숫자를 저장하는 함수: 코드를 작성합니다.
function memoNumber (num) {
  // TODO: 입력된 숫자를 업데이트 해야 합니다.
  if ( currentNum == 0 ){
    currentNum = num;
  }else {
    currentNum += num;
  }
}

// 계산하려는 연산자를 저장하는 함수: 코드를 작성합니다.
function memoOperator (opr) {
  // TODO: 입력된 연산자에 맞게 계산해야 합니다.
  // TODO: 다음 연속 계산을 위해 연산자를 저장해야 합니다.

  if( opr === 'reset' ){
    lastNum = 0;
    currentNum = 0;
    currentOpr = '=';
  }else if( opr != '=' ){
    currentOpr = opr;
    if( opr == '-' ){
      if( lastNum === 0 ){
        // 처음 입력한 숫자가 아니라 두번째 연속 연산 시 필요
        lastNum = currentNum;
        currentNum = 0;
      }
      operation();
    }else if( opr == '*' ){
      if( currentNum === 0 ){
        // 처음 입력한 숫자가 아니라 두번째 연속 연산 시 필요
        currentNum = lastNum;
      }
      lastNum = 1;
      operation();
    }else if( opr == '/' ){
      if ( lastNum == 0 ){
        // 처음 입력한 숫자가 아니라 두번째 연속 연산 시 필요
        lastNum = currentNum;
      }
      currentNum = 1 ;
      operation();
    }else{
      operation();
    }
  }else{
    operation();
  }
}

// 연산자에 따른 계산 함수: 그대로 사용합니다.
function operation () {
  var r = 0;

  switch (currentOpr) {
    case '+':
      r = addition(lastNum, currentNum);
      break;
    case '-':
      r = subtraction(lastNum, currentNum);
      break;
    case '*':
      r = multiplication(lastNum, currentNum);
      break;
    case '/':
      r = division(lastNum, currentNum);
      break;
    default:
      r = lastNum;
      break;
  }

  // 개발 도중 보기 쉽게 디버깅 할 수 있습니다.
  console.log('DEBUG', 'operation', lastNum, currentOpr, currentNum, '=', r);

  // 다음 연속 계산을 위해 마지막 숫자를 여기에서 저장합니다.
  lastNum = r;
  // 계산이 한번 끝났으므로 현재 입력된 숫자를 비워줍니다.
  currentNum = 0;

}

// 덧셈: 그대로 사용합니다.
function addition (a, b) {
  return Number(a) + Number(b);
}

// 뺄셈: 그대로 사용합니다.
function subtraction (a, b) {
  var r = Number(a) - Number(b);
  if (r < 0) {
    r = 0;
  }
  return r;
}

// 곱셈: 그대로 사용합니다.
function multiplication (a, b) {
  return Number(a) * Number(b);
}

// 나눗셈: 그대로 사용합니다.
function division (a, b) {
  var r = 0;
  if (Number(b) > 0) {
    r = Math.round(Number(a) / Number(b));
  }
  return r;
}

// DOM 처리 함수
$(document).ready(function(){

  // 출력을 위한 '.result-area' 영역입니다. (회색 부분)
  var resultArea = $('.result-area');
  // TODO: 적절한 DOM 이벤트에 대해 printNumber(num, resultArea) 호출 예약
  $('.num').on('click', function(){
    printNumber($(this).html(), resultArea);
  });
  // TODO: 적절한 DOM 이벤트에 대해 printOperator(opr, resultArea) 호출 예약
  $('.opr').on('click', function(){
    printOperator($(this).html(), resultArea);
  });
});
