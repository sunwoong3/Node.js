const fs = require("fs").promises;

fs.writeFile("./writeme.txt", "글이 입력됩니다")
  //////////////생성될 파일의 경로, 파일의 내용
  .then(() => fs.readFile("./writeme.txt"))
  .then((data) => console.log(data.toString()))
  .catch((err) => console.error(err));
