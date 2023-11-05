// 세번째
const mysql = require("mysql2");

// MySQL 연결 풀을 생성합니다. 특정 설정은 기본값을 따름
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "torder",
  password: "jhsong1376!",
  waitForConnections: true, // 연결이 사용 가능할 때까지 대기 여부
  connectionLimit: 10, // 연결 풀의 최대 연결 수
  queueLimit: 0, // 대기열에 넣을 수 있는 최대 대기 연결 수
});

// 사용자 정보를 가져오는 함수를 정의함.
const getUsers = async () => {
  // MySQL 연결 풀을 Promise 기반으로 변환
  const promisePool = pool.promise();

  // "users" 테이블에서 모든 열을 선택하는 쿼리를 실행함
  const [rows] = await promisePool.query(`
  SELECT
    메뉴.menu_code,
    메뉴.menu_name,
    메뉴.menu_price,
    메뉴.menu_inf,
    메뉴.idx,
    카테고리.main,
    카테고리.side,
    카테고리.drink,
    카테고리.alcohol,
    카테고리.special,
    카테고리.idx
FROM
    메뉴
INNER JOIN
    카테고리 ON 메뉴.idx = 카테고리.idx;
`);
  //const [rows] = await promisePool.query("select * from 메뉴;");
  // 주문내역、매장、

  // 콘솔에 쿼리 결과를 출력
  console.log(rows);

  // 쿼리 결과를 반환
  return rows;
};

// 모듈로 내보냄
module.exports = {
  getUsers,
};
