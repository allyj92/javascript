// try ~ catch: 코드에서 발생하는 오류를 처리

// try {
//   func();
// } catch (error) {
//   console.error(error);
// }finally{
//   console.log("마지막에 무조건 실행되는 부분");
// }

// finally는 오류 발생 여부와 상관없이 무조건 실행됨

// 강제로 에러를 발생시킬 때는 throw 사용
try {
  throw "myException"; //"myException"를 에러메세지로 사용하여 에러 발생시키기
} catch (err) {
  console.log(err); //발생한 에러를 catch 블록에서 처리
}
