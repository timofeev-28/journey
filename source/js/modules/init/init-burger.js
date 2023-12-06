const burger = document.querySelector('[data-burger="burger"]');
const logo = document.querySelector('[data-burger="logo"]');
const navigation = document.querySelector('[data-burger="nav"]');
const linksNav = document.querySelectorAll('[data-burger="link-nav"]');
const linkTelephone = document.querySelector('[data-burger="link-tel"]');
const burgerClose = document.querySelector('[data-burger="burger-close"]');
const overlay = document.querySelector('[data-burger="overlay"]');
const container = document.querySelector('[data-burger="container"]');

// закрытие бургера
const burgerRemoveActive = () => {
  burger.classList.remove('is-active');
  navigation.classList.remove('is-active');
  document.body.classList.remove('scroll-lock');
  logo.classList.remove('is-active');
  container.insertBefore(logo, navigation);
  linkTelephone.classList.remove('is-active');
  container.append(linkTelephone);
  overlay.classList.remove('is-active');
  closeBurgerLinksRemove();
  document.removeEventListener('click', documentClickHendler);
  burgerClose.removeEventListener('click', burgerCloseClickHandler);
};

const linksClickHandler = () => {
  burgerRemoveActive();
};

// при клике на любую из ссылок бургер закрывается
const closeBurgerLinksAdd = () => {
  linksNav.forEach((link) => {
    link.addEventListener('click', linksClickHandler);
  });
};

function documentClickHendler(event) {
  if (!event.target.closest('.is-active')) {
    burgerRemoveActive();
  }
}

// удаляется слушатель событий при клике на ссылки бургера
function closeBurgerLinksRemove() {
  linksNav.forEach((link) => {
    link.removeEventListener('click', linksClickHandler);
  });
}

const burgerCloseClickHandler = () => {
  burgerRemoveActive();
};

// для контроля ширины экрана, чтобы при сужении экрана с
// активированным бургер-меню сбросился is-active и всё вернулось на место;
const windowChangeResizeHandler = () => {
  let width = document.body.clientWidth;

  if (width > 1199) {
    burgerRemoveActive();
  }
};

const burgerClickHandler = () => {
  burger.classList.toggle('is-active');
  navigation.classList.toggle('is-active');
  document.body.classList.toggle('scroll-lock');
  logo.classList.toggle('is-active');
  linkTelephone.classList.toggle('is-active');
  overlay.classList.toggle('is-active');
  navigation.append(logo);
  navigation.append(linkTelephone);

  if (navigation.closest('.is-active')) {
    document.addEventListener('click', documentClickHendler);
    burgerClose.addEventListener('click', burgerCloseClickHandler);
    window.addEventListener('resize', windowChangeResizeHandler);
    closeBurgerLinksAdd();
  }
};

const initBurger = () => {
  if (burger && logo && navigation && linkTelephone) {
    burger.addEventListener('click', burgerClickHandler);
  }
};

export {initBurger};
