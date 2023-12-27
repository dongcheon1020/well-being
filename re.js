$(document).ready(function () {
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
        color: "#E30000",
      });
    } else if (sc > 8369 && sc < 11000) {
      $(".content3 .sticky .headlign").css({
        color: "#E30000",
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
    if (content5Sc > 0 && content5Sc < 14789) {
      // viewbox sizup
      let newWidth = 740 + content5Sc / 1.21;
      let newHeight = 348 + content5Sc / 1.92;

      let vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      let vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );
      if (newWidth > vw) {
        newWidth = vw;
      }
      if (newHeight > vh) {
        newHeight = vh;
      }
      let calcWidth = Math.max(100, 180 - content5Sc / 15);
      let calcHeight = Math.max(100, 180 - content5Sc / 15);
      let BgSize = `calc(${calcWidth}vw) calc(${calcHeight}vh)`;

      $(".contetn5 .sticky .viewbox ").css({
        width: newWidth,
        height: newHeight,
        backgroundSize: BgSize,
      });
    } else {
      $(".contetn5 .sticky .viewbox ").css({
        width: "740px",
        height: "348px",
        backgroundSize: "calc(180vw) calc(180vh)",
      });
    }
  });
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
});
