const element = document.querySelector('[data-width="slide"]');
const elements = document.querySelectorAll('.advantages__item');
const lastChild = document.querySelector('[data-swiper="advantages"] li:last-child');
let operatingRange = window.matchMedia('(min-width: 661px) and (max-width: 1199px');

const resizeLiHendler = () => {
  if (operatingRange.matches) {
    lastChild.style.width = element.offsetWidth + 'px';
  } else if (!operatingRange.matches) {
    lastChild.style.removeProperty('width');
  }
};

const changeWidth = () => {
  if (operatingRange.matches && elements.length > 2 && (elements.length % 2 !== 0)) {
    lastChild.style.width = element.offsetWidth + 'px';
  }

  if (elements.length > 2 && (elements.length % 2 !== 0)) {
    window.addEventListener('resize', resizeLiHendler);
  }
};

export {changeWidth};
