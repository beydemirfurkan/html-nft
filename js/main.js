var swiper = new Swiper(".cube-wrapper-slider", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
    autoplay: true,
});


$('.community-hero .owl-carousel').owlCarousel({
    center: true,
    items:4,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },

        768: {
            items:2
        },

        991: {
            items:3
        },

        1199: {
            items:4
        },
    }
});

$('.rate-wrapper-carousel .owl-carousel').owlCarousel({
    center: true,
    items:4,
    dots:false,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },

        768: {
            items:3
        },

        991: {
            items:4
        },

        1199: {
            items:5
        },

        1366: {
            items:6
        },
    }
});


wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();



  $(".opened-menu").click(function(e) {
      $(".menu-wrap").addClass("active");
  });
  $(".closed-menu").click(function(e) {
      $(".menu-wrap").removeClass("active");
  });

