const url = require("url");
const querystring = require("querystring");

const parsedUrl = url.parse(
  "http://www.github.co.kr/?page=3&limit=10&category=nodejs&category=javascript"
);
const query = querystring.parse(parsedUrl.query);
console.log("querystring.parse():", query);
console.log("querystring.stringify()/:", querystring.stringify(query));

//querystring.parse(쿼리) : url의 query부분을 자바스크립트 객체로 분해
//querystring.stringify(객체): 분해된 query객체를 문자열로 다시 조립

// => 간단하게 객체로 분해되고 문자열로 조립되므로 편리
