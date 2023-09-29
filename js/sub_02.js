const slide = document.querySelector(".event");
let slideWidth = slide.clientWidth;
const slideItems = document.querySelectorAll("figure");
let currSlide = 1;
const maxSlide = slideItems.length;

function nextMove() {
  currSlide++;
  if (currSlide <= maxSlide) {
    const offset = slideWidth * (currSlide - 1);
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: -${offset}px`);
    });
  } else {
    currSlide--;
  }
}
function prevMove() {
  currSlide--;
  if (currSlide > 0) {
    const offset = slideWidth * (currSlide - 1);
    slideItems.forEach((i) => {
      i.setAttribute("style", `left:-${offset}px`);
    });
  } else {
    currSlide++;
  }
}

window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

let startPoint = 0;
let endPoint = 0;

// PC 클릭 이벤트 (드래그)
slide.addEventListener("mousedown", (e) => {
  startPoint = e.pageX;
});

slide.addEventListener("mouseup", (e) => {
  endPoint = e.pageX;
  if (startPoint < endPoint) {
    prevMove();
  } else {
    nextMove();
  }
});

// 모바일 터치 이벤트 (스와이프)
slide.addEventListener("touchstart", (e) => {
  startPoint = e.touches[0].pageX;
});

slide.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX;
  if (startPoint < endPoint) {
    prevMove();  
  } else {
    nextMove();
  }
});