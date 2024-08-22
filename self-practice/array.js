const numbers = [4,9,16,25,29]
let first = numbers.findIndex(
  (v)=>{
    return v > 18;
  }
)

console.log(first);

const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLastIndex(x=>x>40);
console.log(high);

const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

const sortValue = cars.sort(
  (a,b)=>{
    return a.year - b.year}
)
console.log(sortValue);

const numbers1 = [45,4,9,16,25];
let txt = "";
let callValue = numbers1.forEach(
  (v)=>{
    txt += v +"<br>";
  }
)
console.log(txt)

const number2 = numbers1.map(
  (v)=>{
    return v*2;
  }
)

console.log(number2);

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(
  (v)=>{return v*2}
)

console.log(newArr);

const number3 = [45,4,9,16,25];
const over18 = number3.filter(
  (v)=>{return v>18}
)

console.log(over18);

const numbers4 = [45,4,9,16,25];
let sum = numbers4.reduce(
  (total, value, index,arry)=>{
    return total+value;
  }
)

console.log(sum);

