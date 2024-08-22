// 부가세 계산하기
let salePrice = 100000; // 매출
let vat = 0.1; // 부가세 10%
let tax = salePrice * vat;
console.log(tax);

let salePrice2 = 240000; // 매출
let vat2 = 0.1; // 부가세 10%
let tax2 = salePrice * vat2;
console.log(tax);

let salePrice3 = 940000; // 매출
let vat3 = 0.1; // 부가세 10%
let tax3 = salePrice * vat3;
console.log(tax);

//  위 코드의 문제점 : 
//  함수 없이 부가세를 계산하면 동일한 계싼 코드가 반복됨

//  부가세를 계산하는 함수 만들기
//  입력값: ? 
//  출력값: ?

const calc = (salePrice)=>{
  let vat = 0.1;
  let tax = salePrice * vat;
  return tax;
}
console.log(calc(100000));
console.log(calc(240000));
console.log(calc(940000));




// 8
console.log("======8번======")
const sub = function(n1,n2){
  console.log(n1-n2);
}

sub(5,3);

// 9
console.log("======9번======")
const hap = (a,b)=>{
  s= 0;
  for (i=a;i<=b;i++){
    s+=i;
  }
  return s;
}

console.log(hap(3,5));


// 10
console.log("======10번======")
const maxNum = (arrs)=>{
  value = 0;
  for (i in arrs){
    if(arrs[i] > value){
      value = arrs[i];
    }
  }
  return value;
}

console.log(maxNum([-1,5,10,-3]));

// 11 
console.log("======11번======")
const isSameType = (arrs)=>{
  firtstType = typeof arrs[0];
 
  for(let a of arrs){
    if (typeof a != firtstType){
      return false;
    }
  }
  return true;
}

console.log(isSameType(["a","b","c"]));
console.log(isSameType(["a","b",1]));
console.log(isSameType([1,2,3]));


// 12
console.log("======12번======")
const isVal = (arrys,findArry) => {
  count =0;
  for (let a of arrys){
    if(findArry === a){
      return true;
    }
  } 
 return false;
}

const fruits = ["apple","banana","cherry"]
console.log(isVal(fruits,"cherry"));

// 13
console.log("======13번======")
const gugudan = (n)=>{
  for(i=1;i<=9;i++){
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

gugudan(2);

// 14
console.log("======14번======")
const arrs2 = (arrays)=>{
  objList = []
  for(i in arrays){
    if (typeof arrays[i] == "string"){
      objList.push(arrays[i]);
    }
    }
  return objList;  
}

console.log(arrs2([1, "apple", true, "banana", 42, "cherry"]));


// 15 
console.log("======15번======")
// 호출 순서
// fac(5)
// 5*fac(4)
// 4*fac(3)
// 3*fac(2)
// 2*fac(1)
// 1

// 함수 완료 순서
// factorial(1)
// factorial(2)
// factorial(3)
// factorial(4)
// factorial(5)


// 끝나는 순서
// 2*fac(1) = 2
// 3*fac(2) = 6
// 4*fac(3) =24
// 5*fac(4) = 120 == > 반환

const factorial = (n)=>{
  
    if (n === 0 || n === 1){
      return 1;
    }
    return n*factorial(n-1);
}

console.log(factorial(5));

// 16
console.log("======16번======")
const std = (arrys,sbj)=>{
  sum = 0


  // for(i in arrys){
  //   if (sbj =="math"){
  //     sum+= arrys[i].math; }
  //   else if(sbj=="english"){
  //     sum += arrys[i].english;  
  //   }

    //  arrys[i][sbj]

    for(i in arrys){
      if (arrys[i][sbj]){
        sum+= arrys[i][sbj]; }
     
  }
  



  return sum/arrys.length;
}

const student = [
  {name : "둘리", math:90,english:85},
  {name : "또치", math:80, english : 95},
  {name : "도우너", math: 70, english: 75},
];

console.log(std(student,"math"));


// 17
// console.log("======17번======")
// const salary = (employees, position)=>{
//   sum = 0;
//   count = 0;

//   // a vs a  => if문 하나로 만들기
//   for(e in employees){
//     if (position == "부장"){
//       if(employees[e].position == "부장"){
//         sum += employees[e].salary;
//         count++;}
//     }else if (position == "차장"){
//       if(employees[e].position == "차장"){
//       sum += employees[e].salary;
//       count++;}
//     }else if (position == "사원"){
//       if(employees[e].position == "사원"){
//       sum += employees[e].salary;
//       count++;
//     }}
//   }
//   return sum/count;
// }


// 17 Retry
const salary1 = (employees, position)=>{
  sum = 0;
  count = 0;

  // a vs a  => if문 하나로 만들기
  for(let i in employees){
    if (position === employees[i].position){
        sum += employees[i].salary;
        count++;
      }
    
  }
  return sum/count;
}




const employees = [
  {name:"짱구", position : "부장", salary : 500},
  {name:"철수", position : "차장", salary : 380},
  {name:"훈이", position : "사원", salary : 260},
  {name:"맹구", position : "차장", salary : 420},
  {name:"유리", position : "사원", salary : 220},
  
]

console.log(salary1(employees,"사원"));