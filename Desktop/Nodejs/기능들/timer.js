const timeOut = setTimeout(() => {
  console.log("1.5초 후 실행");
}, 1500);

const interval = setInterval(() => {
  console.log("1초마다 실행");
}, 1000);

const timeOut2 = setTimeout(() => {
  console.log("실행되지 않습니다");
}, 3000);

setTimeout(() => {
  clearTimeout(timeOut2);
  clearTimeout(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log("즉시실행");
});

const immediate2 = setImmediate(() => {
  console.log("실행되지 않습니다");
});

clearImmediate(immediate2);
