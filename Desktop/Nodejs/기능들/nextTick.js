setImmediate(() => {
  console.log("immediate");
});
process.nextTick(() => {
  //promise.nextTick()은 setImmediate나 setTimeout보다 먼저 실행된다
  console.log("nextTick");
});
setTimeout(() => {
  console.log("setTimeout");
}, 0);
Promise.resolve().then(() => {
  //resolve된 Promise도 nextTick처럼 다른 콜백들보다 우선시 됨
  console.log("promise");
});

// => process.nextTick과 Promise를 마이크로테스크라고 따로 구분지어 부른다

//process.nextTick으로 받은 콜백 함수나 resolve된 Promise는 다른 이벤트 루프에서 대기하는 콜백함수보다도 먼저 실행된다
// 그래서 비동기 처리를 할 때 setImmediate보다 process.nextTick을 더 선호하는 개발자도 있지만
// 이런 마이크로태스크를 재귀 호출하게 되면 이벤트 루프는 다른 콜백 함수보다 마이크로태스크를 우선하여 처리하므로 콜백 함수들이 실행되지 않을 수도 있다.
