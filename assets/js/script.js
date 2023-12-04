if ($('.banner__slider').length) {
  $('.banner__slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'linear'
  });
}

if ($('.services__slider').length) {
  $('.services__slider').slick({
    dots: false,
    infinite: false,
    speed: 500,

    // arrows: false,
    slidesToShow: 1,
    cssEase: 'linear',
    prevArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="63" height="62" viewBox="0 0 63 62" fill="none"><rect x="62.5" y="62" width="62" height="62" rx="31" transform="rotate(-180 62.5 62)" fill="#F6CB61"/><path d="M39.5 47L23.5 31L39.5 15" stroke="#0033A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    nextArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="63" height="62" viewBox="0 0 63 62" fill="none"><rect x="0.5" width="62" height="62" rx="31" fill="#F6CB61"/><path d="M23.5 15L39.5 31L23.5 47" stroke="#0033A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
  });
}

if ($('.team__slider1').length) {
  $('.team__slider1').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 50,
    speed: 3000,
    arrows: false,
    slidesToShow: 8,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
}

if ($('.container')) {
  var contatainerWidth = $('.container').width()
  var containerMargin = ($(window).width() - contatainerWidth) / 2
  if ($(window).width() > 586) {
    if ($('.banner__slider').length) {
      $('.banner__slider .slick-dots').css('right', containerMargin)
    }
  }

  if ($('.services__slider').length) {
    $('.services__slider .arrowLeft').css('right', containerMargin)
    $('.services__slider .arrowRight').css('left', containerMargin)
  }
}

if ($('.team__slider2').length) {
  $('.team__slider2').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
    prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="63" height="62" viewBox="0 0 63 62" fill="none"><rect x="62.5" y="62" width="62" height="62" rx="31" transform="rotate(-180 62.5 62)" fill="#F6CB61"/><path d="M39.5 47L23.5 31L39.5 15" stroke="#0033A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="63" height="62" viewBox="0 0 63 62" fill="none"><rect x="0.5" width="62" height="62" rx="31" fill="#F6CB61"/><path d="M23.5 15L39.5 31L23.5 47" stroke="#0033A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
  });
}

if ($(window).width() > 992) {
  for (let i = 0; i < $('.header__top a').length; i++) {
    $('.header__top a').eq(i).hover(() => {
      if ($('.header__top a').eq(i).is("#services")) {
        $('.header__bot').css('display', 'block')
      }
      else {
        $('.header__bot').css('display', 'none')
      }
    })
    $(".header").on("mouseleave", function () {
      $('.header__bot').css('display', 'none')
    });
  }
}

$('.burger').click(() => {
  $('.burger').toggleClass('open');
  $('.header__mobile').toggleClass('open');
})

