const fs = require("fs");

console.log("시작");

fs.readFile("./readme2.txt", (err, data) => {
  if (err) throw err;
  console.log("1번", data.toString());
});
fs.readFile("./readme2.txt", (err, data) => {
  if (err) throw err;
  console.log("2번", data.toString());
});
fs.readFile("./readme2.txt", (err, data) => {
  if (err) throw err;
  console.log("3번", data.toString());
});
console.log("끝");

//비동기 메서드들은 백그라운드에 해당 파일을 읽으라고 요청하고 다음 작업으로 넘어감
//=>파일 읽기 요청만 세번 보내고 '끝'을 찍는다
/**
 콘솔결과
시작
끝
2번 저를 여러번 읽어보세요
1번 저를 여러번 읽어보세요
3번 저를 여러번 읽어보세요
 */
//읽기가 완료되면 백그라운드가 다시 메인 스레드에 알림
//그다음 메인스레드는 등록된 콜백 함수를 실행

//수백개의 i/o요청이 들어와도 메인 스레드는 백그라운드에 요청 처리를 위임함
// 나중에 백그라운드가 각각의 요청 처리가 완료되었다고 알리면 그때 콜백 함수를 처리하면 됨
