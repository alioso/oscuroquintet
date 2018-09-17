// Navigation Toggle
function toggleNav() {
  const mainMenu = document.getElementById('main-menu');
  const menuIcon = document.getElementById('menu-icon');
  const mobileClass = 'open';
  if (!mainMenu.classList.contains(mobileClass)) {
    mainMenu.classList.add(mobileClass);
    menuIcon.classList.add(mobileClass);
  }
  else {
    mainMenu.classList.remove(mobileClass);
    menuIcon.classList.remove(mobileClass);
  }
}

//videos
var vid = document.getElementsByClassName('video');

function playVid() { 
  vid.play(); 
} 

function pauseVid(e) { 
  setTimeout(function() {
    e.pause();
  }, 100);
}

window.onload = function () {
  setTimeout(function() {
    for (var i = 0; i < vid.length; i++) {
      console.log(vid)
      vid[i].pause();
    }
  }, 100);
}
