/*var sliderRationMenu = tns({
    container: '#rationMenu .slider__continer',
    items: 1,
    center: false,
    loop: false,
    prevButton: '#rationMenu .page__btn_prev',
    nextButton: '#rationMenu .page__btn_next',
    mouseDrag: true,
    nav: false,
    lazyload:true,
    lazyloadSelector: ".tns-lazy-img"
});*/
var sliderBanner = tns({
    container: "#sliderBanner",
    // mode: "gallery",
    items: 1,
    // loop: true,
    navContainer: "#customizeThumbnails",
    navAsThumbnails: true,
    autoplay: true,
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