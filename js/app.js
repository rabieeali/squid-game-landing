





















///////// OWL CAROUSEL
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items : 4,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
