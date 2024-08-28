// rest 파라미터: 나머지 파라미터로, 나머지 데이터가 배열로 저장됨
// one에 1, two에 2, 나머지는 rest 배열에 저장됨
function func(one,two,...rest){
  console.log(rest);
}

func(1,2,3,4,5);

// 잘못된 예시
// rest parameter는 반드시 마지막 위치에 있어야함
// function func2 (one, ...rest, two) {
// }

// rest 파라미터를 이용하여 숫자들의 합 구하기
// rest 파라미터는 전달되는 인자의 개수와 상관없이 모든 인자를 배열로 수집할 수 있음

function sum(...arr){
  let total = 0;
  //배열을 순회하며 합계 구하기
  for(let x of arr){
    total+=x;
  }
  console.log(total); // 합계
}
  sum(1,2,3,4,5);
  sum(1,2,3);

  // 1
  function greet(name,greeter="안녕하세요"){
    return `${greeter}, ${name}님!`
  
  }
  console.log(greet("철수","반갑습니다"));
  console.log(greet("훈이"));

  // 2

 let calculateGrade = (name,eng,math=0,kor=0)=>{
    let avg = ((eng+math+kor)/3).toFixed(2);
    console.log(name+"님의 평균 성적은 " + avg+"점입니다.")
 }

 calculateGrade("철수",85, 90, 78);
 calculateGrade("훈희", 80);

    
//  3 
let cretateSentence = (greetKeyWord,thisKeyWord,isKeyWord,javaScriptKeyWord)=>{
  // "this is JavaScript" 출력
  console.log(`${thisKeyWord} ${isKeyWord} ${javaScriptKeyWord}`);
}

cretateSentence("greet","this","is","javaScript");
    
// 4

let printPerson = (name,age,...hobby)=>{
  console.log(`${name}의 나이는 ${age}살이고, 취미는 ${hobby} 입니다.`)
}  

printPerson("맹구",5,"축구","독서","영화 감상");

printPerson("유리",5, "소꿉놀이");

// 5
function calculateAverageScore(subject, ...students) {
  // 해당 과목의 점수가 있는 학생만 필터링
  // 과목명은 객체의 키로 동적으로 접근
  let filterStudents = students.filter(function (student) {
    return typeof student[subject] != "undefined";
  });

  // 점수의 총합 계산
  let sum = filterStudents.reduce(function (total, student) {
    return total + student[subject];
  }, 0);

  let count = filterStudents.length;

  // 평균점수 계산
  return (sum / count).toFixed(1);
}

function showStudents(...students) {
  console.log("학생 목록:");
  students.forEach((student) => console.log(student));
  console.log();
}

const student1 = { name: "짱구", eng: 80, math: 50, kor: 70 };
const student2 = { name: "철수", eng: 90, math: 85, kor: 88 };
const student3 = { name: "훈이", eng: 75, math: 95, kor: 92 };
const student4 = { name: "맹구", eng: 65 };
const student5 = { name: "유리", math: 80, kor: 90 };

showStudents(student1, student2, student3, student4, student5);

const engAvg = calculateAverageScore("eng", student1, student2, student3, student4);
const mathAvg = calculateAverageScore("math", student4, student5);
const korAvg = calculateAverageScore("kor", student1, student2, student3, student4, student5);

console.log(`짱구, 철수, 훈이, 맹구의 영어과목의 평균점수는 ${engAvg}점 입니다`); //77.5
console.log(`맹구와 유리의 수학과목의 평균점수는 ${mathAvg}점 입니다`); //80.0
console.log(`국어과목의 전체 평균점수는 ${korAvg}점 입니다`); //85.0
