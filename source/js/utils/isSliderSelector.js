// eslint-disable-next-line consistent-return
const isSliderSelector = (sliderSelector) => {
  if (!document.querySelector(sliderSelector)) {
    return null;
  }
};

export {isSliderSelector};
