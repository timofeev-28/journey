import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initBurger} from './modules/init/init-burger';
import {initSliders} from './modules/init/init-swipers';
import {initVideo} from './modules/init/init-video';
import {initCreateStars} from './modules/init/init-stars';
import {changeWidth} from './modules/width-control/width-control';
import {letIsSnow} from './modules/init/init-snow';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    letIsSnow();
    initBurger();
    changeWidth();
    initSliders();
    initVideo();
    initCreateStars();
  });
});

