const sliderHero = document.querySelector('[data-swiper="hero"]');

const setHeroSlider = () => {
  return new window.Swiper(sliderHero, {
    loop: true,
    speed: 800,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
};

const initHeroSlider = () => {
  if (sliderHero) {
    setHeroSlider();
  }
};

export {initHeroSlider};
