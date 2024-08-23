// reduce: 배열의 요소를 순회하며 누적값을 계산
let points =[40,100,1,5,25,10];

// 첫번째 인자 : 계산식을 정의한 함수
// 두번째 인자 : 초기값 (여기서는 0)

let sum = points.reduce(
  (total, currentValue)=>{
    return total+currentValue;
  },100
);

// 배열 요소의 합계를 계산하여 반환
console.log(sum);


// 1번
let arr1 = [10,15,20,25,30];
let result1 = arr1
  .filter(v=> v>20)
  .map(v => v*2)
console.log(result1);



// 2번
let str = "hello world, welcome to programming"
let mapArr = str.split(" ")
.map(
  v=> v.charAt(0).toUpperCase() + v.slice(1));
  console.log(mapArr.join(" "));



// 3번
arra2 = ["apple","banana","grape","kiwi","watermelon"];
let result2 = arra2
  .filter (v => v.length > 5)
  .map (v => v.toUpperCase());
console.log(result2);




// slice

let str2 = "coffeechococookie";
console.log(str2.slice(6));

// ex1 - map
let ages = [18,21,16,30,25];

let adults = ages
  .filter(age=>age>=18);

console.log(adults);

// ex2 - map

let words = ["apple","banana","cherry","data"];

let lengths = words
  .map(v=>v.length);

console.log(lengths);  



let number = [2,3,4,5];

let square = number
  .map(v=>v*v);

console.log(square);

let people = [
  {name: "Alice", age: 25},
  {name: "Bob", age: 30},
  {name: "Charlie", age: 35}
];

let names = people
  .map(v => v.name);

console.log(names);  



// 10
const products = [
  {name:"스마트폰", price : 799000, category:"전자제품"},
  {name:"노트북", price : 1200000, category:"전자제품"},
  {name:"헤드폰", price : 150000, category:"전자제품"},
  {name:"키보드", price : 100000, category:"악세서리"},
  {name:"마우스", price : 50000, category:"악세서리"},
  {name:"충전기", price : 30000, category:"악세서리"},
  {name:"블루투스 스피커", price : 90000, category:"전자제품"},
];

// let p = products
  
//   .filter(v=>v.price>=50000 && v.price <= 500000 && v.category=="전자제품")
//   .map(v=>({
//     ...v,
//     price: "₩" + v.price 
//   }));
//  console.log(p);  


console.log("*****");

  
let filteredProducts  = products.filter(v=>v.price>=50000 && v.price <= 500000 && v.category=="전자제품");
filteredProducts.forEach(v=>  v.price = "₩" + v.price);
console.log(filteredProducts);  


// 11
const student = [
  {name:"김철수",score:85,gradeLevel:"1학년"},
  {name:"이영희",score:92,gradeLevel:"2학년"},
  {name:"박지훈",score:76,gradeLevel:"3학년"},
  {name:"최유리",score:88,gradeLevel:"1학년"},
  {name:"정민호",score:54,gradeLevel:"1학년"},
  {name:"한서연",score:63,gradeLevel:"2학년"},
  {name:"장동건",score:71,gradeLevel:"3학년"},
  {name:"오지호",score:80,gradeLevel:"3학년"},
];

let s = student
  .map(v=>({
    ...v,
    grade: v.score >= 90 ? 'A' : v.score >= 70 ? 'B' : 'C'
  }))

  console.log(s);
  let bGradeStudents = s.filter(v => v.gradeLevel == "1학년" && v.grade === 'B');
  let bGradeTotalScore = bGradeStudents.reduce((total, student) => total + student.score, 0);

  console.log("1학년 중 등급이 'B'인 학생들의 점수 총합: "+bGradeTotalScore);


  // map - ex

  const students = [
    {name: "홍길동", score:95,gradeLevel:"3학년"},
    {name: "임꺽정", score:60,gradeLevel:"2학년"},
    {name: "김자바", score:85,gradeLevel:"1학년"},
    {name: "박자바", score:72,gradeLevel:"2학년"},
  ]

  let s1 = students
    .map(v=>({
      ...v,
      grade: v.score>=90?"A":v.score>=70 && v.score<=89?"B":"C"
    }));

  console.log(s1);  

    // map - ex

    const products2 = [
      {name:"노트북", price:1200000},
      {name:"스마트폰", price:800000},
      {name:"헤드폰", price:200000},
      {name:"키보드", price:50000},
    ];

    let p2 = products2
      .map(v=>({
        ...v,
        vat : v.price+v.price*0.1 
      }))

    console.log(p2);  

 // 12
 // 배열의 요소 값을 변경할 때는 map() 또는 forEach 사용
 // map()은 새로운 배열을 반환하고,
 // forEach()는 기존 배열을 수정하므로 간단한 변경은 forEach()를 사용한 것
 // 재고가 있는 제품의 이름을 변경
    const inventory = [
      {product:"감자칩", quantity:10,price:1500},
      {product:"아이스크림", quantity:0,price:3000},
      {product:"쿠키", quantity:20,price:2000},
      {product:"탄산음료", quantity:5,price:1000},
    ];

 
    let pushData = {
      product:"바나나킥", quantity:50, price:1000
    };

    inventory.push(pushData);
    // let i = inventory
    //   .map(v=>({
    //     ...v,
    //     product: v.quantity>0?"(재고있음)"+ v.product:v.product,
    //     price: v.quantity>10?v.price-v.price*0.1:v.price
    //   }))

    //   inventory.push(pushData);
    let i = inventory
      .forEach(v=>{
       
        v.quantity>0?"(재고있음)"+ v.product:v.product,
        v.quantity>10?v.price-v.price*0.1:v.price
      })

      console.log(i);

      let totalPrice = i
        .reduce((s,item)=>s+(item.price*item.quantity),0);

      console.log("전체 재고의 총 가치: "+totalPrice);  


// reduce ex
    let arr4 = [1,2,3,4,5,6,7,8,9,10];
    let sumNum = arr4
        .reduce((s,items)=>s+items,0);

    console.log("1부터 10까지의 합: "+sumNum);    

// reduce ex

const friends = [
  {
    name: '양주진',
    age: 32,
    job: '코인러',
    married: false,
  },
  {
    name: '오영제',
    age: 32,
    job: '랩퍼',
    married: false,
  },
  {
    name: '서준형',
    age: 32,
    job: '2년차 유부남',
    married: true,
  }
];

const ageSum = friends  
  .reduce((s,items)=>s+items.age,0);

console.log(ageSum);  
 
