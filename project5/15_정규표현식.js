// 정규표현식: 문자열에서 특정 패턴을 찾거나, 추출하기 위한 표현식

let str = "Hello World! World!";

// 정규표현식 객체 생성 방법
const regex = /World/;

const regex2 = new RegExp("World");

// 정규표현식.test(문자열): 문자열에서 정규표현식과 매치되는 부분이 있으면 true 반환
console.log(regex.test(str));

// 문자열.seach(정규표현식): 문자열에서 정규표현식과 매치되는 부분이 있으면 위치(index)를 반환
console.log(str.search(regex));

str = "Is this all there is"
// g플래그 : 전역 검색 의미
let patt = /[hat]/g;

// match: 주어진 문자열에서 패턴과 일치하는 부분을 찾아 배열로 반환
// [hat] 패턴은 'h','a','t' 중 일치하는 문자를 찾는다
let result = str.match(patt);
console.log(result);

// i플래그: 대소문자 상관없이 검색
patt =  /[is]/gi;
result = str.match(patt); // [ 't', 'h', 'a', 't', 'h' ]
console.log(result); // [ 'I', 's', 'i', 's', 'i', 's' ]

str = "123abc4523kkk";
patt = /[0-9]/g;
result= str.match(patt);
console.log(result);

// \d: 숫자를 의미
str = "Give 100";
patt = /\d/g;
result = str.match(patt);
console.log(result);

//n+ 최소한 1개 이상
str = "Hellooo";
patt = /o+/g // o문자가 하나이상 연속으로 있는 부분을 의미
console.log(str.match(patt));

//n* 0 혹은 n개
str = "Hellooo World";
patt = /lo*/g; //'l' 다음에 'o'가 0개 이상 있는 부분을 의미
console.log("n* 0 혹은 n개: "+str.match(patt));


// n? 0개 이거나 1개
str = "1, 100 or 1000";//'1' 다음에 '0'이 0개 또는 1개 있는 부분을 의미
patt = /10?/g; // 
console.log(str.match(patt));

// 우편번호 5자리
// 32543
patt = /^\d{5}$/; //^는 문자열의 시작, (010)와 -는 문자 그대로, \d{4}는 숫자가 4개 연속으로 나오는 것, $는 문자열의 끝
let tel = "010-2312-3354";
console.log(patt.test(tel));

// 전화번호
// 010-2312-3354
patt = /^(010)-\d{4}-\d{4}$/;
let tel2 = "010-2312-3354";
console.log(patt.test(tel2));

//이메일 주소
// ^: 문자열의 시작
// ([a-z]+\d*)+: 소문자 알파벳으로 시작하며, 숫자가 0개 이상. 이부분이 한번이상 반복
// [a-z]+: 하나 이상의 소문자 알파벳으로 시작
// \d*: 숫자가 0개 이상
// (\.?\w+)+: 점(.)으로 시작, 그 뒤에 하나 이상의 문자가 올수있음
// \.?: 점(.) 문자가 0개 또는 1개 올 수 있음
// \w+: 하나 이상의 문자(알파벳, 숫자, 밑줄)
// @: 문자 그대로
// \w+: 하나 이상의 문자(알파벳, 숫자, 밑줄)
// (\.\w{2,3})+: 점(.)으로 시작, 그 뒤에 두 개 또는 세 개의 문자(알파벳)
// $: 문자열의 끝
// jeremy2021.go@gmail.com
let regex_email = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;