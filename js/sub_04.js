$(document).ready(function(){

  /* scroll effect */
$(window).scroll(function(){

  let wscroll= $(this).scrollTop();

  if(wscroll>=200){
    $(".one").addClass("scr1")
  }else{
    $(".one").removeClass("scr1")
  }

  if(wscroll>=400){
    $(".two").addClass("scr2");
  }else{
    $(".two").removeClass("scr2");
  }

  if(wscroll>=600){
    $(".three").addClass("scr3");
  }else{
    $(".three").removeClass("scr3");
  }

  if(wscroll>=800){
    $(".four").addClass("scr4");
  }else{
    $(".four").removeClass("scr4");
  }

  if(wscroll>=300){
    $(".five").addClass("scr5");
  }else{
    $(".five").removeClass("scr5");
  }

  if(wscroll>=1200){
    $(".six").addClass("scr6");
  }else{
    $(".six").removeClass("scr6");
  }

  if(wscroll>=1400){
    $(".seven").addClass("scr7");
  }else{
    $(".seven").removeClass("scr7");
  }

});

});