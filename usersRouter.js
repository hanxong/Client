const express = require("express");
const userDBC = require("./usersDBC");
const router = express.Router();

router.get("/getUsers", async (req, res) => {
  try {
    const users = await userDBC.getUsers(); // 데이터베이스에서 사용자 데이터를 가져옵니다.

    if (users.length > 0) {
      // 사용자 데이터가 존재하는 경우
      const userArray = users.map((메뉴) => ({
        menu_name: 메뉴.menu_name,
        menu_img: 메뉴.menu_img,
        menu_price: 메뉴.menu_price,
        main: 메뉴.main,
        side: 메뉴.side,
        drink: 메뉴.drink,
        alcohol: 메뉴.alcohol,
        special: 메뉴.special,
        menu_infu: 메뉴.menu_inf,
      }));

      // JSON 형식으로 응답을 클라이언트에게 보냅니다.
      res.status(200).json(userArray);
    } else {
      // 사용자 데이터가 없는 경우
      res.status(404).json({ message: "사용자 없음" });
    }
  } catch (error) {
    // 오류가 발생한 경우
    console.log(error.message);
    res.status(500).json({ message: "서버 오류" });
  }
});

module.exports = router;
