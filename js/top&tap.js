/* tap bar & top button =================== */
$(document).ready(function(){
  $(window).scroll(function(){

    let wscroll = $(this).scrollTop();

    if (wscroll >= 100) {
      $("#tap_bar").stop().animate({bottom: "0px"}, 300);
      $("#top").stop().animate({bottom: "15px"}, 300);
    } else {
      $("#tap_bar").stop().animate({bottom: "-50px"}, 300);
      $("#top").stop().animate({bottom: "100%"}, 300);
    }
  });
});