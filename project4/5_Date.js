// Date: 날짜와 시간을 다루는 객체

//  현재 날짜와 시간을 기준으로 Date 객체 생성

let now = new Date();
console.log(now); // 현재 시간
console.log(now.toLocaleString()); // 로컬시간대로 변경

let date1 = new Date(2024, 0, 1, 10, 10, 10, 0); 
// 월은 0부터 시작. 1은 2월
console.log(date1);

// 문자열을 사용하여 Date 객체 생성
let date2 = new Date("October 13, 2024 11:11:11");
console.log(date2.toLocaleString());

let date3 = new Date("2024-10-13T11:11:11");
console.log(date3.toLocaleString());

//  일과 시간 변경
date3.setDate(15);
date3.setHours(15);
console.log(date3.toLocaleString());

// 정적 메소드로 현재 시간(밀리초 단위) 출력
console.log(Date.now());

let date4 = new Date();

let year = date4.getFullYear(); // 연도
console.log("year",year);

let month = date4.getMonth();
console.log("month",month) // 월 (0부터 시작)

let date = date4.getDate();
console.log("date",date) // 일

let day = date4.getDay(); // 요일 (0: 일요일,6:토요일)
console.log("day",day);

let hour =date4.getHours(); // 시
console.log("hour",hour);

let minute = date4.getMinutes(); // 분
console.log("minute", minute);

let second = date4.getSeconds(); // 초
console.log("second",second);


// 13. 현재 날짜와 시간 
let today = new Date();
let dateFormat = today.getFullYear()+"-"+(today.getMonth()+1) + "-" + now.getDate();
let timeFormat = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();

console.log("현재 날짜와 시간: " + dateFormat+" " + timeFormat);


// 14 2024년 1월 1일부터 10일 후의 날짜
const startDate = new Date("2024-01-01");
const add = 10;

// 날짜 계산
startDate.setDate(startDate.getDate() + add);
console.log("10일 후 날짜: " + startDate.toLocaleString());

// // 15 : 현재시간에서 1시간 30분 뒤 시간
let today1 = new Date();
let dateFormat1 = today1.getFullYear()+". "+today1.getMonth()+". "+today1.getDate()+". ";
today1.setHours(today1.getHours()+1);
today1.setMinutes(today1.getMinutes()+30);

console.log("1시간 30분 후의 시간: "+today1)


const visits = [
  { name: "김철수", date: "2024-08-20", purpose: "회의"},
  { name: "이영희", date: "2024-08-18", purpose: "상담"},
  { name: "박지훈", date: "2024-08-21", purpose: "회의"},
  { name: "최유리", date: "2024-08-19", purpose: "교육"},
  { name: "정민호", date: "2024-08-17", purpose: "상담"},

];

let dateOrder = visits
  .sort((a, b) => new Date(a.date) - new Date(b.date))
  .filter(v=>v.purpose=='회의')

console.log(dateOrder);  

let devideDate = dateOrder
  .map(v=>{
    // 년,월,일 로 나누기
    const date = new Date(v.date)
    return{
      name : v.name,
      year : date.getFullYear(),
      month : date.getMonth()+1, // month => '0'부터 시작됨
      day : date.getDate(),
      purpose : v.purpose
    }
  }
  )

  console.log(devideDate);


