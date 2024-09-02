function getDay(){
  const year = document.getElementById("year-input").value;
  const month = document.getElementById("month-input").value;
  const date = document.getElementById("date-input").value;
  const dday = `${year}-${month}-${date}`;

  return dday;
}

// 남은 시간을 계산하고 화면에 표시하는 함수
function count(){
  // 디데이 가져오기
  const dday = getDay();
  console.log("d-day: ", dday);

  // 남은 시간 계산: 디데이 - 현재시간
  // 현재 시간 가져오기
  const now = new Date();


  // 목표날짜
  // 목표날짜를 자정(00:00:00) 설정
  const target = new Date(dday).setHours(0, 0, 0, 0);


  // 남은 시간: 목표날짜 - 현재시간
  // 1s -> 1000ms
  const remaining = (target - now) / 1000 / 60;
  console.log('남은 시간:', remaining);



}