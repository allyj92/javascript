// ex 

let textBox = document.querySelector("#input-text");

textBox.classList.add("border-red");



// 1
// 연락처 필드 가져오기
let contact = document.querySelector(".contact")

// 숫자가 아닌 값이 입력되면 테두리 색상이 빨간색으로 바뀌게
let patt = /^[0-9]*$/;

contact.addEventListener("input",contactInputHandler);



const contactInputHandler = ()=>{
  let value = contact.value;

  if(patt.test(value)){
    inputElement.classList.remove("border-red");
  }else{
    inputElement.classList.add("border-red");
  }
}