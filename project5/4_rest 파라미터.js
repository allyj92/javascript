// rest 파라미터: 나머지 파라미터로, 나머지 데이터가 배열로 저장됨
function func(one, two, ...rest) {
  console.log(rest);
}

func(1, 2, 3, 4, 5);

// 잘못된 예시
// rest parameter는 반드시 마지막 위치에 있어야함
// function func2 (one, ...rest, two) {
// }

// rest 파라미터를 이용하여 숫자들의 합 구하기
// rest 파라미터는 전달되는 인자의 개수와 상관없이 모든 인자를 배열로 수집할 수 있음

function sum(...arr) {
  let total = 0;
  // 배열을 순회하며 합계 구하기
  for (let x of arr) {
    total += x;
  }
  console.log(total); // 합계
}

sum(1, 2, 3, 4, 5);

function greet(name, greeting = "안녕하세요") {
  return `${greeting},${name}님!`;
}

console.log(greet("철수", "반갑습니다"));
console.log(greet("훈희"));

function printPerson(name, age, ...hobbies) {
    console.log(
      `${name}의 나이는 ${age}살이고, 취미는 ${hobbies.join(", ")}입니다.`
    );
  }

printPerson("맹구",5,"축구","독서","영화 감상");

printPerson("유리",5,"소꿉놀이");
