const input = document.querySelector("#input");
const addBtn = document.querySelector("#addBtn");
const checkboxContainer = document.querySelector(".checkbox_container");
const deleteAllBtn = document.querySelector("#deleteAllBtn");
const totalListQuantity = document.querySelector("#totalList");
const completedTotalList = document.querySelector("#completedTotalList")

const addList = (e) => {
    e.preventDefault();  // 폼 제출 방지

    let value = input.value.trim(); // 입력값 공백 제거
    if (value === "") return; // 빈 값이면 추가하지 않음

    // 새로운 체크박스 생성
    let newCheckBox = document.createElement("input");
    newCheckBox.type = "checkbox"; // 체크박스 타입 설정
    
    

    // 새로운 인풋박스 생성
    let newInputBox = document.createElement("input");
    newInputBox.type = "text";
    newInputBox.value = value;


    // 새로운 스팬 생성
    let newSpan = document.createElement("span");

    // 수정 및 삭제 버튼 생성
    let newModifyBtn = document.createElement("button");
    let newDeleteBtn = document.createElement("button");

    newModifyBtn.textContent = "수정";
    newDeleteBtn.textContent = "삭제";

    // 삭제 버튼 클릭 시 항목 삭제
    newDeleteBtn.addEventListener("click", deleteButton);
   
  

    // 수정 버튼 클릭 시 수정 기능 구현
    newModifyBtn.addEventListener("click", (e) => {
     
      const targetInputBox = e.target.parentNode.querySelector('input[type="text"]');
      targetInputBox.value = "";
      targetInputBox.focus();
      e.preventDefault();
  });


  
  // 체크박스 클릭 시 취소선 추가/제거
  newCheckBox.addEventListener("change", (e) => {

    if (e.target.checked) {
        newInputBox.style.textDecoration = "line-through"; // 인풋박스에 취소선 적용
        newModifyBtn.style.textDecoration = "line-through";
        newDeleteBtn.style.textDecoration = "line-through";
      
       
        
    } else {
        newInputBox.style.textDecoration = "none"; // 취소선 제거
        newModifyBtn.style.textDecoration = "none";
        newDeleteBtn.style.textDecoration = "none";
    }
    updateCheckedCount();


});


    

        // 스팬에 체크박스, 텍스트, 버튼 추가
        newSpan.appendChild(newCheckBox);
        newSpan.appendChild(newInputBox); // 텍스트 노드 추가
        newSpan.appendChild(newModifyBtn);
        newSpan.appendChild(newDeleteBtn);


        // 체크박스 컨테이너에 새로운 스팬 추가
        checkboxContainer.appendChild(newSpan);

        // 입력 필드 초기화
        input.value = "";

        // 체크된 항목 수를 반환하는 함수
const updateCheckedCount = () => {
  const checkedItems = document.querySelectorAll('.checkbox_container input[type="checkbox"]:checked');
  console.log(checkedItems.length)
  completedTotalList.textContent = checkedItems.length;
};

  
       
      
        totalListQuantity.textContent =(checkboxContainer.childElementCount-2);
    };

    // 삭제 기능 구현
    const deleteButton = (e) => {
        e.preventDefault();
        
        // 클릭된 삭제 버튼의 부모 노드를 찾아 삭제
        const itemToDelete = e.target.parentNode;
        itemToDelete.remove();
        totalListQuantity.textContent =(checkboxContainer.childElementCount-2);
      


        



    };


    




    // 전체 삭제하기
    const deleteAllHandler = (e) => {
      e.preventDefault();
      checkboxContainer.innerHTML = ""; // 컨테이너 내의 모든 자식 요소 삭제
      totalList.textContent = 0;
    };

    



// 이벤트 리스너 등록

addBtn.addEventListener("click", addList);
console.log(checkboxContainer.childElementCount);






