const { odd, even } = require("./var");

function checkOddEven(num) {
  if (num % 2) {
    //홀수면
    return odd;
  }
  return even;
}

module.exports = checkOddEven;
//exports를 사용할 때는 객체만 사용할 수 있으므로 fuc.js와 같이
//module.exports에 함수를 대입한 경우에는 exports로 바꿀 수 없다

//exports와 module.exports에는 참조 관계가 있으므로 한 모듈에 exports와 module.exports를 동시에 사용하는 것은 좋지 않다
