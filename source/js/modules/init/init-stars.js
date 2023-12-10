const starsContainers = document.querySelectorAll('[data-stars]');

const starsAmount = 5;

const starWhite = '<svg width="16" height="16" role="img" focusable="false" aria-hidden="true"><use href="./img/sprite.svg#star-white"></use></svg>';
const starTransparent = '<svg width="16" height="16" role="img" focusable="false" aria-hidden="true"><use href="./img/sprite.svg#star"></use></svg>';

const initCreateStars = () => {
  starsContainers.forEach((starsContainer) => {
    createStars(starsContainer);
  });
};

const createWhiteStar = (starsContainer) => {
  const star = document.createElement('span');
  star.innerHTML = starWhite;
  starsContainer.append(star);
};

const createTransparentStar = (starsContainer) => {
  const star = document.createElement('span');
  star.innerHTML = starTransparent;
  starsContainer.append(star);
};

const createStars = (starsContainer) => {
  let starsQuantity = +starsContainer.dataset.stars;
  let starsRemains = starsAmount - starsQuantity;

  while (starsQuantity) {
    createWhiteStar(starsContainer);
    starsQuantity--;
  }

  while (starsRemains) {
    createTransparentStar(starsContainer);
    starsRemains--;
  }
};

export {initCreateStars};
