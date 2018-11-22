const swup = new Swup();    // only this line when included with script tag

function checkLoaded() {
  return document.readyState === "complete";
}

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


  'use strict';

  var $nav_videos = $('.video');
  
  for (var i = 0; i < $nav_videos.length; i++) {
    var video = $nav_videos[i];

    $($nav_videos[i]).closest('a').on('mouseenter', function() {
      try {
        $('video.video', this)[0].play();
      } catch(e) {}
    }).on('mouseleave', function() {
      if ( $('video.video', this).closest(".box.active").length == 1 ) {
        return;
      }

      try {
        $('video.video', this)[0].pause();
      } catch(e) {}
    });
  }

  setTimeout(function() {
  for (var i = 0; i < $nav_videos.length; i++) {
    
      $nav_videos[i].pause();
    
  }
}, 200);

