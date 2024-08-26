// let person = {
//   fullname: "짐코딩",
//   age: 20,
//   printThis: function () {
//     console.log(this);
//     console.log(this === person);
//     console.log(this.fullname);
//     console.log(this.age);
//   },
// };

// person.printThis();
// let printThis = person.printThis;
// printThis();

// function printThis() {
//   console.log(this); // default this ==> window
// }
// printThis();

// let person1 = {
//   name: "홍길동1",
//   printThis: printThis,
// };
// person1.printThis();
// let person2 = {
//   name: "홍길동2",
//   printThis: printThis,
// };
// person2.printThis();
// let person3 = {
//   name: "홍길동3",
//   printThis: printThis,
// };
// person3.printThis();

// window
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log(this);
  console.log(this === btn);
});
