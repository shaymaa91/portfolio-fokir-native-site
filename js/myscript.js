
window.onscroll = function() {scrollWin()};

function scrollWin() {
  var navbarcolor= document.getElementById('navbar');
  
  if ( document.documentElement.scrollTop > 0 &&  document.documentElement.scrollTop < 70) {
    navbarcolor.style.backgroundColor='#333333';
    navbarcolor.style.display = "block";
  } else {
    navbarcolor.style.display = "none";
  }
  
}