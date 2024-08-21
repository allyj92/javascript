// while문

// 숫자 1~10 출력하기!
let i = 1; // 초기화식

while(i<=10){ // 조건식
  console.log(i);
  i++; // 증감식
}

// 동전교환기에 지폐를 넣고 교환하기!

let inputPrice = 7000; // 사용자가 넣은 지폐 금액
let coinUnit = 500;
let coinCount = 0;// 동전 개수

while (inputPrice > 0){
  inputPrice -=  coinUnit;
  coinCount++;
}

console.log("7000원을 동전 " + coinCount + "개로 변경함..");

// for문

for(let i = 1; i<=10;i++){
  console.log(i);
}

let brands = ["애플","구글","페이스북","아마존","삼성전자"];

console.log(brands[0]);
console.log(brands[1]);
console.log(brands[2]);
console.log(brands[3]);
console.log(brands[4]);

for(i=0;i<brands.length;i++){
  console.log(brands[i]);
}

console.log("of")
let arr7 = [3,4,5];
// for-of문
for(let v of arr7){
  // 배열을 순회하면서 값을 꺼냄
  console.log(v);
}

// 800원으로 구매할 수 있는 음료수 찾기
let inputCoin = 800;
let outputList = [];

let productList = [
  {name:"솔의눈",price:700},
  {name:"커피",price:700},
  {name:"파워레이드",price:1200},
  {name:"오렌지",price:1000},
  {name:"보리차", price:1200},
  {name:"밀키스",price:800},
];

for(i=0;i<productList.length;i++){
  if (productList[i].price <= inputCoin){
    outputList.push(productList[i].name);
  }
}

console.log(outputList);


// for-in문

let arr3 = [3,4,5];

//  배열을 순회하면서 index를 꺼냄
for(let i in arr3){
  console.log(i+", "+arr3[i]);
}


// 4-1
x= 11;
if(x > 10 && x < 20){
  console.log(x);
}

//  4-2
str = "banana";

if (str.length > 5){
  console.log(str);
}

// 4-3
const person = {
  age : 15,
  gender : "M",
  name : "둘리",
  address : "서울",
}

if(person.age < 20 && person.gender == "M"){
  console.log("남학생입니다.");
};

// 4-4 
const arr = [5, 12, 8, 130, 44];
for(i=0;i<arr.length;i++){
  if (i==10){
    console.log("배열에 10이 있습니다.")
  }
}
console.log("배열에 10이 없습니다.");

// 5-1
for(i=1;i<=10;i++){
  if(i%2==0){
    console.log(i);
  }
}

// 5-2
for(i=10;i>=1;i--){
  if (i%2==1){
    console.log(i);
  }
}

// 5-3
sum=0;
for(i=1;i<=10;i++){
  sum+=i;
}
console.log(sum);

// 5-4 ***
console.log("***** 5-4 *****");
sum1 = 0;
for(i=1;i<=20;i++){
  if(i%3==0  || i%5==0){
    sum1+=i;
  }
}
console.log(sum1);


// 6
console.log("***** 6 *****");
const arr1 = [1,'aa',true,5,10];
sum7 = 0;

for (i=0;i<arr1.length;i++){
if (typeof arr[i] == "number"){
  sum7+=arr1[i];
}
}

console.log(sum7);


// 7-1
console.log("-----7-1-----")
for(i=0;i<3;i++){
  console.log("*****");
  }
console.log("\n");


// 7-2 

for(i=1;i<=5;i++){
  let row = ""
  for(j=1;j<=i;j++){
    row += "*"
  }
  console.log(row);
}

// 7-3 

for(i=1;i<=5;i++){
  let row = ""
  for(j=1;j<=2*i-1;j++){
    row += "*"
  }
  console.log(row);
}
