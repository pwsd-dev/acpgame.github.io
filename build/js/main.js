let bannerInfoLinkToggle = document.querySelector('.banner-info .page__link-toggle');
let bannerInfoContent = document.querySelectorAll('.banner-info .banner-info-content .page__text');

bannerInfoLinkToggle.addEventListener('click', (e)=>{
  if(!e.target.classList.contains('page__link-toggle_hide')){
    e.target.innerText = 'скрыть';

  } else{
    e.target.innerText = 'еще даты';
  }
  e.target.classList.toggle('page__link-toggle_hide');
  
  
  bannerInfoContent.forEach((link)=>{
    link.classList.toggle('hide_mobile');
  });

});


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
    autoplayTimeout: 1800,
    swipeAngle: true,
    animateIn: "jello",
    animateOut: "rollOut",
    lazyload: true,
    speed: 800,
    
  });