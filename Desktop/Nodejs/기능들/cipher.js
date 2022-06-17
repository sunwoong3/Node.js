// 양방향 대칭형 암호화 => 암호화된 문자열을 복호화 할 수 있으며, 키가 사용된다.
// 대칭형 암호화에서 암호를 복호화하려면 암호화 할 때 사용한 키와 동일한 키를 사용해야 된다.

const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = "abcdefghijklmnopqrstuvwxyz123456";
const iv = "1234567890123456";
const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update("암호화할 문장", "utf8", "base64");
///////////////////////////(암호화할 대상, 대상의 인코딩, 출력결과물의 인코딩) => 보통 문자열은 utf8, 암호는 base64를 많이 사용
result += cipher.final("base64");
console.log("암호화", result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, "base64", "utf8");
result2 += decipher.final("utf8");
console.log("복호화", result2);
