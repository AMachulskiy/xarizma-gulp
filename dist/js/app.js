/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider.js */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mobileMenu.js */ \"./src/js/modules/mobileMenu.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./src/js/modules/accordion.js\");\n/* harmony import */ var _modules_chatbotSlider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/chatbotSlider.js */ \"./src/js/modules/chatbotSlider.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst accordion = document.querySelector('.about__questions');\r\nconst accordionItem = document.querySelectorAll('.about__questions-item')\r\n\r\nconst openAccordion = (event) => {\r\n  const target = event.target\r\n  const clickedSelectors = [\r\n    '.about__questions-title',\r\n    '.about__questions-title-h',\r\n    '.about__questions-title-btn',\r\n    '.about__questions-title-btn i',\r\n  ]\r\n  if (matches(clickedSelectors, target)) {\r\n      const openItems = document.querySelectorAll('.about__questions-item.about__questions-item_open')\r\n      openItems.forEach((item) => {\r\n        item.classList.remove('about__questions-item_open')\r\n      })\r\n      setOpenClass({\r\n        target, // элемент по которому кликнули\r\n        titleClassSelector: '.about__questions-title', // селектор элемента заголовка, родителю которого нужно повешать класс openClass\r\n        openClass: 'about__questions-item_open' // класс, который нужно повешать для открытия\r\n      })\r\n  }\r\n}\r\n\r\n// Функция проверки массива классов на совпадение с классом в target. Вернет true, если совпадение найдено, иначе false\r\nfunction matches(arraySelectors, target) {\r\n  return arraySelectors.some((selector) => {\r\n    return target.matches(selector)\r\n  })\r\n}\r\n\r\n// Функция установки класса открытия, с рекурсивной проверкой родительских блоков\r\nfunction setOpenClass({ target, titleClassSelector, openClass }) {\r\n  // Если это родительский блок со списком вопросов или блок обертка вопроса с ответом, то не выполняем функцию и выходим из неё\r\n  const excludedParentsClasses = ['.about__questions', '.about__questions-item']\r\n  if (matches(excludedParentsClasses, target)) {\r\n    return\r\n  }\r\n  // Если это заголовок с классом .about__questions-title, то вешаем на него класс модификатор .about__questions-title_open\r\n  if (target.matches(titleClassSelector)) {\r\n    target.parentElement.classList.add(openClass)\r\n    return\r\n  } else {\r\n    // Если у target нет класса .about__questions-title, то вызываем функцию рекурсивно, поднимаясь выше по родителям, пока не найдем нужный родительский класс с .about__questions-title и на него вешаем класс с модификатором .about__questions-title_open 👇\r\n    setOpenClass({\r\n      target: target.parentElement, \r\n      titleClassSelector, \r\n      openClass\r\n    })\r\n  }\r\n}\r\n\r\naccordion.addEventListener('click', openAccordion)\n\n//# sourceURL=webpack://gulp/./src/js/modules/accordion.js?");

/***/ }),

/***/ "./src/js/modules/chatbotSlider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/chatbotSlider.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ \"./src/js/modules/slider.js\");\n\r\n\r\nconst chatbotSliderSettings = {\r\n  id: 'chatbot-slider',\r\n  slideWidth: 350,\r\n  gap: 12,\r\n};\r\nnew _slider_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](chatbotSliderSettings);\r\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/chatbotSlider.js?");

/***/ }),

/***/ "./src/js/modules/mobileMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/mobileMenu.js ***!
  \**************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst mobileMenuBtn = document.getElementById('mobile-menu-btn');\r\nconst mobileMenu = document.getElementById('mobile-menu');\r\nconst mobileMenuCloseBtn = document.querySelector('.main__mobile-menu-head-btn');\r\n\r\nconst openMenu = (event) => {\r\n  mobileMenu.classList.toggle('main__mobile-menu-active');\r\n};\r\n\r\nmobileMenuBtn.addEventListener('click', openMenu);\r\nmobileMenuCloseBtn.addEventListener('click', openMenu);\n\n//# sourceURL=webpack://gulp/./src/js/modules/mobileMenu.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slider; }\n/* harmony export */ });\nclass Slider {\r\n  slide = 0;\r\n  offset = 0;\r\n\r\n  constructor(settings) {\r\n    const sliderWrap = document.getElementById(settings.id);\r\n    (this.slider = sliderWrap.querySelector('.chatbot__slider')),\r\n      (this.prev = document.querySelector('.prev')),\r\n      (this.next = document.querySelector('.next')),\r\n      (this.slideNum = document.querySelector('.slide-num')),\r\n      (this.slideCount = document.querySelector('.slide-count')),\r\n      (this.slidesCount = this.slider.querySelectorAll('.chatbot__slide')?.length);\r\n    this.slideCount.innerText = this.slidesCount;\r\n    this.slideWidth = settings.slideWidth;\r\n    this.gap = settings.gap;\r\n\r\n    this.prevSlideBtn();\r\n    this.nextSlideBtn();\r\n  }\r\n\r\n  //Смена позиции слайдера (ширина слайда + отступ между слайдами)\r\n  changeSlide(btn) {\r\n    if (btn === 'next' && this.slide + 1 < this.slidesCount) {\r\n      this.slide++;\r\n      this.offset = (this.slideWidth + this.gap) * -this.slide;\r\n    } else if (btn === 'prev' && this.slide > 0) {\r\n      this.slide--;\r\n      this.offset = (this.slideWidth + this.gap) * -this.slide;\r\n    }\r\n    this.slider.style.left = `${this.offset}px`;\r\n    this.slideNum.innerText = `${this.slide + 1}`;\r\n  }\r\n\r\n  // Клик по кнопке перелистывания следующего слайда\r\n  nextSlideBtn() {\r\n    this.next.addEventListener('click', () => {\r\n      this.changeSlide('next');\r\n      if (this.slide + 1 === this.slidesCount) {\r\n        this.next.classList.add('disable');\r\n      }\r\n      this.btnDisable(this.prev);\r\n    });\r\n  }\r\n  // Клик по кнопке перелистывания предыдущего слайда\r\n  prevSlideBtn() {\r\n    this.prev.addEventListener('click', () => {\r\n      this.changeSlide('prev');\r\n      if (this.slide === 0) {\r\n        this.prev.classList.add('disable');\r\n      }\r\n      this.btnDisable(this.next);\r\n    });\r\n  }\r\n  // Разблокировка кнопок слайдера\r\n  btnDisable(btn) {\r\n    if (btn.matches('.disable')) {\r\n      btn.classList.remove('disable');\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;