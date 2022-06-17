//require는 함수이고, 함수는 객체이므로 require는 객체로서 몇 가지 속성을 갖고 있다.
console.log("require가 가장 위에 오지 않아도 됩니다");
module.exports = "저를 찾아보세요";
require("./var");

console.log("require.cache입니다");
console.log(require.cache);
console.log("require.main입니다");
console.log(require.main);
console.log(require.main.filename);

//한번 require한 파일은 require.cache에 저장되므로 다음번에 require할 때는 새로 불러오지 않고
//require.cache에 있는 것이 재 사용된다.
//새로 require하길 원하면 require.cache의 속성을 제거하면 된다. 하지만 프로그램의 동작이 꼬일 수 있으므로 권장하지는 않음

//require.main은 노드 실행시 첫 모듈을 가리킨다
