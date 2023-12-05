// const slider = document.querySelector('.slider');
//         const prevButton = document.querySelector('#prev-button');
//         const nextButton = document.querySelector('#next-button');
//         let currentIndex = 0;

//         prevButton.addEventListener('click', () => {
//             removeActiveClass();
//             currentIndex = (currentIndex - 1 + 9) % 9;
//             updateSlider();
//         });

//         nextButton.addEventListener('click', () => {
//             removeActiveClass();
//             currentIndex = (currentIndex + 1) % 9;
//             updateSlider();
//         });

//         function updateSlider() {
//             const translateX = -currentIndex * 300;
//             slider.style.transform = `translateX(${translateX}px)`;
//             addActiveClass();
//         }

//         function addActiveClass() {
//             const slides = document.querySelectorAll('.slide');
//             slides[currentIndex].classList.add('active');
//         }

//         function removeActiveClass() {
//             const slides = document.querySelectorAll('.slide');
//             slides[currentIndex].classList.remove('active');
//         }

//         // Initialize by adding active class to the first slide
//         addActiveClass();



var slider2 = new Swiper ('.slider2', {
    effect: 'slide',
    loop: true,

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



var slider3 = new Swiper ('.slider3', {
  effect: 'slide',
  loop: 'true',
  
  pagination: {
    el: '.swiper-pagination',
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

  // Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});



var slider4 = new Swiper ('.slider4', {
  effect: 'slide',
  loop: 'true',
  
  
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

  // Responsive breakpoints
  breakpoints: {
    10: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  }
});
