import Swiper from '../../vendor/swiper';

const heroSliderSelector = '[data-swiper="hero"]';
const toursSliderSelector = '[data-swiper="tours"]';
const trainingSliderSelector = '[data-swiper="training"]';
const reviewsSliderSelector = '[data-swiper="reviews"]';

const heroSliderOptions = {
  slidesPerView: 1,
  loop: true,
  speed: 800,

  breakpoints: {
    1200: {
      allowTouchMove: false,
    },
  },

  pagination: {
    el: '[data-swiper="hero-pagination"]',
    type: 'bullets',
    clickable: true,
  },
};

const toursSliderOptions = {
  navigation: {
    nextEl: '[data-button="tours-next"]',
    prevEl: '[data-button="tours-prev"]',
  },
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 800,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

const trainingSliderOptions = {
  navigation: {
    nextEl: '[data-button="training-next"]',
    prevEl: '[data-button="training-prev"]',
  },
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 800,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    430: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    580: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1025: {
      slidesPerView: 4,
    },
  },
};

const reviewsSliderOptions = {
  navigation: {
    nextEl: '[data-button="reviews-next"]',
    prevEl: '[data-button="reviews-prev"]',
  },

  loop: true,
  speed: 800,

  breakpoints: {
    700: {
      slidesPerView: 30,
    },
    1025: {
      spaceBetween: 120,
    },
  },
};

const initSlider = (sliderSelector, options) => {
  if (!document.querySelector(sliderSelector)) {
    return null;
  }

  const swiper = new Swiper(sliderSelector, options);
  return swiper;
};

const initSliders = () => {
  initSlider(heroSliderSelector, heroSliderOptions);
  initSlider(toursSliderSelector, toursSliderOptions);
  initSlider(trainingSliderSelector, trainingSliderOptions);
  initSlider(reviewsSliderSelector, reviewsSliderOptions);
};

// добавляется возможность фокуса на слайды
const slides = document.querySelectorAll('[data-slide="slide"]');
slides.forEach((slide) => {
  slide.setAttribute('tabindex', '0');
});

// убирается возможность фокуса с дубликатов слайдов автоматически создаваемых swiper
const duplicates = document.querySelectorAll('.swiper-slide-duplicate');
duplicates.forEach((duplicate) => {
  duplicate.setAttribute('tabindex', '-1');
});

export {initSliders};
