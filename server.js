const express = require("express"); // express 프레임워크 사용을 위한 선언 객체 생성
const app = express(); // app 변수에 express 생성

const users = [{ name: "JiHoon", age: 30 }];

app.get("/user", function (req, res) {
  res.send({ users }); // client에게 보내고 싶은 정보를 매개변수로 보내면 Page에서 확인 가능
});

app.listen(3000, function () {
  // 3000번 포트가 호출될 떄 실행되는 메서드
  console.log("server linstening on Port 3000");
});
