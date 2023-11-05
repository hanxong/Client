const { app } = require("./app");

app.get("/Sales_statistics", (req, res) => {
  //점주 메출 확인 페이지
  res.sendFile(__dirname + "/MAin/Sales_statistics");
});
