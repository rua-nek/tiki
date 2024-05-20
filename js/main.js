var swiper = new Swiper(".home-slide", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false, 
      },
  });
  var swiper = new Swiper(".home-deal-2", {
    slidesPerView: 6,
    slidesPerGroup: 6,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    mousewheel: true,
    keyboard: true,
    loop: true,
    
  });
  var swiper = new Swiper(".home-deal-3", {
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween:20,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    mousewheel: true,
    keyboard: true,
    loop: true,
    
  });
  var swiper = new Swiper(".hotdeal-1", {
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween:5,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    mousewheel: true,
    keyboard: true,
    loop: true,
    
  });