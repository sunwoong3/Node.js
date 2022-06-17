let i = 1;
setInterval(() => {
  if (i === 5) {
    console.log("종료");
    process.exit();
  }
  console.log(i);
  i += 1;
}, 1000);

//process.exit 메서드는 인수로 코드 번호를 줄 수 있다.
// 인수를 주지 않거나 0을 주면 정상종료
// 1을 주면 비정상 종료 -> 에러가 발생해서 종료하는 경우에 1을 넣어주면 된다.
