$(document).ready(function () {
  // nav-mobile
  console.log('%c Developed by @deeAjith https:://deeajith.in ', 'background: #222; color: #bada55');
  $('.nav-toggle').click(function () {
    $('.header-main').toggleClass('checked');
    $('.header-main .nav-items').toggleClass('checked');
    $('.social-icons-cont').toggleClass('checked');
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