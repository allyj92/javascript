// sort : 배열을 기본 방식으로 오름차순 정렬

let fruits = ["Banana","Orange","Apple","Mango"];
fruits.sort();
console.log(fruits);

//  reverse
fruits.reverse();
console.log(fruits);


// sort 함수의 비교함수는 양수,0,음수를 반환하며
// 값에 따라 배열 요소의 순서를 결정, 양수가 나오면 위치를 바꿈

// a - b : 앞 숫자가 더 크면 양수로 오름차순 정렬
// b - a : 뒷 숫자가 더 크면 양수로 내림차순 정렬
let points = [40,8,-1,7];
points.sort(
  function(a,b){
    return b - a; // 앞 숫자가 더 크면 양수
  }
);

console.log(points);

// 객체형 배열
var persons = [
{
  name : "유재석",
  point : 78,
  city:"서울",
},
{
  name : "김종국",
  point : 92,
  city:"서울",
},
{
  name : "양세찬",
  point : 76,
  city:"제주",
},
{
  name : "하하",
  point : 81,
  city:"서울",
},
];
// 사람의 점수를 비교해서 내림차순으로 정렬하기!


persons.sort(
  function(a,b){
    return b.point - a.point; // 앞 숫자가 더 크면 양수
  }
);

console.log(persons);