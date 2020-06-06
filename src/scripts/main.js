/**
* toogleMenu
*
* Blendet das Menü aus oder ein.
*
*/

function toogleMenu() {
  const interactionElementClass = '.js-navigation-interaction-element';
  const interactionElementAdditionalClass = 'hamburger-button--is-open';
  const menuElementClass = 'main-header__menu-bar-nav--is-open';

  const interactionElement = document.querySelector(interactionElementClass);
  const interactionTarget = interactionElement.dataset.jsInteractionTarget;
  const menuElement = document.querySelector(interactionTarget);

  interactionElement.addEventListener('click', () => {
    interactionElement.classList.toggle(interactionElementAdditionalClass);
    menuElement.classList.toggle(menuElementClass);
  });
}


/**
* switchSlides
*
* Blättert in der Slideshow ein Bild vor oder zurück
*
*/

class Slideshow {
  constructor(slideShowContainer) {
    this.slides = slideShowContainer.querySelectorAll('[data-js-slide]');
    this.interactionElementNext = slideShowContainer.querySelector('[data-js-nav-next-slide]');
    this.interactionElementPrevious = slideShowContainer.querySelector('[data-js-nav-previous-slide]');
    this.slideClassVisible = 'slide-show__slide--visible';
    this.slideShowElement = slideShowContainer;
    this.configJSON = this.slideShowElement.getAttribute('data-js-slide-show');
    this.dotActiveClass = 'dot-navigation__dot--active';
    this.wrapAround = false;
    this.activeSlide = 0;
    this.dots = [];

    const config = JSON.parse(this.configJSON);
    this.wrapAround = config.wrapAround;
  }

  init() {
    this.createDots();
    this.showSlide(this.activeSlide);
  }

  createDots() {
    const dotNavigationElement = document.createElement('ol');
    dotNavigationElement.classList.add('dot-navigation');
    this.slideShowElement.appendChild(dotNavigationElement);
    this.slides.forEach((slide, index) => {
      const dotElement = document.createElement('li');
      dotElement.classList.add('dot-navigation__dot');
      dotElement.setAttribute('data-slide-index', index);
      dotElement.addEventListener('click', (e) => { this.onClickDot(e); });
      dotNavigationElement.appendChild(dotElement);
      this.dots.push(dotElement);
      slide.addEventListener('click', (e) => { Slideshow.toggleFullScreen(e); });
    });
    this.interactionElementNext.addEventListener('click', () => { this.changeSlide('next'); });
    this.interactionElementPrevious.addEventListener('click', () => { this.changeSlide('previous'); });
  }

  showSlide(activeSlideIndex) {
    this.slides[activeSlideIndex].classList.add(this.slideClassVisible);
    this.dots[activeSlideIndex].classList.add(this.dotActiveClass);
  }

  hideSlide(activeSlideIndex) {
    this.slides[activeSlideIndex].classList.remove(this.slideClassVisible);
    this.dots[activeSlideIndex].classList.remove(this.dotActiveClass);
  }

  changeSlide(direction) {
    this.hideSlide(this.activeSlide);

    if (direction === 'next') {
      if (this.activeSlide + 1 < this.slides.length) {
        this.activeSlide += 1;
      } else if (this.wrapAround === true) {
        this.activeSlide = 0;
      }
    } else if (this.activeSlide - 1 < 0) {
      if (this.wrapAround === true) {
        this.activeSlide = this.slides.length - 1;
      }
    } else {
      this.activeSlide -= 1;
    }
    this.showSlide(this.activeSlide);
  }

  static toggleFullScreen(e) {
    const target = e.currentTarget;
    if (!document.fullscreenElement) {
      target.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  onClickDot(e) {
    const target = e.currentTarget;
    const index = parseInt(target.getAttribute('data-slide-index'), 10);

    if (this.activeSlide === index) {
      return;
    }

    this.hideSlide(this.activeSlide);
    this.showSlide(index);
    this.activeSlide = index;
  }
}


const slideshows = document.querySelectorAll('[data-js-slide-show]');
slideshows.forEach((slideshow) => {
  const s = new Slideshow(slideshow);
  s.init();
});

toogleMenu();
