// Arrrays(배열)

// 배열 만드는 방법: []대괄호 쓰고 안에 값을 나열할 것
const arr1 = ["Apple","Banana","Cherry"];

console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

// 배열에 새로운 요소 추가 
arr1.push("포도");
console.log(arr1);

// 배열에 특정한 값이 있는지 확인
console.log(arr1.includes("Apple"));

// 자바스크립트에서는 배열에 여러가지 자료형을 저장할 수 있음
const arr2 = ["a", "b", 1 , 2, true];
console.log(arr2);

// 객체타입 배열
const objArr  = [];
objArr.push({name:"Americano"});
objArr.push({name:"Latte"});

console.log(objArr);
console.log(objArr[0]);
console.log(objArr.length);

// const인데 왜 값을 변경할 수 있을까?
// 참조변수에는 주소값이 저장되어 있음
// 실제 요소는 힙영역에 저장되어 있음
// 따라서 주소를 변경하지 않고, 배열의 값만 변경 가능

const customer = {"회원":["아이디","패스워드","등급","이름","전화번호"]};
const product = {"제품":["제품명","가격","상세설명","카테고리"]};
const order = {"주문":["제품명","수량","총주문금액","주문자","주문일자","배송지"]};

console.log(customer);
console.log(product);
console.log(order);

const person = {
  age:30,
  name:"둘리",
  address:"서울"
}

person.age= 10;
person.name = "또치";
person.address = "인천";

console.log(person);

const product2 = {
  name:"노트북",
  price : 1500000,
  brand : "삼성",
}

product2.price = 2000000;
product2.brand = "LG";

console.log(product2);

const foodList = ['pizza', 'Hamburger','Chicken','Steak'];

console.log(`${foodList[0]} ${foodList[foodList.length-1]}`);


  