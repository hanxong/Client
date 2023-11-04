document.addEventListener("DOMContentLoaded", function () {
  // 클라이언트에서 서버로 데이터를 요청
  fetch("/db/getUsers")
    .then((response) => response.json())
    .then((data) => {
      // 데이터를 받아와서 처리
      console.log(data);

      // 여기에서 HTML 엘리먼트에 데이터를 동적으로 추가
      const userListElement = document.getElementById("userList");
      userListElement.style.display = "none";

      // 데이터를 사용하여 HTML 엘리먼트를 동적으로 추가
      data.forEach((메뉴) => {
        // 메뉴 정보를 담은 HTML 엘리먼트 생성
        const menuElement = document.createElement("div");
        menuElement.innerHTML = `<p>${메뉴.menu_name}, ${메뉴.menu_price}  </p>`;

        // userListElement에 추가
        userListElement.appendChild(menuElement);
      });

      // 데이터를 사용하여 .menu_name 클래스를 가진 엘리먼트 업데이트
      const menuElements = document.querySelectorAll(".menu_name");
      data.forEach((메뉴, index) => {
        const menuElement = menuElements[index];

        // 메뉴 이름 업데이트
        const nameElement = menuElement.querySelector("p");
        nameElement.textContent = `${메뉴.menu_name}`;

        // // 메뉴 이미지 업데이트
        // const imgElement = menuElement.querySelector("src");
        // nameElement.textContent = `${메뉴.menu_img}`;

        // 가격 업데이트
        const priceElement = menuElement.querySelector(".menu-price");
        priceElement.textContent = `${메뉴.menu_price}원`;
      });
    })
    .catch((error) => console.error("Error:", error));
  // 초기에 한 번 데이터를 가져오고, 그 후 5초마다 업데이트
  // 5초마다 업데이트 (원하는 주기로 설정)
});
