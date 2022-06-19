//fs는 기본적으로 콜백 형식의 모듈이므로 실무에서 사용하기 불편
//=>fs모듈을 프로미스 형식으로 바꿔주는 방법 사용
const fs = require("fs").promises;
//fs모듈에서 promis속성을 불러오면 프로미스 기반의 fs모듈을 사용 할 수 있게 된다.
fs.readFile("./readFile")
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
