//  Number 객체: 숫자를 생성하고 조작하는 함수
let num1 = 123;
let str = num1.toString(); // 123
console.log(typeof num1); // "number"
console.log(typeof str); // "string"

// 소숫점 몇번째짜리까지 보여줄지 결정
// 해당위치에서 반올림한 값을 반환
let num2 = 10.656;
console.log(num2.toFixed(0));
console.log(num2.toFixed(2));

// 정수와 소수를 포함해서 몇번째자리까지 보여줄지 결정
console.log(num2.toPrecision(4)); 
console.log(num2.toPrecision(2));
console.log(num2.toPrecision(4));
console.log(num2.toPrecision(3));

// 문자열을 숫자로 변환하는 함수
console.log(parseInt("-10"), typeof parseInt("-10"));
console.log(parseInt("12.33")); // 12
// 10 (시작하는 부분에 숫자가 있으면 변환 가능)
console.log(parseInt("10 years"));
console.log(parseInt("years 10")); // NaN

// isNaN: 문자열이 숫자로 변환가능한지 확인하는 함수
console.log(isNaN("aa"));
console.log(isNaN("10"));

// 문자열을 실수로 변환하는 함수
console.log(parseFloat("12.33"));

// 1
let email = "user@naver.com"
console.log(email.split("@")[1]);

//  2

msg = "저 친구는 나쁜 친구야. 정말 더러운 사람 같아"

const forbidden = ["나쁜","더러운"];

for(let f of forbidden){
  msg = msg.replace(f,"X".repeat(f.length));
}

console.log(msg);

// 3
file = "사과.txt";
const allowedExtensions = ['.jpg','.png','.gif'];
const extension = file.slice(".")[1];


if(!allowedExtensions.includes(extension)){
  console.log("지원되지 않은 형식입니다.");
}else{
  console.log("지원되는 형식입니다.");
}

// 4

str4 = "0112233";
let sum=0;
for(let s of str4){
  sum+=parseInt(s);
}
console.log(sum);

// 5

let arr = [1,"aa",true,"5",10];

let sum1 = 0;
for(let a of arr){
  if (!isNaN(a) && typeof a != "boolean"){
    sum1+=parseInt(a);
    
  }
}
console.log(sum1);

// 5

let v = [1,"aa",true,"5",10];

if(!isNaN(v)){

  if(typeof v == "number" || typeof v == "boolean"){
    sum+=v;
  }else if (typeof v == "string"){
    sum+=parseInt(v);
  }
}


//  6
let str5 = "aaabbc"; 
let strConcat = [];  

// Set을 사용하여 str5에서 중복을 제거한 문자들을 저장
let uniqueChars = new Set(str5); 
console.log(uniqueChars);

for (let char of uniqueChars) { 
  let count = 0; 
  for (let s of str5) { 
    if (s === char) { // 만약 문자가 현재 char와 같다면
      count++; // count를 1 증가시킴
    }
  }

  strConcat.push(char.concat(count)); // char와 그 개수를 결합한 문자열을 strConcat 배열에 추가
}

console.log(strConcat.join("")); 


// 6

const str10 = "aaabbc";
let compressed=""; // 압축된 문자
let count=1; // 현재 문자가 몇번 반족되었는지 카운트

for(let i = 0; i< str10.length;i++){
  // 현재 문자가 다음문자와 같은지 비교
  if (str10[i] === str10[i+1]){
    count++;
  }else{
    // 같지 않으면 카운트 종료, 압축된 문자 추가
    compressed += str10[i] + count;
    count = 1;
  }
}
console.log(compressed);