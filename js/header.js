/* tap bar & top button =================== */


document.addEventListener('touchmove', function(){
  let tapBar = document.querySelector('#tap_bar');
  let top = document.querySelector('#top');

  tapBar.classList.add('active');
  top.classList.add('active');
});

/* header============================= */
let trigger = document.querySelector('.trigger');
let nav= document.querySelector('nav');

trigger.addEventListener('click', ()=>{
  trigger.classList.toggle('active');
  nav.classList.toggle('active');
});

$(document).ready(function () {
  $(".gnb li").click(function(){
    $(this).siblings().find(".lnb").slideUp(300);
    $(this).find(".lnb").stop().slideToggle(200);
  });

});
let back = document.querySelector('.back');

back.addEventListener('click', ()=>{
  history.back();
});