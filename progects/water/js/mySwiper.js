 var swiper = new Swiper(".mySwiper", {
        effect: "cube",
          grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        autoplay: {
          delay: 4000,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });