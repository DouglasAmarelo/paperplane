const paperplane = document.querySelector('.paperplane');

const animatePaperplane = () => {
  let clearAnimation;
  paperplane.classList.add('animate');

  clearTimeout(clearAnimation);

  clearAnimation = setTimeout(() => {
    console.log('add timeout');
    paperplane.classList.remove('animate');
  }, 3000);
};

const handleTouchStart = () => animatePaperplane();
const handleTouchMove = () => animatePaperplane();

document.addEventListener('touchmove', handleTouchMove, false);
