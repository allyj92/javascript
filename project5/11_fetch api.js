// fetch: 서버와 데이터를 주고받기 위한 API호출 함수

// 인자: 서버주소(URL),HTTP메소드,전송할 데이터 등
// GET방식은 생략 가능
//첫번째인자: 서버의 주소(URL)
//두번째인자: 전송할 데이터와 HTTP 메소드 등을 포함하는 객체

// fetch("http://192.168.0.67:8080/board/read?no=1") //서버로 GET 요청
// .then((response) => response.json()) //응답 데이터를 JSON으로 변환
// .then((json) => console.log(json)); //JSON 데이터 출력

// POST - 새로운 게시물 생성
// fetch("http://192.168.0.67:8080/board/register",{
//   method:"POST",
//   body: JSON.stringify(
//     {
//       title:"가입인사",
//       content:"안녕하세요~!!!!!",
//       writer:"eunjae",
//      }
//   ), // 전송할데이터
//   headers: {
//         "Content-type": "application/json; charset=UTF-8",
//        },
// })
// .then((response) => response.text()) //상태코드 확인;
// .then((text)=>console.log(text));

// PUT - 본인이 작성한 게시물 수정
// fetch("http://192.168.0.67:8080/board/modify",{
//   method:"PUT",
//   body: JSON.stringify(
//     {
//       no:41,
//       title:"가입인사",
//       content:"***안녕하세요~!!!!!",
//       writer:"eunjae",
//      }
//   ), // 전송할데이터
//   headers: {
//         "Content-type": "application/json; charset=UTF-8",
//        },
// }).then((response) => console.log(response.status)); //상태코드 확인;

//DELETE - 본인의 게시물 삭제
// fetch("http://192.168.0.67:8080/board/remove?no=40",{
//     method:"DELETE",
// }).then((response)=>console.log());