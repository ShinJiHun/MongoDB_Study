const express = require("express"); // express 프레임워크 사용을 위한 선언 객체 생성
const app = express(); // app 변수에 express 생성

app.get("/", function (rea, res) {
  // get 함수 생성 -> get이 호출되면 hello, world 출력
  return res.send("hello, world!!");
});

app.listen(3000, function () {
  // 3000번 포트가 호출될 떄 실행되는 메서드
  console.log("server linstening on Port 3000");
});
