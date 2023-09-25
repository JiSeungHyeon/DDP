const figure = document.querySelector("figure");
let figureWidth = figure.clientWidth;
const figures = document.querySelectorAll('figure');
const maxFigure = figures.length;

let currSlide = 1;

window.addEventListener("resize", () => {
  figureWidth = figure.clientWidth;
});

function nextMove() {
  currSlide++;
  // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
  if (currSlide <= maxFigure) {
    // 슬라이드를 이동시키기 위한 offset 계산
    let offset = figureWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    figures.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
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
    let offset = figureWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    figures.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
  } else {
    currSlide++;
  }
}

let startPoint = 0;
let endPoint = 0;

// 모바일 터치 이벤트 (스와이프)
slide.addEventListener("touchstart", (e) => {
  startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
});
slide.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
  if (startPoint < endPoint) {
    // 오른쪽으로 스와이프 된 경우
    prevMove();
  } else if (startPoint > endPoint) {
    // 왼쪽으로 스와이프 된 경우
    nextMove();
  }
});