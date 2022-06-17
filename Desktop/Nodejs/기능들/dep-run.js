const dep1 = require("./dep1");
const dep2 = require("./dep2");
dep1();
dep2();
// dep1의 module exports가 함수가 아니라 빈 객체로 표시 => "순환참조"
//순환참조가 있을 경우에는 순환참조 되는 대상을 빈 객체로 만든다  - 순환참조가 발생하지 않도록 구조를 잘 잡는것이 중요!
