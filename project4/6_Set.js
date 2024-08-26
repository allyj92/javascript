//Set: 중복되지 않는 값들을 저장하는 객체

let mySet = new Set();

// 새로운 값 추가
mySet.add(1);
mySet.add(2);
mySet.add(3);

// 중복된 값 추가해보기
mySet.add(1);

// set의 크기
console.log(mySet.size);
console.log(mySet);

// 값이 있는지 확인
let result = mySet.has(1);
console.log(mySet);

// 특정 값을 삭제
mySet.delete(2);
console.log(mySet);

// set에 저장된 모든 값 출력
// forEach : set의 모든 요소를 순회하며 함수 실행
mySet.forEach((v) => {
  console.log(v);
});

// 저장된 모든 값을 삭제
mySet.clear();
console.log(mySet);
