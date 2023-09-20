/* gnb============================= */
let trigger = document.querySelector('.trigger');
let nav= document.querySelector('nav');

trigger.addEventListener('click', ()=>{
  trigger.classList.toggle('active');
  nav.classList.toggle('active');
});

let back = document.querySelector('.back');

back.addEventListener('click', ()=>{
  history.back();
});