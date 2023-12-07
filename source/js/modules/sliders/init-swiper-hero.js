import Swiper from '../../vendor/swiper';

const swiperHero = '[data-swiper="hero"]';
const paginationHero = '[data-swiper="hero-pagination"]';

const setHeroSlider = () => {
  const sliderHero = new Swiper(swiperHero, {
    loop: true,
    speed: 800,

    pagination: {
      el: paginationHero,
      type: 'bullets',
      clickable: true,
    },
  });

  return sliderHero;
};

const initHeroSlider = () => {
  if (swiperHero && paginationHero) {
    setHeroSlider();
  }
};

export {initHeroSlider};
