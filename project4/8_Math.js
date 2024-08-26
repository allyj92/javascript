//Math 객체: 산술연산, 삼각함수, 로그함수 등 다양한 수학적 기능 제공

//round: 정수로 반올림
console.log(Math.round(4.9)); // 5
console.log(Math.round(4.4));

//ceil: 정수로 올림
console.log(Math.ceil(4.9));
console.log(Math.ceil(4.4));

//floor: 정수로 내림
console.log(Math.floor(4.9));
console.log(Math.floor(4.4));

//trunc: 소수 부분 버리고 정수 부분만 반환
console.log(Math.trunc(4.9));
console.log(Math.trunc(4.4));

//sign: 부호 확인. 양수면 1, 음수면 -1, 0이면 0을 반환
console.log(Math.sign(-4));
console.log(Math.sign(0));
console.log(Math.sign(1));

//pow(x,y): x를 y 제곱값 반환
console.log(Math.pow(8, 2));

//sqrt: 제곱근(루트)
console.log(Math.sqrt(64));

//abs: 절대값
console.log(Math.abs(-4.7));

//min: 주어진 값들 중에서 가장 작은 값 반환
console.log(Math.min(0, 150, 30, 20, -8, -200));

//max: 주어진 값들 중에서 가장 큰 값 반환
console.log(Math.max(0, 150, 30, 20, -8, -200));

//random: 0과 1 사이의 랜덤한 숫자 반환

console.log(Math.floor(Math.random() * 10));

//여기에 1을 더해주면, 1에서 10 사이의 랜덤한 숫자 반환
console.log(Math.floor(Math.random() * 10) + 1);

// 21
console.log(Math.round(7.5));

// 22
console.log(Math.floor(5.9));

console.log(Math.sign(42));

console.log(Math.min(10, 20, 30, 40, 50));

console.log(Math.max(3, 6, 9, 12, 15));

console.log(Math.floor(Math.random() * 6) + 1);

let dice10 = [];
for (i = 0; i < 10; i++) {
  dice10.push(Math.floor(Math.random() * 6) + 1);
}
console.log("10번 던진 결과: " + dice10);

let p1Dice = [];
for (i = 0; i < 3; i++) {
  p1Dice.push(Math.floor(Math.random() * 6) + 1);
}

let p2Dice = [];
for (i = 0; i < 3; i++) {
  p2Dice.push(Math.floor(Math.random() * 6) + 1);
}

const p1Sum = p1Dice.reduce((a, c) => a + c);
const p2Sum = p2Dice.reduce((a, c) => a + c);
console.log("Plyer 1의 주사위 결과: " + p1Dice + "합: " + p1Sum);
console.log("Plyer 2의 주사위 결과: " + p2Dice + "합: " + p2Sum);

if (p1Sum > p2Sum) {
  console.log("Player 1 승리!");
} else {
  console.log("Player 2 승리!");
}
