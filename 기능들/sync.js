const fs = require("fs");

console.log("시작");
let data = fs.readFileSync("./readme2.txt");
console.log("1번", data.toString());
data = fs.readFileSync("./readme2.txt");
console.log("2번", data.toString());
data = fs.readFileSync("./readme2.txt");
console.log("3번", data.toString());
data = fs.readFileSync("./readme2.txt");
console.log("끝");

// sync메서드를 사용할 때는 이전 작업이 완료되어야 다음작업을 진행 할 수 있다.
// => 백그라운드가 작업하는 동안 메인스레드는 아무것도 하지 못하고 대기하고 있어야 됨
// => 메인스레드가 작업하지 않고 노는 시간이 생기므로 비효율적

// 백그라운드는 fs작업을 동시에 처리할 수도 있는데 Sync메서드를 사용하면 백그라운드조차 동시에 처리할 수 없다
// 비동기 fs메서드를 사용하면 백그라운드가 동시에 작업할 수도 있고, 메인 스레드는 다음 작업을 처리할 수 있다.Sync메서드를

// 동기메서드를 사용하는 것은 극히 드물며, 프로그램을 처음 실행할 때 초기화 용도로만 사용하는 것을 권장
