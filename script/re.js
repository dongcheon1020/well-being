$(document).ready(function () {
  $(window).scrollTop(0);
  $(".content4 .viewmore-container").css({
    display: "none",
  });
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
        transform: "translateX(-420px)",
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
    } else if (sc > 1376 && sc < 2000) {
      $(".hero-container:nth-child(2)").css({
        transform: "translateX(540px)",
      });
    }
    // herosection-opacity
    if (sc > 1400 && sc < 1751) {
      var opacity = 1 - (sc - 1400) / (1751 - 1400);
      $(".hero-sticky").css("opacity", opacity);
    } else if (sc <= 1400) {
      $(".hero-sticky").css("opacity", 1);
    } else {
      $(".hero-sticky").css("opacity", 0);
    }
    // content1
    const totalScroll = 50;
    // 1
    if (sc > 3254 && sc <= 3254 + totalScroll) {
      $(".content1 .text-lign .text-box:nth-child(1)").css({
        opacity: 1 - (sc - 3254) / totalScroll,
      });
    } else if (sc > 3254 + totalScroll && sc <= 3500) {
      $(".content1 .text-lign .text-box:nth-child(1)").css({
        opacity: "0",
      });
    } else if (sc < 3254 && sc <= 3000) {
      $(".content1 .text-lign .text-box:nth-child(1)").css({
        opacity: "1",
      });
    }

    // 2
    const contetn2Sc = sc - 3254 + totalScroll;
    if (sc > contetn2Sc && sc < 3900) {
      $(".content1 .text-lign .text-box:nth-child(2)").css({
        opacity: (sc - (3256 + totalScroll)) / totalScroll,
      });
    } else if (sc > contetn2Sc + totalScroll && sc < 3900) {
      $(".content1 .text-lign .text-box:nth-child(2)").css({
        opacity: "1",
      });
    } else if (sc < contetn2Sc && sc < 3900) {
      $(".content1 .text-lign .text-box:nth-child(2)").css({
        opacity: "0",
      });
    }
    if (sc > 3825 && sc < 3825 + totalScroll) {
      const content2Sc2 = sc - 3825;
      $(".content1 .text-lign .text-box:nth-child(2)").css({
        opacity: 1 - content2Sc2 / totalScroll,
      });
    } else if (sc > 3825 + totalScroll && sc < 4000) {
      $(".content1 .text-lign .text-box:nth-child(2)").css({
        opacity: "0",
      });
    }
    // 3
    const contetn3Sc = sc - 3825 + totalScroll;
    if (sc > contetn3Sc && sc < 4239) {
      $(".content1 .text-lign .text-box:nth-child(3)").css({
        opacity: (sc - (3825 + totalScroll)) / totalScroll,
      });
    } else if (sc > contetn3Sc + totalScroll && sc < 4239) {
      $(".content1 .text-lign .text-box:nth-child(3)").css({
        opacity: "1",
      });
    } else if (sc < contetn3Sc && sc < 4239) {
      $(".content1 .text-lign .text-box:nth-child(3)").css({
        opacity: "0",
      });
    }
    if (sc > 4239 && sc < 4239 + totalScroll) {
      const contetn3Sc = sc - 4239;
      $(".content1 .text-lign .text-box:nth-child(3)").css({
        opacity: 1 - contetn3Sc / totalScroll,
      });
    } else if (sc > 4239 + totalScroll && sc < 4339) {
      $(".content1 .text-lign .text-box:nth-child(3)").css({
        opacity: "0",
      });
    }
    // 4
    const contetn4Sc = sc - 4239 + totalScroll;
    if (sc > contetn4Sc && sc < 5133) {
      $(".content1 .text-lign .text-box:nth-child(4)").css({
        opacity: (sc - (4239 + totalScroll)) / totalScroll,
      });
    } else if (sc > contetn4Sc + totalScroll && sc < 5133) {
      $(".content1 .text-lign .text-box:nth-child(4)").css({
        opacity: "1",
      });
    } else if (sc < contetn4Sc && sc < 5133) {
      $(".content1 .text-lign .text-box:nth-child(4)").css({
        opacity: "0",
      });
    }
    // view
    let viewSc = sc - 3155;
    $(".sc").text(viewSc);
    let videoTime = $(".view-box video").get(0).duration;
    let videoPlay = (viewSc / 1390) * videoTime;
    if (viewSc > 0 && viewSc < 1386) {
      $(".view-box video").get(0).currentTime = videoPlay;
    }

    // conent2
    $(".changebg > ul > li").click(function () {
      let btIndex = $(this).index();
      const bgs = [
        "none",
        "url(images/bg2.jpg)",
        "url(images/bg3.jpg)",
        "url(images/bg4.jpg)",
        "url(images/bg5.jpg)",
      ];
      $(".content2 .body ").css({
        "background-image": bgs[btIndex],
      });
      $(this)
        .css({
          border: "5px solid var(--orange-color)",
        })
        .siblings()
        .css({
          border: "none",
        });
    });
    // content3
    let content3Sc = sc - 8040;
    if (content3Sc > 0 && sc < 8369) {
      $(".content3 .sticky .headlign").css({
        transform: "translateY(" + -content3Sc + "px)",
        color: "var(--orange-color)",
      });
    } else if (sc > 8369 && sc < 11000) {
      $(".content3 .sticky .headlign").css({
        color: "var(--orange-color)",
      });
    } else {
      $(".content3 .sticky .headlign").css({
        color: "#dedede",
        transform: "translateY(0px)",
      });
    }
    // bg
    let content3ScBg = sc - 9769;
    if (sc > 9769) {
      $(" .content3 .page .bg ").css({
        "background-size":
          "calc(180vw - " +
          content3ScBg / 1.5 +
          "px) calc(200vh - " +
          content3ScBg / 3 +
          "px)",
      });
    } else {
      $(" .content3 .page .bg ").css({
        "background-size": "calc(180vw) calc(200vh)",
      });
    }
    // content5
    let content5Sc =
      sc -
      5526 -
      $(".content2").height() -
      $(".content3").height() -
      $(".content4").height();
    // $(".sc").text(content5Sc);

    if (content5Sc > 0 && content5Sc < 1100) {
      let c5ratio = content5Sc / 1100;
      let c5vwValue = 40 + 60 * c5ratio;
      let c5bg = 180 - 80 * c5ratio;

      $(".contetn5 .sticky .viewbox ").css({
        width: c5vwValue + "vw",
        height: c5vwValue + "vh",
        backgroundSize: c5bg + "vw " + c5bg + "vh",
        borderRadius: "18px",
      });
    } else if (content5Sc < 0) {
      $(".contetn5 .sticky .viewbox ").css({
        width: "40vw",
        height: "40vh",
        backgroundSize: "180vw 180vh",
        borderRadius: "18px",
      });
    } else {
      $(".contetn5 .sticky .viewbox ").css({
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        borderRadius: "0",
      });
    }
    // content6
    let con6Sc = content5Sc - $(".contetn5").height();
    // $(".sc").text(con6Sc);
    if (con6Sc > 0) {
      c6S = $(".contetn6 .container").css({
        transform: "translateX(" + -con6Sc + "px)",
      });
    } else {
      c6S = $(".contetn6 .container").css({
        transform: "translateX(0px)",
      });
    }
    if (con6Sc > 10 && con6Sc < 1647) {
      $(".contetn6 .c6i").css({
        transform: "translateY(0px)",
        filter: "grayscale(0)",
      });
      $(".contetn6 .c6i1").css({
        transform: "translateY(200px)",
        filter: "grayscale(1)",
      });
    } else if (con6Sc > 1647 && con6Sc < 3623) {
      $(".contetn6 .c6i").css({
        transform: "translateY(0px)",
        filter: "grayscale(0)",
      });
      $(".contetn6 .c6i2").css({
        transform: "translateY(200px)",
        filter: "grayscale(1)",
      });
    } else if (con6Sc > 3623 && con6Sc < 5625) {
      $(".contetn6 .c6i").css({
        transform: "translateY(0px)",
        filter: "grayscale(0)",
      });
      $(".contetn6 .c6i3").css({
        transform: "translateY(200px)",
        filter: "grayscale(1)",
      });
    } else if (con6Sc > 5625 && con6Sc < 10000) {
      $(".contetn6 .c6i").css({
        transform: "translateY(0px)",
        filter: "grayscale(0)",
      });
      $(".contetn6 .c6i4").css({
        transform: "translateY(200px)",
        filter: "grayscale(1)",
      });
    } else {
      $(".contetn6 .c6i").css({
        transform: "translateY(0px)",
        filter: "grayscale(0)",
      });
    }
    // scroll end
  });

  //  버튼
  let arrowR = 180;
  $(".content4 .viewmore").click(function () {
    arrowR += 180;
    $(".content4 .arrow ").css({
      transform: "rotateX(" + arrowR + "deg)",
    });
    if (arrowR > 180) {
      arrowR = 0;
    }
    $(".content4 .viewmore-container").slideToggle();
  });
  let rot = 0;
  let btOn1 = false;
  let btOn2 = false;
  let btOn3 = false;

  $(".changebt1").click(function () {
    // bt
    if (btOn1 == true) {
      btOn1 = false;
    } else {
      btOn1 = true;
    }

    if (btOn1 == true) {
      $(this).css({
        transform: "rotate(45deg)",
      });
      $(this).siblings(".hidden-box").css({
        opacity: "1",
      });
    } else {
      $(this).css({
        transform: "rotate(0deg)",
      });
      $(this).siblings(".hidden-box").css({
        opacity: "0",
      });
    }
  });
  $(".changebt2").click(function () {
    // bt
    if (btOn2 == true) {
      btOn2 = false;
    } else {
      btOn2 = true;
    }

    if (btOn2 == true) {
      $(this).css({
        transform: "rotate(45deg)",
      });
      $(this).siblings(".hidden-box").css({
        opacity: "1",
      });
    } else {
      $(this).css({
        transform: "rotate(0deg)",
      });
      $(this).siblings(".hidden-box").css({
        opacity: "0",
      });
    }
  });
  $(".changebt3").click(function () {
    // bt
    if (btOn3 == true) {
      btOn3 = false;
    } else {
      btOn3 = true;
    }

    if (btOn3 == true) {
      $(this).css({
        transform: "rotate(45deg)",
      });
      $(this).siblings(".hidden-box").css({
        opacity: "1",
      });
    } else {
      $(this).css({
        transform: "rotate(0deg)",
      });
      $(this).siblings(".hidden-box").css({
        opacity: "0",
      });
    }
  });
  let morebt = false;
  $(".morebt").click(function () {
    // bt
    if (morebt == true) {
      morebt = false;
    } else {
      morebt = true;
    }

    if (morebt == true) {
      $(".morebt-show").hide();
      $(".morebt-close").show();
      $(this).siblings(".hidden-box").css({
        opacity: "1",
      });
    } else {
      $(".morebt-show").show();
      $(".morebt-close").hide();
      $(this).siblings(".hidden-box").css({
        opacity: "0",
      });
    }
  });
  // hover
  $(".content2 .body .center section .bigbox:nth-child(4) .title").hover(
    function () {
      $(this).next(".description").css({
        color: "var(--white-color)",
      });
    },
    function () {
      $(this).next(".description").css({
        color: "var(--black-gray-color)",
      });
    }
  );
});
$(winodw).on("load", function () {
  $(winodw).scrollTop(0);
});
