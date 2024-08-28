// 배열을 분해해서 변수에 저장하기
let arr1 = [1,2,3];

// 객체를 분해할 때는 {} 배열을 분해할때는 []
// 배열을 분해하여 배열의 요소를 순서대로 변수에 저장
let [a,b,c] = arr1;
console.log(a);
console.log(b);
console.log(c);

// 
let arr2 = [10,20,30,40];
let[x,y,...args] = arr2 // 10,20은 각각의 변수에 저장되고, 나머지는 args 배열에 저장됨

console.log(x);
console.log(y);
console.log(args);

let arr3 = [100,200,300,400];
let[n1,,n3,n4] = arr3;
console.log(n1);
console.log(n3);
console.log(n4);

// 21

let book = {"title":"위대한 개츠비","author":"스콧 피츠제럴드","publisherYear":1925}
console.log("원본객체: " + JSON.stringify(book));

let copyBook = {...book}
console.log("복사된객체: " + JSON.stringify(copyBook));

let {publisherYear} = book
console.log("원본객체의 출판년도: " + publisherYear);

 let {publisherYear2}= copyBook;
 publisherYear2 = 2023;
 console.log("복사된 객체의 출판년도: "+publisherYear2)

//  22

let book2 = {"title":"자바 프로그래밍 입문","author":{"firstName":"은종","lastName":"박"}}
console.log("원본객체: " + JSON.stringify(book2));
let copyBook2 = JSON.parse(JSON.stringify(book2))
console.log("복사된객체: " + JSON.stringify(copyBook2));

copyBook2.author.lastName = "김";

console.log("원본객체의 성: " + book2.author.lastName);
console.log("복사된객체의 성: " + copyBook2.author.lastName);

// 23
let product = {"brand":"Apple", "price":990000,"model":"iphone 13"}
let brand = product.brand;
let price = product.price;

console.log("브랜드: " + brand);
console.log("가격: " + price);

// 24
let movie = {"title": "인셉션","director":"크리스토퍼 놀란","year":2010}
let title = movie.title;
let year = movie.year;
console.log("제목: " + title);
console.log("출시연도: " + year);

// 25 
let car = {"brand":"Tesla","model":"Model 5","color":"Red"}
let brand1 = car.brand;
let model = car.model;

console.log("자동차 브랜드: " + brand1 +", "+"모델명: " + model);

// 26 
let color = ["red","green","blue"]
let [col1,col2,col3] = color;
console.log(col1 +" "+ col2 +" "+ col3);

// 27
let fruits = ["사과","바나나","오렌지","키위"];
let[fr1,,,fr4] = fruits
console.log(fr1);
console.log(fr4);

// 28
let [f1,,f3,] = fruits;
console.log(`${f1}와 ${f3}`)




