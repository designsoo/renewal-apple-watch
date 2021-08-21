$(function () {
  // ############## 1. autoBanner(slide) ##############
  var showBanner = 0;

  var liCount = $(".banner>li").length;
  var bFirst = $(".banner>.b-1").clone();
  console.log(liCount);
  $(".banner").append(bFirst);

  function moveBanner() {
    // console.log(showBanner);

    $(".banner")
      .stop()
      .animate(
        {
          marginLeft: -showBanner * 100 + "%",
        },
        1000
      );

    if (showBanner == liCount) {
      $(".circleBtn>li")
        .eq(0)
        .addClass("active")
        .siblings()
        .removeClass("active");
    } else {
      $(".circleBtn>li")
        .eq(showBanner)
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
  }

  // ############## 2. control__circle-btn ##############
  $(".circleBtn>li").click(function () {
    showBanner = $(this).index();
    moveBanner();
  });

  var auto = setInterval(function () {
    if (showBanner == liCount) {
      showBanner = 0;
      $(".banner").css("margin-left", 0);
    }
    showBanner++;
    moveBanner();
  }, 4000);

  // 배너 안에 마우스  - 배너 이동 정지
  // $(".banner").mouseenter(function () {
  //   clearInterval(auto);
  // });
  // $(".banner").mouseleave(function () {
  //   auto = setInterval(moveBanner, 5000);
  // });

  //############## sub-banner slide (slick) ##############
  function mySlick() {
    $(".s-banner-slider")
      .not(".slick-initialized")
      .slick({
        centerMode: true,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        dots: true,
        arrows: false,
        swipe: false,
        swipeToSlide: false,
        cssEase: "linear",
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              variableWidth: false,
              swipe: true,
              swipeToSlide: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: false,
              dots: false,
              swipe: true,
              swipeToSlide: true,
              variableWidth: false,
              adaptiveHeight: false,
            },
          },
        ],
      });
  }

  mySlick();

  // ############## hamBtn - click ##############
  var hamburger = $(".m-nav__hamBtn-icon");
  hamburger.on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".m-nav-menu").stop().slideToggle(400);
  });

  // ############## window-resize ##############
  var wWidth = $(window).outerWidth();
  $(window).resize(function () {
    wWidth = $(window).outerWidth();

    if (wWidth > 767) {
      $(".m-nav-menu").stop().slideUp(0);
      $(".m-nav__hamBtn-icon").removeClass("active");
    }
  });
});
