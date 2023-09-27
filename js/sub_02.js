const figures = document.querySelector('.event');
let currDeg = 0;
let rotateDeg;

function nextMove() {
  rotateDeg = currDeg + 45;
  figures.style.transform = `rotateY(${rotateDeg}deg)`;
  currDeg = rotateDeg;
}
function prevMove() {
  rotateDeg = currDeg - 45;
  figures.style.transform = `rotateY(${rotateDeg}deg)`;
  currDeg = rotateDeg;
}

let startPoint = 0;
let endPoint = 0;

// PC 클릭 이벤트 (드래그)
figures.addEventListener("mousedown", (e) => {
  figures.style.animationPlayState = 'paused';
  startPoint = e.pageX;
});

figures.addEventListener("mouseup", (e) => {
  endPoint = e.pageX;
  if (startPoint < endPoint) {
    prevMove();
  } else {
    nextMove();
  }
  figures.style.animationPlayState = 'running';
});

// 모바일 터치 이벤트 (스와이프)
figures.addEventListener("touchstart", (e) => {
  figures.style.animationPlayState = 'paused';
  startPoint = e.touches[0].pageX;
});

figures.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX;
  if (startPoint < endPoint) {
    prevMove();  
  } else {
    nextMove();
  }
  figures.style.animationPlayState = 'running';
});