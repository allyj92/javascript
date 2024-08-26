function foo() {
  console.log(this); // window 가리킴
}
foo();
const obj = {
  list: [1, 2, 3],
  foo,
};
console.log(obj); //obj 가리킴
const obj2 = {
    list : [4,5,6]


}
foo.call(obj2) // this 지정
