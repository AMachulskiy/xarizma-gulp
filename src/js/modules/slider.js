export default class Slider {
  slide = 0;
  offset = 0;

  constructor(settings) {
    const sliderWrap = document.getElementById(settings.id);
    (this.slider = sliderWrap.querySelector('.chatbot__slider')),
      (this.prev = document.querySelector('.prev')),
      (this.next = document.querySelector('.next')),
      (this.slideNum = document.querySelector('.slide-num')),
      (this.slideCount = document.querySelector('.slide-count')),
      (this.slidesCount = this.slider.querySelectorAll('.chatbot__slide')?.length);
    this.slideCount.innerText = this.slidesCount;
    this.slideWidth = settings.slideWidth;
    this.gap = settings.gap;

    this.prevSlideBtn();
    this.nextSlideBtn();
  }

  //Смена позиции слайдера (ширина слайда + отступ между слайдами)
  changeSlide(btn) {
    if (btn === 'next' && this.slide + 1 < this.slidesCount) {
      this.slide++;
      this.offset = (this.slideWidth + this.gap) * -this.slide;
    } else if (btn === 'prev' && this.slide > 0) {
      this.slide--;
      this.offset = (this.slideWidth + this.gap) * -this.slide;
    }
    this.slider.style.left = `${this.offset}px`;
    this.slideNum.innerText = `${this.slide + 1}`;
  }

  // Клик по кнопке перелистывания следующего слайда
  nextSlideBtn() {
    this.next.addEventListener('click', () => {
      this.changeSlide('next');
      if (this.slide + 1 === this.slidesCount) {
        this.next.classList.add('disable');
      }
      this.btnDisable(this.prev);
    });
  }
  // Клик по кнопке перелистывания предыдущего слайда
  prevSlideBtn() {
    this.prev.addEventListener('click', () => {
      this.changeSlide('prev');
      if (this.slide === 0) {
        this.prev.classList.add('disable');
      }
      this.btnDisable(this.next);
    });
  }
  // Разблокировка кнопок слайдера
  btnDisable(btn) {
    if (btn.matches('.disable')) {
      btn.classList.remove('disable');
    }
  }
}
