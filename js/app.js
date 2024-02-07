      var swiper = new Swiper(".s1", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
              el: ".slider_nav_block .swiper-pagination",
              clickable: true,
          },
          navigation: {
              nextEl: ".slider_nav_block .swiper-button-next",
              prevEl: ".slider_nav_block .swiper-button-prev",
          },
      });
      var swiper = new Swiper(".s2", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
              el: ".slider_nav_block .swiper-pagination",
              clickable: true,
          },
          navigation: {
              nextEl: ".slider_nav_block .swiper-button-next",
              prevEl: ".slider_nav_block .swiper-button-prev",
          },
      });

      
      let burgerMenu = document.querySelector('.burger_menu');
      let mobileNavigation = document.querySelector('.mobile_navigation');

      burgerMenu.addEventListener('click', (e) => {
          burgerMenu.querySelector('.burger__').classList.toggle('burg_act');
          mobileNavigation.classList.toggle('nav_act');
          document.body.classList.toggle('overflow_hidden');
      });