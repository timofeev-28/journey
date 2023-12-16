import Swiper from '../../vendor/swiper';

const heroSliderSelector = '[data-swiper="hero"]';
const toursSliderSelector = '[data-swiper="tours"]';
const trainingSliderSelector = '[data-swiper="training"]';
const reviewsSliderSelector = '[data-swiper="reviews"]';

const heroSliderOptions = {
  loop: true,
  speed: 750,
  grabCursor: true,

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

  speed: 750,
  grabCursor: true,

  breakpoints: {
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

  speed: 800,
  grabCursor: true,

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
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
};

const reviewsSliderOptions = {
  navigation: {
    nextEl: '[data-button="reviews-next"]',
    prevEl: '[data-button="reviews-prev"]',
  },

  loop: true,
  speed: 750,
  grabCursor: true,

  breakpoints: {
    350: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 'auto',
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
