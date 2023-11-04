// 첫번째
const express = require("express"); // Express 모듈을 불러옴
const usersRouter = require("./usersRouter");

const app = express(); // Express 애플리케이션을 생성
const PORT = 5000; //서버 포트 정의

// 정적 파일 불러오기
app.use(express.static(__dirname + "/MAin"));

//  라우팅 정의
app.use("/db", usersRouter); //라우터로 넘겨주는거

app.get("/", (req, res) => {
  // 루트 경로에 대한 GET 요청에 대한 라우터를 정의

  res.sendFile(__dirname + "/MAin/Main.html"); // 루트 경로에 접근할 경우, "/MAin/Main.html" 파일을 응답으로 전송
});

app.get("/test", (req, res) => {
  //여기에 DB정보 나오게
  res.sendFile(__dirname + "/MAin/test.html");
});

app.get("/Owner", (req, res) => {
  //점주 페이지

  res.sendFile(__dirname + "/MAin/OwnerMain.html");
});

app.get("/Customer_care", (req, res) => {
  //점주 매출 페이지

  res.sendFile(__dirname + "/MAin/Customer_care.html");
});

app.get("/Product_mng", (req, res) => {
  //상품 관리 페이지

  res.sendFile(__dirname + "/MAin/Product_mng.html");
});

app.get("/Add_Product", (req, res) => {
  //상품 추가 페이지

  res.sendFile(__dirname + "/MAin/Add_Product.html");
});

app.get("/Modify", (req, res) => {
  //상품 수정 페이지

  res.sendFile(__dirname + "/MAin/Modify.html");
});

app.get("/Event", (req, res) => {
  //점주 이벤트  페이지

  res.sendFile(__dirname + "/MAin/Event.html");
});

app.get("/Add_Event", (req, res) => {
  //점주 이벤트 추가 페이지

  res.sendFile(__dirname + "/MAin/Add_Event.html");
});

// 서버 실행
app.listen(5000, () => {
  console.log(`Listen : ${PORT}`);
});
