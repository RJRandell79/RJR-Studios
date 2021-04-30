import { tns } from 'tiny-slider/src/tiny-slider';

let projectSliders = document.getElementsByClassName('project-carousel');

if (projectSliders) {
  for (let i = 0; i < projectSliders.length; i++) {
    tns({
      container: projectSliders[i],
      items: 1,
      gutter: 0,
      center: true,
      loop: true,
      nav: false,
      slideBy: 1,
      autoplay: false,
      controlsText: [
        '<img src="/wp-content/themes/rjrstudios-2018/dist/assets/icons/ionic-ios-arrow-left-slider-arrow.svg" alt="Left" />',
        '<img src="/wp-content/themes/rjrstudios-2018/dist/assets/icons/ionic-ios-arrow-right-slider-arrow.svg" alt="Right" />'
      ]
    });
  }
}
