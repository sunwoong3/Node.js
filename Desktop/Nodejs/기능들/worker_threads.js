const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  //부모일 때
  const worker = new Worker(__filename);
  worker.on("message", (message) => console.log("from worker", message)); //워커에게 메시지 받기 (한번만 받고싶을땐 once사용)
  worker.on("exit", () => console.log("worker exit"));
  worker.postMessage("ping"); //워커에게 메시지 보내기
} else {
  // 워커일때
  parentPort.on("message", (value) => {
    console.log("from parent", value);
    parentPort.postMessage("pong");
    parentPort.close(); //워커에서 on메서드를 사용할 때는 워커를 종료해야됨. 종료될 때는 worker.on(exit)이 실행됨
  });
}
