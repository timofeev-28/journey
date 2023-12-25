const videoContainer = document.querySelector('[data-video="video"]');
const playButton = document.querySelector('[data-video] button');
const placeholder = document.querySelector('[data-video] img');

const videoId = '7KvMyYseoc4';
// const videoId = '9TZXsZItgdw';

function initVideo() {
  const playbattonClickHandler = () => {
    const iframe = createIframe(videoId);
    videoContainer.appendChild(iframe);
    playButton.remove();
    placeholder.remove();
  };

  if (playButton !== null && videoContainer !== null && placeholder !== null) {
    playButton.addEventListener('click', playbattonClickHandler);
  }
}

function createIframe(id) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allow', 'autoplay; encrypted-media; allowfullscreen');
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', '100%');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('src', `https://www.youtube.com/embed/${id}/?rel=0&showinfo=0&autoplay=1&amp;controls=0`);

  return iframe;
}

export {initVideo};
