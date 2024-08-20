// const a = 12;
// // a = 999;  // 에러남

// let b = 12;
// b = 999; // 변수는 값 변경 가능!
// console.log(b);

// 상수
const b = 12; 
b = 999; 

console.log(b);

// var는 변수를 선언하기 전에 사용할 수 있는 호이스팅 현상이 발생함
console.log(cat);
var cat = "cute";
{
  // var는 스코프로 전역변수와 지역변수를 구분할 수 없음
  var cat = "so cute"
}


