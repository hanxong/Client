// 모달 열기 함수
function openModal(imageSrc, menuName, menuPrice, menuDescription) {
  var modal = document.getElementById("menuModal");
  var modalContent = document.getElementById("modalContent");
  modal.style.display = "block";
  modalContent.innerHTML =
    '<img src="' +
    imageSrc +
    '" /><p>' +
    menuName +
    '</p><p class="menu_price">' +
    menuDescription +
    '</p><p class="menu_price">' +
    menuPrice +
    "</p>";

  // "추가" 버튼을 모달 내부에 추가
  var addButton = document.createElement("button");
  addButton.id = "addButton";
  addButton.innerText = "추가";
  modalContent.appendChild(addButton);

  // 닫기 버튼을 모달 내부에 추가
  var closeButton = document.createElement("span");
  closeButton.id = "closeButton";
  closeButton.className = "close-button";
  closeButton.innerText = "X";
  modalContent.appendChild(closeButton);

  // 닫기 버튼에 이벤트 리스너 추가
  closeButton.addEventListener("click", closeModal);
}

// 모달 닫기 함수
function closeModal() {
  var modal = document.getElementById("menuModal");
  modal.style.display = "none";

  // "추가" 버튼과 닫기 버튼을 모달 내부에서 제거
  var addButton = document.getElementById("addButton");
  var closeButton = document.getElementById("closeButton");
  if (addButton) {
    addButton.remove();
  }
  if (closeButton) {
    closeButton.remove();
  }
}

// 각 메뉴 버튼에 이벤트 리스너 추가
var menuButtons = document.querySelectorAll(".menu-button");
menuButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var imageSrc = button.querySelector("img").src;
    var menuName = button.nextElementSibling.textContent;
    var menuPrice = button.nextElementSibling.nextElementSibling.textContent;
    var menuDescription =
      button.nextElementSibling.nextElementSibling.textContent;
    openModal(imageSrc, menuName, menuPrice, menuDescription);
  });
});

//
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
        menuElement.innerHTML = `<p>${메뉴.drink}, ${메뉴.menu_price}  </p>`;

        // userListElement에 추가
        userListElement.appendChild(menuElement);
      });

      // 데이터를 사용하여 .menu_name 클래스를 가진 엘리먼트 업데이트
      const menuElements = document.querySelectorAll(".menu_name");
      data.forEach((메뉴, index) => {
        const menuElement = menuElements[index];

        // 메뉴 이름 업데이트
        const nameElement = menuElement.querySelector("p");
        nameElement.textContent = `${메뉴.drink}`;

        // // 메뉴 이미지 업데이트
        // const imgElement = menuElement.querySelector("src");
        // nameElement.textContent = `${메뉴.menu_img}`;

        // 가격 업데이트
        const priceElement = menuElement.querySelector(".menu_price");
        priceElement.textContent = `${메뉴.menu_price}원`;
      });
    });
  // .catch((error) => console.error("Error:", error));

  // 초기에 한 번 데이터를 가져오고, 그 후 5초마다 업데이트
  // 5초마다 업데이트 (원하는 주기로 설정)
});
