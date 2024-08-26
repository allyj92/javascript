//Map: 키-값 쌍으로 데이터를 저장하는 객체
//자료를 저장할때 순서가 없음

let userMap = new Map();

//새로운 데이터 추가
userMap.set("name", "홍길동");
userMap.set("email", "abc@email.com");
userMap.set("phone", 100);
console.log(userMap);

// 데이터 수정
userMap.set("phone", "012-3456-7899");
console.log(userMap);

// Map의 크기 확인
console.log(userMap.size);

// // 특정 키의 데이터 가져오기
console.log(userMap.get("name"));

// // 특정 키가 존재하는지 확인
console.log(userMap.has("name"));

// // 특정 데이터 삭제
userMap.delete("name");
console.log(userMap);

// Map에 저장된 모든 데이터 출력
userMap.forEach((a, b) => {
  console.log(a, b);
});

// for of 반복문으로 map 순회하기
// 구조 분해 할당으로 map의 각 키와 출력
for (let [key, value] of userMap) {
  console.log(key, value);
}

// 저장된 모든 데이터를 삭제
userMap.clear();

// 17
let seenMovie = new Set();
let wannaBeMove = new Set();

seenMovie.add("인셉션");
seenMovie.add("매트릭스");
seenMovie.add("인터스텔라");
seenMovie.add("파이트 클럽");

wannaBeMove.add("파이트 클럽");
wannaBeMove.add("더 울프 오브 월 스트리트");
wannaBeMove.add("노인을 위한 나라는 없다");

console.log("현재 시청한 영화 목록:");
seenMovie.forEach((v) => console.log(v));

console.log();
wannaBeMove.delete("파이트 클럽");

console.log("현재 보고 싶은 영화 목록:");
wannaBeMove.forEach((v) => {
  console.log(v);
});
console.log();

//  18
let readedBook = new Set();
let friendBook = new Set();

readedBook.add("해리포터");
readedBook.add("반지의 제왕");
readedBook.add("어린왕자");
readedBook.add("데미안");
readedBook.add("1984");
readedBook.add("위대한 개츠비");

friendBook.add("어린왕자");
friendBook.add("1984");
friendBook.add("노인과 바다");
friendBook.add("그리스인 조르바");

console.log("현재 읽은 책 목록");

readedBook.forEach((v) => {
  console.log(v);
  if (v.length >= 7) {
    console.log();
    readedBook.delete(v);
    console.log(`${v}를 목록에서 삭제했습니다.`);
  }
});

console.log();

console.log("친구가 읽은 책 목록");
friendBook.forEach((v) => console.log(v));

console.log();

console.log("두 명의 사용자가 공통으로 읽은 책:");
commonBook = [];
readedBook.forEach((v) => {
  if (friendBook.has(v)) {
    commonBook.push(v);
  }
});

commonBook.forEach((v) => console.log(v));

// 19
let contacts = new Map();
console.log("연락처 목록:");
contacts.set("민수", ["010-1234-5678", "서울특별시 강남구"]);
contacts.set("지영", ["010-8765-4321", "부산광역시 해운대구"]);
contacts.set("현우", ["010-2345-6789", "대구광역시 수성구"]);
contacts.set("수빈", ["010-9876-5432", "인천광역시 남동구"]);
contacts.set("동민", ["010-3456-7890", "광주광역시 서구"]);
contacts.set("하은", ["010-6543-2109", "대전광역시 유성구"]);

// 동민의 연락처가 존재하는지 확인하고, 존재한다면 번호를 010-9999-9999로 수정
console.log("연락처 목록:");
console.log(contacts);
if (contacts.has("동민")) {
  let value = contacts.get("동민");
  value[0] = "010-9999-9999";
  contacts.set("동민", value);

  console.log("동민의 연락처를 수정했습니다.");
}

if (contacts.has("지영")) {
  contacts.delete("지영");

  console.log("지영의 연락처를 삭제했습니다.");

  console.log();

  console.log("현재 연락처 목록:");
  contacts.forEach((v, k) => console.log(k + ":" + v));

  console.log("현재 연락처 개수: " + contacts.size);
}

// 20
console.log("학생 목록:");
let students = new Map();
students.set("김민준", ["2학년", "컴퓨터공학"]);
students.set("이서윤", ["3학년", "경영학"]);
students.set("박지호", ["1학년", "물리학"]);
students.set("최지민", ["4학년", "화학"]);
students.set("정예린", ["2학년", "수학`"]);
students.set("한지우", ["3학년", "영어영문학"]);
students.forEach((k, v) => console.log(k + ":" + v));

// 3학년 학생들  출력 후 전공 "융합전공으로 변경"
for (let [name, info] of students) {
  if (info[0] == "3학년") {
    info[1] == "융합전공";
    students.set(name, info);
    console.log("3학년 학생들의 전공을 융합공학으로 변경했습니다.");
  }
}
if (students.has("정예린")) {
  //  정예린 출력
  console.log("정예린:" + students.get("정예린"));
}
students.size()