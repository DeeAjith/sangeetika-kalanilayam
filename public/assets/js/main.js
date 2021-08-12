$(document).ready(function () {
  // nav-mobile
  $('.nav-toggle').click(function () {
    $('.header-main').toggleClass('checked');
    $('.header-main .nav-items').toggleClass('checked');
  });
  $('.nav-item.dropdown').click(function () {
    $('.nav-item.dropdown').toggleClass('checked');
  });

  // slider activities
  $('.activities-carousel').slick({
    centerMode: true,
    centerPadding: '50px',
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: 'progressive',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });
});