let userList = [
  {
    firstName:"재석",
    lastName:"유",
    email:"yu@gmail.com",
  },
  {
    firstName:"종국",
    lastName:"김",
    email:"kim@gmail.com",
  },
  {
    firstName:"세찬",
    lastName:"양",
    email:"yang@gmail.com",
  },
  {
    firstName:"석진",
    lastName:"지",
    email:"ji@gmail.com",
  },
]

// map() 함수 : 배열의 각 요소를 반환하여 새 배열 생성

//  각 요소(user)를 새로운 객체로 반환

let newList = userList.map(
  (user)=>{
    // 새로운 객체 (fullName 속성 추가)
    return {
      fullName: user.lastName + user.firstName,
      email:user.email,
    };
  }
);
console.log(newList);

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(numbers);