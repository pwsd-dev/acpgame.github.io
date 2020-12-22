let bannerInfoLinkToggle = document.querySelector('.banner-info .page__link-toggle');
let bannerInfoContent = document.querySelectorAll('.banner-info .banner-info-content .page__text');
if(bannerInfoLinkToggle){
  bannerInfoLinkToggle.addEventListener('click', (e)=>{
    if(!e.target.classList.contains('page__link-toggle_hide')){
      e.target.innerText = 'скрыть';
  
    } else{
      e.target.innerText = 'еще даты';
    }
    e.target.classList.toggle('page__link-toggle_hide');
    
    
    bannerInfoContent.forEach((link)=>{
      link.classList.toggle('hide');
    });
  
  });
}


if(document.getElementById('sliderBanner')){
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
    autoplayButton:".btn-play",
    autoplayHoverPause:true,
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
}
if(document.getElementById('sliderGames')){
  var sliderGames = tns({
    container: "#sliderGames",
    // mode: "gallery",
    items: 1,
    // loop: true,
    navContainer: "#customizeThumbnailsGames",
    navAsThumbnails: true,
    autoplay: true,
    autoplayResetOnVisibility: false,
    controls: false,
    autoplayButton:false,
    
    autoplayButton:".btn-play",
    autoplayTimeout: 1800,
    swipeAngle: true,
    lazyload: false,
    speed: 800,
    
  });
}
if(document.getElementById('emotionsBanner')){
  var sliderEmotions = tns({
    container: "#emotionsBanner",
    // mode: "gallery",
    items: 1,
    // loop: true,
    navContainer: "#customizeThumbnailsEmotions",
    navAsThumbnails: true,
    autoplay: false,
    autoplayResetOnVisibility: false,
    controls: false,
    autoplayButton:false,
    autoplayTimeout: 1800,
    swipeAngle: true,
    lazyload: false,
    speed: 800,
    
  });
 }
if(document.getElementById('sliderTrust')){
    var sliderEmotions = tns({
      container: "#sliderTrust",
      // mode: "gallery",
      items: 1,
      // loop: true,
      navContainer: "#customizeThumbnailsTrust",
      navAsThumbnails: true,
      autoplay: false,
      autoplayResetOnVisibility: false,
      controls: false,
      autoplayButton:false,
      autoplayTimeout: 1800,
      swipeAngle: true,
      lazyload: false,
      speed: 800,
      
    });
  }
  
if(document.getElementById('sliderInfoSlider')){
    var sliderEmotions = tns({
      container: "#sliderInfoSlider",
      // mode: "gallery",
      items: 1,
      // loop: true,
      navContainer: "#customizeThumbnailsInfoSlider",
      navAsThumbnails: true,
      autoplay: false,
      autoplayResetOnVisibility: false,
      controls: true,
      controlsPosition:"bottom",
      controlsText:[
        "",
        ""
      ],
      autoplayButton:false,
      autoplayTimeout: 1800,
      swipeAngle: true,
      lazyload: false,
      speed: 800,
      
    });
  }
  