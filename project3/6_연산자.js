let x = 1; 

console.log(1==2); // 값이 같으면 참
console.log(1!=2); // 값이 다르면 참
console.log(1 >2);
console.log(1>=2);
console.log(1<2);
console.log(1<=2)



console.log(1=="1"); // 값만 비교
console.log(1==="1"); // 값 + 자료형

console.log(10+2);
console.log(10-2);
console.log(10*2);
console.log(10/2);
console.log(10%2);

console.log("좋은 " + "하루 되세요!");

// 부호 연산자
console.log(-x); // 부호를 반대로 변경하여 음수를 출력
console.log(x); // 원본데이터에는 영향이 없음

x=1;
// 증감 연산자
console.log(++x); // 
console.log(x++); // 
console.log(--x); //
console.log(x--); //

// 논리연산자
console.log(true&&true); // true
console.log(true&&false); // false
console.log(true||true); // true
console.log(true||false); // true
console.log(!true); // false

// 삼항 연산자
let point = 92;
let grade = point >=90? "pass" : "fail";
console.log(grade);

// type 연산자 : 같은 값의 타입을 확인하는 연산자
console.log(typeof "42"); // 'String'
console.log(typeof 42); // 'number'
console.log(typeof 1.123); // 'number'
console.log(typeof true); // 'boolean'
console.log(typeof function(){});//function
console.log(typeof undefined); // undefined
console.log(typeof null); // 'object'
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'

const year = 2025;

// if(year == 2024){
//   console.log("정답입니다!");
// }else{
//   console.log("오답입니다..");
// }


if(year == 2024){
  console.log("year는 2024과 같습니다.");
}else if (year < 2024){
  console.log("year는 2024보다 작습니다.")
}else{
  console.log("year는 2024보다 큽니다.")
}

// if문으로 버스 프로그램 만들기
let age = 15; // 승객의 나이

if (age<=7){
  busFare = 0;
}else if(age>=8 && age <= 13){
  busFare =450;
}else if(age>=14 && age<= 19){
  busFare = 720;
}else if(age >= 20 && age < 70){
  busFare = 1200;
}else{
  busFare = 0;
}

console.log(busFare);


const rank = 1;

switch(rank){
  case 1 :
    console.log("금메달입니다.");
    break;
  case 2 :
    console.log("은메달입니다.");
    break;
  case 3 : 
    console.log("동메달입니다.");
    break;
  default:
    console.log("메달이 없습니다.");
    break;    
}



