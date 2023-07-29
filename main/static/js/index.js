const bookSessionButton = document.querySelector('.book_session_button');

// Обработчики событий для ссылок
bookSessionButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (window.location.pathname !== '/') {
        window.location.href = '/#about';
    } else {
        scrollToElement(aboutContainer);
    }
});

// Получаем ссылку на кнопку и список
const menuToggle = document.querySelector('.menu-toggle');
const buttonsList = document.querySelector('.buttons-list');

// Обработчик события клика на кнопку
let clicked = false;
menuToggle.addEventListener('click', () => {
  // При клике добавляем или удаляем класс "show" у списка
  buttonsList.classList.toggle('show');

  clicked = !clicked;
  if (clicked) {
      menuToggle.style.transform = 'rotate(180deg)';
  }
  else {
      menuToggle.style.transform = 'rotate(0deg)';
  }
});