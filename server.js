const express = require("express"); // express 프레임워크 사용을 위한 선언 객체 생성
const app = express(); // app 변수에 express 생성

const users = []; // users 정보를 입력하기 위한 변수

app.use(express.json()); // express.json : https://blog.naver.com/PostView.nhn?blogId=dlaxodud2388&logNo=221708863522

app.get("/user", function (req, res) {
  return res.send({ users: users });
});

app.post("/user", function (req, res) {
  users.push({ name: req.body.name, age: req.body.app });
  return res.send({ success: true });
});

app.listen(3000, function () {
  // 3000번 포트가 호출될 떄 실행되는 메서드
  console.log("server linstening on Port 3000");
});
