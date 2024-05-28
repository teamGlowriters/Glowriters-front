const upperfile = document.querySelector(".photo-file-input");
const upperInputFile = document.querySelector(".upperPhoto");
const removeIcon = document.querySelector(".real-remove-icon");

upperfile.addEventListener("change", function () {
  const file = this.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    upperInputFile.src = e.target.result;
  };

  reader.readAsDataURL(file);
  removeIcon.style.display = "inline-block";
});

removeIcon.addEventListener("click", function () {
  upperInputFile.src = "";
  removeIcon.style.display = "none";
});

// lowerfile input 요소 가져오기
const lowerfile = document.querySelector(".side-file-input");

// content-wrap-div 요소 가져오기
const contentDiv = document.querySelector(".content-wrap-div");

// content-wrap-div 요소에 대한 이벤트 리스너 추가
contentDiv.addEventListener("keydown", function (event) {
  // 사용자가 Enter 키를 눌렀을 때
  if (event.key === 13) {
    event.preventDefault(); // 기본 동작 중단
    const text = contentDiv.innerText.trim(); // 입력된 텍스트 가져오기

    if (text !== "") {
      // 새로운 p 태그 생성
      const pTag = document.createElement("p");
      pTag.innerText = text;

      // contentDiv에 새로운 p 태그 삽입
      contentDiv.appendChild(pTag);

      // 새로운 줄 삽입
      contentDiv.appendChild(document.createElement("br"));

      // 입력된 텍스트 지우기
      contentDiv.innerText = "";
    }
  }
});

// lowerfile의 change 이벤트에 대한 리스너 추가
lowerfile.addEventListener("change", function () {
  const file = this.files[0]; // 선택된 파일 가져오기
  const reader = new FileReader(); // 파일 리더 객체 생성

  reader.onload = function (e) {
    // 이미지를 새로운 img 요소로 생성하여 contentDiv에 삽입
    const img = document.createElement("img");
    img.src = e.target.result;
    img.style.width = "360px";
    img.style.height = "360px";
    contentDiv.appendChild(img);
  };
  contentDiv.appendChild(document.createElement("br"));
  // 선택된 파일을 읽기
  reader.readAsDataURL(file);
});

const categorybtn = document.querySelector(".category-btn");
const categoryModal = document.querySelector(".declaration-modal-wrap");
const enterBtn = document.querySelector(".declaration-btn-container");

categorybtn.addEventListener("click", () => {
  categoryModal.style.display = "flex";
});

enterBtn.addEventListener("click", () => {
  categoryModal.style.display = "none";
});

const declarationLabels = document.querySelectorAll(".declaration-label");
const declarationInputs = document.querySelectorAll(".declaration-input");
declarationLabels.forEach((item) => {
  item.addEventListener("click", () => {
    declarationInputs.forEach((radio, i) => {
      if (radio.checked) {
        radio.parentNode.classList.add("declaration-choice");
      } else {
        radio.parentNode.classList.remove("declaration-choice");
      }
    });
  });
});
