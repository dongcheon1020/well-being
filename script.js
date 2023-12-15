$(document).ready(function () {
  // scroll Event
  $(window).scroll(function () {
    let sc = $(window).scrollTop();
    $(".sc").text(sc);
    // max scroll 2163
    // heroSection 이벤트

    if (sc === 0) {
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
    // 그리스시대 콘텐츠 스크롤 이벤트
    let rowScrollNum = sc - $(".hero-section").height() - 500;
    // 원상복구
    if (sc >= 5097 && sc < 5200) {
      $(".container-sticky").css({
        transform: "translate(0px)",
      });
      $(
        ".container-sticky .content .container .content-box .left-box .img-box img"
      ).css({
        marginLeft: "0px",
      });
    }

    if (sc > 5365 && sc < 9075) {
      $(".container-sticky").css({
        transform: "translateX(" + -rowScrollNum + "px)",
      });
      $(
        ".container-sticky .content .container .content-box .left-box .img-box img:nth-child(n + 2)"
      ).css({
        marginLeft: "40px",
      });
    }
    // let rowScrollMax =
    if (sc > 9075 && sc > 9859) {
      $(".container-sticky").css({
        transform: "translateX(-3762px)",
      });
    }
  });
});
