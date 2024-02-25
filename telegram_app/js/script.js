const sliderBlock = document.querySelector('.winners-list__persons');
const scrollLineYellow = document.querySelector('.slider__position');
const scrollLine = document.querySelector('.slider__long');
const personsCounter = document.querySelectorAll('.winners-list__item').length;

const scrollLineHeight = 336;
const scrollLineYellowHeight = (7/personsCounter)*scrollLineHeight;

scrollLineYellow.style.height = scrollLineYellowHeight + 'px';


sliderBlock.addEventListener('scroll', function() {
    const scrollProgress = (sliderBlock.scrollTop / (sliderBlock.scrollHeight - sliderBlock.clientHeight)) * 100;
    const newPosition = (scrollProgress / 100) * (sliderBlock.clientHeight - scrollLineYellow.clientHeight);
    scrollLineYellow.style.top = newPosition + 'px';
});
