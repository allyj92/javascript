// DOM 요소 선택
const input = document.querySelector("#input"); // 입력 필드
const addBtn = document.querySelector("#addBtn"); // 추가 버튼
const checkboxContainer = document.querySelector(".checkbox_container"); // 체크박스 컨테이너
const deleteAllBtn = document.querySelector("#deleteAllBtn"); // 전체 삭제 버튼
const totalListQuantity = document.querySelector("#totalList"); // 총 항목 수
const completedTotalList = document.querySelector("#completedTotalList"); // 완료된 항목 수
const totalList = document.querySelector('#totalList');

// 리스트 추가 함수
const addList = (value, completed = false) => {
    // 새로운 체크박스 생성
    let newCheckBox = document.createElement("input");
    newCheckBox.classList.add('checkbox')
    newCheckBox.type = "checkbox";
    newCheckBox.checked = completed; // 완료 상태 설정
    newCheckBox.style.marginRight="15px";
    newCheckBox.style.marginTop="7px";

    // 새로운 텍스트 입력 박스 생성
    let newInputBox = document.createElement("input");
    newInputBox.classList.add("input","is-small");
    newInputBox.id="fix_width"
    newInputBox.type = "text";
    newInputBox.value = value;

    // 새로운 span 요소 생성
    let newSpan = document.createElement("span");
    newSpan.classList.add('newSpan');

    // 수정 버튼 생성
    let newModifyBtn = document.createElement("button");
    newModifyBtn.classList.add("button","is-small", "is-success", "is-light");
    newModifyBtn.textContent = "수정";
    newModifyBtn.style.margin="5px";
    newModifyBtn.style.margin="0px 5px 5px";

    // 삭제 버튼 생성
    let newDeleteBtn = document.createElement("button");
    newDeleteBtn.classList.add("button","is-small", "is-success", "is-light");
    newDeleteBtn.textContent = "삭제";
    newDeleteBtn.style.margin="0px 5px 5px";

    // 삭제 버튼 클릭 시 항목 삭제
    newDeleteBtn.addEventListener("click", deleteButton);

    // 수정 기능 구현
    // 수정 버튼 클릭 시 입력 박스 포커스
    newModifyBtn.addEventListener("click", (e) => {
        newModifyBtn.type="button";
      

    // "수정" 상태인지 "저장" 상태인지 확인
    if (newModifyBtn.textContent === "수정") {
      const targetInputBox = e.target.parentNode.querySelector('input[type="text"]');
      // "저장" 버튼으로 변경
      newModifyBtn.textContent = "저장";
      targetInputBox.focus(); // 입력 박스에 포커스
      
  } else {
      // 다시 "수정" 버튼으로 변경하고 수정된 내용을 저장
      newModifyBtn.textContent = "수정";
      saveItemsFn(); // 수정된 내용 저장
  }

  e.preventDefault(); // 기본 동작 방지
    });

    // 체크박스 상태 변경 시 텍스트에 취소선 추가/제거 및 저장
    newCheckBox.addEventListener("change", (e) => {
        if (e.target.checked) {
            newInputBox.style.textDecoration = "line-through";
            newModifyBtn.style.textDecoration = "line-through";
            newDeleteBtn.style.textDecoration = "line-through";
        } else {
            newInputBox.style.textDecoration = "none";
            newModifyBtn.style.textDecoration = "none";
            newDeleteBtn.style.textDecoration = "none";
        }
        updateCheckedCount(); // 체크된 항목 수 업데이트
        saveItemsFn(); // 항목 저장
    });

    // span 요소에 체크박스, 입력 박스, 버튼 추가
    newSpan.appendChild(newCheckBox);
    newSpan.appendChild(newInputBox);
    newSpan.appendChild(newModifyBtn);
    newSpan.appendChild(newDeleteBtn);

    // 체크박스 컨테이너에 새로운 항목 추가
    checkboxContainer.appendChild(newSpan);

    // 완료 상태인 항목에 대해 체크박스 상태 변경 이벤트 발생
    if (completed) {
        newCheckBox.dispatchEvent(new Event('change'));
    }

    // 입력 필드 초기화
    input.value = "";
    updateTotalCount(); // 총 항목 수 업데이트
};

// 체크된 항목 수를 반환하는 함수
const updateCheckedCount = () => {
    const checkedItems = document.querySelectorAll('.checkbox_container input[type="checkbox"]:checked');
    completedTotalList.textContent = checkedItems.length;
};

// 총 항목 수를 갱신하는 함수
const updateTotalCount = () => {
    totalListQuantity.textContent = checkboxContainer.childElementCount - 2; // 총 항목 수 (헤더와 푸터 제외)
};



// 삭제 기능 구현
const deleteButton = (e) => {
    e.preventDefault();
    const itemToDelete = e.target.parentNode;
    itemToDelete.remove(); // 항목 삭제
    updateTotalCount(); // 총 항목 수 업데이트
    updateCheckedCount(); // 체크된 항목 수 업데이트
    saveItemsFn(); // 항목 저장
};



// 전체 삭제하기
const deleteAllHandler = (e) => {
    e.preventDefault();
    checkboxContainer.innerHTML = ""; // 컨테이너 내의 모든 자식 요소 삭제
    totalList.textContent=0; // 총 항목 수 0으로 초기화
    updateCheckedCount(); // 체크된 항목 수 업데이트
    saveItemsFn(); // 항목 저장
};

// 로컬 스토리지에 항목 저장
const saveItemsFn = () => {
    const saveItems = [];
    const todoItems = checkboxContainer.querySelectorAll('.newSpan');

    todoItems.forEach(todoItem => {
        const todoObj = {
            text: todoItem.querySelector('input[type="text"]').value,
            completed: todoItem.querySelector('input[type="checkbox"]').checked
        };
        saveItems.push(todoObj);
    });

    localStorage.setItem('todos', JSON.stringify(saveItems)); // 로컬 스토리지에 저장
};

// 로컬 스토리지에서 항목 불러오기
const loadTodos = () => {
    const savedItems = JSON.parse(localStorage.getItem('todos')) || []; // 저장된 항목 불러오기
    savedItems.forEach(todo => addList(todo.text, todo.completed)); // 화면에 추가
    updateTotalCount(); // 총 항목 수 업데이트
    updateCheckedCount(); // 체크된 항목 수 업데이트
};

// 페이지 로드 시 저장된 항목 불러오기
window.onload = loadTodos;

// 이벤트 리스너 등록
addBtn.addEventListener("click", (e) => {
    e.preventDefault(); // 폼 제출 방지
    let value = input.value.trim(); // 입력값 공백 제거
    if (value !== "") {
        addList(value); // 항목 추가
    }
});

deleteAllBtn.addEventListener("click", deleteAllHandler); // 전체 삭제 버튼 클릭 시 처리