  const title = document.querySelector('.section-3 h1');

  function scrollAppear() {
    const titlePosition = title.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (titlePosition < screenPosition) {
      title.classList.add('showup');
    }
  }

  window.addEventListener('scroll', scrollAppear);

