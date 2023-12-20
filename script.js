$(document).ready(function () {
  // scroll Event
  $(window).scroll(function () {
    let sc = $(window).scrollTop();
    $(".sc").text(sc);
    // max scroll 2163
    // heroSection 이벤트

    if (sc == 0) {
      $(".hero-container p").css({
        transform: "translateX(0)",
      });
      $(".hero-container").css({
        transform: "translateX(0)",
      });
    }
    // heroContainer 1
    let heroContainerLeft = sc - 888;

    if (sc > 0 && sc < 879) {
      $(".hero-container:nth-child(1) p").css({
        transform: "translateX(" + -sc + "px)",
      });
    } else if (sc > 879 && sc < 1376) {
      $(".hero-container:nth-child(1) p").css({
        transform: "translateX(-888px)",
      });
      $(".hero-container:nth-child(1)").css({
        transform: "translateX(" + -heroContainerLeft + "px)",
      });
    } else if (sc > 1376 && sc < 2163) {
      $(".hero-container:nth-child(1)").css({
        transform: "translateX(-450px)",
      });
    }
    // heroContainer 2
    let heroContainerRight = sc - 688;
    if (sc > 0 && sc < 688) {
      $(".hero-container:nth-child(2) p").css({
        transform: "translateX(" + sc + "px)",
      });
    } else if (sc > 688 && sc < 1276) {
      $(".hero-container:nth-child(2) p").css({
        transform: "translateX(688px)",
      });
      $(".hero-container:nth-child(2)").css({
        transform: "translateX(" + heroContainerRight + "px)",
      });
    } else if (sc > 1376 && sc < 2163) {
      $(".hero-container:nth-child(2)").css({
        transform: "translateX(620px)",
      });
    }
    if (sc > 2698 && sc < 3316) {
      var opacity = 1 - (sc - 2698) / (3316 - 2698);
      $(".hero-sticky").css("opacity", opacity);
    } else if (sc <= 2698) {
      $(".hero-sticky").css("opacity", 1);
    } else {
      $(".hero-sticky").css("opacity", 0);
    }
    // 그리스시대 콘텐츠 스크롤 이벤트
    let ancientNum =
      sc -
      ($(".hero-section").height() +
        $(".history-content-ancient > header").height() +
        62 +
        48);
    if (sc > 5164) {
      $(".sc").text(ancientNum);
    }
    // sc -  5164  = 0
    if (ancientNum > 0 && ancientNum < 300) {
      $(
        ".history-content-ancient .container-sticky .content .container .content-box .left-box .img-box img:nth-child(1)"
      ).css({
        opacity: "1",
      });
    } else if (ancientNum > 300 && ancientNum < 600) {
      $(
        ".history-content-ancient .container-sticky .content .container .content-box .left-box .img-box img:nth-child(2)"
      ).css({
        opacity: "1",
      });
    } else if (ancientNum > 600 && ancientNum < 800) {
      $(
        ".history-content-ancient .container-sticky .content .container .content-box .left-box .img-box img:nth-child(3)"
      ).css({
        opacity: "1",
      });
    } else if (ancientNum > 800 && ancientNum < 900) {
      $(
        ".history-content-ancient .container-sticky .content .container .content-box .left-box .img-box img:nth-child(2)"
      ).css({
        marginLeft: "40px",
      });
    } else if (ancientNum > 900 && ancientNum < 1000) {
      $(
        ".history-content-ancient .container-sticky .content .container .content-box .left-box .img-box img:nth-child(3)"
      ).css({
        marginLeft: "20px",
      });
    }
    // 오른쪽
    if (ancientNum > 0 && ancientNum > 300) {
      $(
        "    .history-content-ancient .container-sticky .content .container .content-box .right-box .box:nth-last-child(1)"
      ).css({
        opacity: "1",
      });
    }
    if (ancientNum > 300 && ancientNum > 600) {
      $(
        "    .history-content-ancient .container-sticky .content .container .content-box .right-box .box:nth-last-child(2)"
      ).css({
        opacity: "1",
      });
    }
    if (ancientNum > 600 && ancientNum > 900) {
      $(
        "    .history-content-ancient .container-sticky .content .container .content-box .right-box .box:nth-last-child(3)"
      ).css({
        opacity: "1",
      });
    }
    if (ancientNum > 900 && ancientNum > 1000) {
      $(
        "    .history-content-ancient .container-sticky .content .container .content-box .right-box .box:nth-last-child(4)"
      ).css({
        opacity: "1",
      });
    }
    // 복구
    if (ancientNum < 0) {
      $(
        ".history-content-ancient .container-sticky .content .container .content-box .left-box .img-box img,.history-content-ancient .container-sticky .content .container .content-box .right-box .box"
      ).css({
        opacity: "0",
        margin: "0",
      });
    }
    // end
    // 스크롤 변수
    let ancientSlideNum =
      ancientNum -
      ($(".history-content-ancient .container-sticky").height() +
        $(".history-content-ancient .slide-content").height());
    if (ancientNum > 2004) {
      $(".sc").text(ancientSlideNum);
    }
    // 슬라이드 스크롤 변수 = ancientNum - height()
    if (ancientSlideNum <= 0) {
      $(".history-content-ancient .slide-content .container ").css({
        transform: "translateX(0px)",
      });
    }
    if (ancientSlideNum > 0 && ancientSlideNum < 4713) {
      $(".history-content-ancient .slide-content .container ").css({
        transform: "translateX(" + -ancientSlideNum + "px)",
      });
    }
    // end
    // Modern
    let modernScNum = ancientSlideNum - 6516;
    if (ancientSlideNum > 6516) {
      $(".sc").text(modernScNum);
    }
    if (modernScNum > 0) {
      $(".modern .contnet .textsection1").css({
        left: "0",
        top: "232px",
        opacity: "1",
      });
    }
    if (modernScNum > 0) {
      $(".modern .contnet .textsection2").css({
        bottom: "0",
        opacity: "1",
      });
    }
    if (modernScNum > 0) {
      $(".modern .contnet img:nth-child(1)").css({
        top: "0",
        right: "-250px",
      });
    }
    if (modernScNum > 0) {
      $(".modern .contnet img:nth-child(2)").css({
        left: "-240px",
        bottom: "0",
      });
    }
    // 복수
    if (modernScNum < 0) {
      $(".modern .contnet .textsection1").css({
        left: "50%",
        top: "232px",
        opacity: "0",
      });
      $(".modern .contnet .textsection2").css({
        bottom: "50%",
        opacity: "0",
      });
      $(".modern .contnet img:nth-child(1)").css({
        top: "50%",
        right: "50%",
      });
      $(".modern .contnet img:nth-child(2)").css({
        left: "25%",
        bottom: "30%",
      });
    }
  });
  // page
  const pageView = $(".link .view");

  $(".page").hover(function () {
    let pageIndex = $(this).index();
    if (pageIndex == 0) {
      pageView.css({
        backgroundImage: "url(images/page1.jpg)",
      });
      $(this).css({
        opacity: "1",
      });
      $(this).siblings().css({ opacity: "0.5" });
    } else if (pageIndex == 1) {
      pageView.css({
        backgroundImage: "url(images/page2.jpg)",
      });
      $(this).css({
        opacity: "1",
      });
      $(this).siblings().css({ opacity: "0.5" });
    } else if (pageIndex == 2) {
      pageView.css({
        backgroundImage: "url(images/page3.jpg)",
      });
      $(this).css({
        opacity: "1",
      });
      $(this).siblings().css({ opacity: "0.5" });
    }
  });
  // 클릭
  $(".page").click(function () {
    $(this).animate(
      {
        fontSize: "200px",
      },
      2000
    );
    $(this).siblings().css({
      display: "none",
    });
    pageView.animate(
      {
        width: "100vw",
      },
      1000,
      function () {
        pageView.animate(
          {
            height: "100vh",
          },
          500
        );
      }
    );
  });
});
