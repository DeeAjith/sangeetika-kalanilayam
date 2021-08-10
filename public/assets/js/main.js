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

  // maintainance page
  function isTouchScreendevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  };
  if (isTouchScreendevice()) {
    window.location.href = '../coming-soon.html';
  }
  /* To Disable Inspect Element */
  // This is for mac
  $(window).bind('keydown.ctrl_s keydown.meta_s', function (event) {
    event.preventDefault();
  });
  // right click block
  $(document).bind("contextmenu", function (e) {
    e.preventDefault();
  });
  //Windows all possible triggers blocked
  document.onkeydown = function (e) {
    if (event.keyCode == 123) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      alert(e.cmdKey);
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey || e.cmdKey && e.keyCode == 'A'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) {
      return false;
    }
  }

});