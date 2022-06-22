const accordion = document.querySelector('.about__questions');
const accordionItem = document.querySelectorAll('.about__questions-item')

const openAccordion = (event) => {
  const target = event.target
  const clickedSelectors = [
    '.about__questions-title',
    '.about__questions-title-h',
    '.about__questions-title-btn',
    '.about__questions-title-btn i',
  ]
  if (matches(clickedSelectors, target)) {
      const openItems = document.querySelectorAll('.about__questions-item.about__questions-item_open')
      openItems.forEach((item) => {
        item.classList.remove('about__questions-item_open')
      })
      setOpenClass({
        target, // элемент по которому кликнули
        titleClassSelector: '.about__questions-title', // селектор элемента заголовка, родителю которого нужно повешать класс openClass
        openClass: 'about__questions-item_open' // класс, который нужно повешать для открытия
      })
  }
}

// Функция проверки массива классов на совпадение с классом в target. Вернет true, если совпадение найдено, иначе false
function matches(arraySelectors, target) {
  return arraySelectors.some((selector) => {
    return target.matches(selector)
  })
}

// Функция установки класса открытия, с рекурсивной проверкой родительских блоков
function setOpenClass({ target, titleClassSelector, openClass }) {
  // Если это родительский блок со списком вопросов или блок обертка вопроса с ответом, то не выполняем функцию и выходим из неё
  const excludedParentsClasses = ['.about__questions', '.about__questions-item']
  if (matches(excludedParentsClasses, target)) {
    return
  }
  // Если это заголовок с классом .about__questions-title, то вешаем на него класс модификатор .about__questions-title_open
  if (target.matches(titleClassSelector)) {
    target.parentElement.classList.add(openClass)
    return
  } else {
    // Если у target нет класса .about__questions-title, то вызываем функцию рекурсивно, поднимаясь выше по родителям, пока не найдем нужный родительский класс с .about__questions-title и на него вешаем класс с модификатором .about__questions-title_open 👇
    setOpenClass({
      target: target.parentElement, 
      titleClassSelector, 
      openClass
    })
  }
}

accordion.addEventListener('click', openAccordion)