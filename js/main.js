

let hamburger = document.querySelector("#hamburger");

let nav_list = document.querySelector("#nav_list")

let nav_sect = document.querySelector("#nav_sect")

let body = document.querySelector("#body")





hamburger.addEventListener('click', function () {

  nav_list.classList.toggle('nav_toggle')

  hamburger.classList.toggle('icon_rotate')


  body.classList.toggle('body_overflow')

  // nav_sect.style.width = "100%" 

})


var ball = document.querySelector('.ball');

var tl = new TimelineMax({
  repeat: -1,
  yoyo: true
});
tl.add('start')
  .to(ball, 3, {
    y: 10,
    // ease: ease
  })
  


gsap.to(".circle_sm", {
  // opacity: 1,  
    x: 0,
    // display: block,
    stagger:{
        
        // opacity: 1,  
        // each: .1,
        amount: 1,
        // from: "center",
    },

    // scrollTrigger: {
    //     trigger: ".logo",
    //     start: "top top",
    //     // scrub: .2,
    //     // x: 700,
        
    // }

})


gsap.to(".scroll_heading", {
  duration: .5,
  
  // width: "100%",
  x: -1400,
  scrollTrigger: {
      trigger: ".company_slogan",
      start: "top 80%",
      scrub: .5,
      // x: -700,
      
  }
})





let video_logo = document.querySelector(".video_logo");
let my_video = document.querySelector("#video");
let vid_logo = document.querySelector("#vid_logo")

video_logo.addEventListener('click',function(){
  // console.log("hello");
  if(my_video.paused){
    my_video.play();
    vid_logo.style.display = 'none';
    
  }
  else
      {my_video.pause();
        vid_logo.style.display = 'block';
      // updatePlayPauseIcon('pause')
    }
  
})

var slider1 = new Swiper ('.slider1', {
  effect: 'slide',
  loop: 'loop',
  
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});



var counted = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
      $('.count').each(function () {
          var $this = $(this),
              countTo = $this.attr('data-count');
          $({
              countNum: $this.text()
          }).animate({
                  countNum: countTo
              },

              {

                  duration: 2000,
                  easing: 'swing',
                  step: function () {
                      $this.text(Math.floor(this.countNum));
                  },
                  complete: function () {
                      $this.text(this.countNum);
                      //alert('finished');
                  }

              });
      });
      counted = 1;
  }

});







$( document ).ready(function() {

  let bannerImage = document.getElementById('site-banner');

  let bannerHeight = bannerImage.offsetHeight;


  let navSect = document.getElementById("nav_sect");

  let navSectHeight = navSect.offsetHeight;

  $(window).scroll(function(){
    if ($(this).scrollTop() > bannerHeight - navSectHeight) {
       $(navSect).addClass('active');
    } else {
       $(navSect).removeClass('active');
    }
  });
});