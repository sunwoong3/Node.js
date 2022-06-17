//현재 주로 pbkdf2나 bcrypt , scrypt라는 알고리즘으로 비밀번호를 암호화 하고 있다.
// pbkdf2는 노드에서 지원, 기존문자열에 salt라고 불리는 문자열을 붙인 후 해시알고리즘을 반복해서 적용
// pbkdf2는 간단하지만 bcrypt나 scrypt보다 취약하므로 더 나은 보안이 필요하면 bcryt나 scrypt방식을 사용하면 된다.

const crypto = require("crypto"); // 다양한 방식의 암호화를 도와주는 모듈
crypto.randomBytes(64, (err, buf) => {
  //randomBytes로 64바이트 길이의 문자열 만들기 => 이것이 salt가 됨
  const salt = buf.toString("base64");
  console.log("salt", salt);
  crypto.pbkdf2("비밀번호", salt, 100000, 64, "sha512", (err, key) => {
    ////////////(비밀번호, salt, 반복횟수, 출력바이트, 해시 알고리즘 )
    console.log("password", key.toString("base64"));
  });
});

// crypto.randomBytes와 crypto.pbkdf2 메서드는 내부적으로 스레드 풀을 사용해 멀티 스레드로 동작한다.
