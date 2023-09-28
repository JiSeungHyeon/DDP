const slide = document.querySelector(".figure");
let slideWidth = slide.clientWidth;
const slideItems = document.querySelectorAll(".figure");
let currSlide = 1;
const maxSlide = slideItems.length;

function nextMove() {
  currSlide++;
  // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
  if (currSlide <= maxSlide) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: -${offset}px`);
    });
  } else {
    currSlide--;
  }
}
function prevMove() {
  currSlide--;
  // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
  if (currSlide > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: -${offset}px`);
    });
  } else {
    currSlide++;
  }   
}

let startPoint = 0;
let endPoint = 0;

// PC 클릭 이벤트 (드래그)
figures.addEventListener("mousedown", (e) => {
  startPoint = e.pageX;
});

figures.addEventListener("mouseup", (e) => {
  endPoint = e.pageX;
  if (startPoint < endPoint) {
    prevMove();
  } else {
    nextMove();
  }
});

// 모바일 터치 이벤트 (스와이프)
figures.addEventListener("touchstart", (e) => {
  startPoint = e.touches[0].pageX;
});

figures.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX;
  if (startPoint < endPoint) {
    prevMove();  
  } else {
    nextMove();
  }
});