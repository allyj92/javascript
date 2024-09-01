// 기존 변수 선언
let name = document.querySelector("#name");
let contact = document.querySelector("#contact");
let textArea = document.querySelector("#script");
let submitBtn = document.querySelector("#submitBtn");
let totalQuantityArea = document.querySelector("#totalCount");
let totalPriceArea = document.querySelector("#totalPrice");
let listContainer = document.querySelector("#listContainer");

// 3번
let usernameInput = document.querySelector("#username");
let userIdInput = document.querySelector("#userId");
let emailInput = document.querySelector("#userEmail");
let passwordInput = document.querySelector("#userPassword");
let registerBtn = document.querySelector("#registerBtn");
let userTableBody = document.querySelector("#userTable tbody");

// 숫자가 아닌 값이 입력되면 테두리 색상이 빨간색으로 바뀌게
let patt = /^[0-9]*$/;

const contactInputHandler = () => {
  let value = contact.value;

  if (!patt.test(value)) {
    contact.classList.add("border-red");
  } else {
    contact.classList.remove("border-red");
  }
};

contact.addEventListener("input", contactInputHandler);

// 최대 글자 수(30글자)를 초과한 경우, 글자의 색이 빨간색으로 변경
textArea.addEventListener("input", function () {
  if (this.value.length > 30) {
    textArea.classList.add("font-red");
  } else {
    textArea.classList.remove("font-red");
  }
});

// 폼 제출 시 이름, 연락처, 지원분야 필드가 비어있는지 확인하고, 비어있으면 경고메세지를 표시합니다.
submitBtn.addEventListener("click", function (e) {
  if (name.value.length == 0) {
    alert("이름을 입력해 주세요.");
  } else if (contact.value.length == 0) {
    alert("연락처를 입력해 주세요.");
  }
  e.preventDefault();
});

// 장바구니 총 수량 및 총 가격 계산 함수
const calculateTotals = () => {
  let totalQuantity = 0;
  let totalPrice = 0;
  let fruits = document.querySelectorAll("#listContainer li");

  for (let fruit of fruits) {
    let text = fruit.innerText;

    let quantityMatch = text.match(/-(\d+)개/);
    let priceMatch = text.match(/(\d+)원/);

    if (quantityMatch) {
      let quantity = parseInt(quantityMatch[1]);
      totalQuantity += quantity;
    }

    if (priceMatch) {
      let price = parseInt(priceMatch[1]);
      totalPrice += price;
    }
  }

  totalQuantityArea.textContent = `총 수량: ${totalQuantity}개`;
  totalPriceArea.textContent = `총 가격: ${totalPrice}원`;
};

// 페이지 로드 시 초기 총 수량 및 가격 계산
calculateTotals();

// 삭제 버튼을 클릭하면 해당 li 요소를 삭제하고 총 수량 및 가격을 다시 계산
listContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    let li = e.target.closest("li");
    if (li) {
      li.remove();
      calculateTotals(); // li 요소가 삭제된 후 총량 및 가격 다시 계산
    }
  }
});

// 정규식: 소문자와 숫자의 조합, 길이 4-8자
const idPattern = /^[a-z0-9]{4,8}$/;

// 아이디 검증 및 정보 추가 함수
const validateAndRegister = () => {
  let userId = userIdInput.value;
  let username = usernameInput.value;

  // 관심분야 체크박스 가져오기
  let interests = [];
  document
    .querySelectorAll(".checkboxes input[type='checkbox']:checked")
    .forEach((checkbox) => {
      interests.push(checkbox.parentElement.textContent.trim());
    });

  // 관심분야를 문자열로 변환
  let interestsString = interests.join(", ");

  // 아이디 검증
  if (idPattern.test(userId)) {
    // 아이디가 유효한 경우
    let row = document.createElement("tr");
    let idCell = document.createElement("td");
    let nameCell = document.createElement("td");
    let interestCell = document.createElement("td");
    idCell.textContent = userId;
    nameCell.textContent = username;
    interestCell.textContent = interestsString;
    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(interestCell);
    userTableBody.appendChild(row);

    // 입력 필드 비우기
    userIdInput.value = "";
    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    document
      .querySelectorAll(".checkboxes input[type='checkbox']")
      .forEach((checkbox) => {
        checkbox.checked = false;
      });
  } else {
    alert("아이디는 소문자와 숫자 조합으로 4자에서 8자 사이여야 합니다.");
  }
};

// 회원가입 버튼 클릭 이벤트 리스너
registerBtn.addEventListener("click", (e) => {
  e.preventDefault(); // 폼 제출 방지
  validateAndRegister();
});
