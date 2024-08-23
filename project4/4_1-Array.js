

// toString: 배열을 문자열로변환
let fruits = ["바나나", "오렌지", "사과","망고"];
console.log(fruits.toString());
console.log(fruits.length);
console.log(fruits.at(2));

// join: 배열 요소를 지정한 구분자로 연결
console.log(fruits.join("  * ")); // 바나나*오렌지*사과*망고

// pop : 마지막 요소를 제거하고 반환
var x = fruits.pop(); // x = "망고"
console.log(x);

// push: 끝에 새로운 요소를 추가
fruits.push("키위"); // "키위"를 fruit 배열에 추가
console.log(fruits);

fruits[0] = "체리";
console.log(fruits);

let position = fruits.lastIndexOf("키위") + 1;
console.log(position);

console.log(fruits.includes("사과"));



// splice : 특정 위치에 새로운 요소를 추가 또는 삭제
// 새로운 요소를 추가할 인덱스 번호,
// 추가하기 전에 삭제할 요소 수, 나머지: 추가할 요소

// 2번째 인덱스에 "딸기" "메론" 추가
// console.log(fruits);

// fruits.splice(2,2,"딸기","메론");

// console.log(fruits);

// slice
console.log(fruits);
console.log(fruits.slice(3));
console.log(fruits.slice(1,3));
console.log(fruits.slice(2,3));
console.log(fruits.slice(1));


// concat
let arr1 = ["토마토","오이"];
let arr2 = ["당근","감자","양파"];
let arr3 = ["호박","배추"];
let vegetable = arr1.concat(arr2,arr3);
console.log(vegetable);

// forEach: 배열의 각 요소에 대해 반복적인 작업 실행
// 인자: 함수
vegetable.forEach(
  (item,index)=>{
    console.log("야채" + index + ": " + item);
  }
);
