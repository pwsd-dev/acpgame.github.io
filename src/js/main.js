
var sliderBanner = tns({
    container: "#sliderBanner",
    // mode: "gallery",
    items: 1,
    // loop: true,
    navContainer: "#customizeThumbnails",
    navAsThumbnails: true,
    autoplay: false,
    autoplayResetOnVisibility: false,
    controls: false,
    autoplayPosition: "bottom",
    autoplayText: [
        "▶",
        "❚❚"
      ],
    autoplayTimeout: 1500,
    swipeAngle: true,
    animateIn: "jello",
    animateOut: "rollOut",
    lazyload: true,
    speed: 800
  });