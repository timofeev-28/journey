const burger = document.querySelector('[data-burger="burger"]');
const logo = document.querySelector('[data-burger="logo"]');
const navigation = document.querySelector('[data-burger="nav"]');
const linksNav = document.querySelectorAll('[data-burger="link-nav"]');
const linkTelephone = document.querySelector('[data-burger="link-tel"]');
const burgerClose = document.querySelector('[data-burger="burger-close"]');
const overlay = document.querySelector('[data-burger="overlay"]');

// закрытие бургера
const burgerRemoveActive = () => {
  burger.classList.remove('is-active');
  navigation.classList.remove('is-active');
  document.body.classList.remove('scroll-lock');
  logo.classList.remove('is-active');
  linkTelephone.classList.remove('is-active');
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

const burgerClickHandler = () => {
  burger.classList.toggle('is-active');
  navigation.classList.toggle('is-active');
  document.body.classList.toggle('scroll-lock');
  logo.classList.toggle('is-active');
  linkTelephone.classList.toggle('is-active');
  overlay.classList.toggle('is-active');


  if (navigation.closest('.is-active')) {
    document.addEventListener('click', documentClickHendler);
    burgerClose.addEventListener('click', burgerCloseClickHandler);
    closeBurgerLinksAdd();
  }
};

const initBurger = () => {
  if (burger && logo && navigation && linkTelephone) {
    burger.addEventListener('click', burgerClickHandler);
  }
};

export {initBurger};
