if (navigator.userAgent.indexOf('iPhone')!= -1) {    
  addEventListener("load", function() {        
  setTimeout(hideURLbar, 0);}, false);
  } else {     
    hideURLbar();
  }
  function hideURLbar(){window.scrollTo(0, 1);}