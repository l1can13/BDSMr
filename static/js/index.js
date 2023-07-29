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

const headerButtons = document.querySelector(".buttons-list");

// Функция для отображения/скрытия button-list
function toggleMenu() {
    headerButtons.classList.toggle("show");
}

// Обработка события нажатия на логотип
document.querySelector(".logo").addEventListener("click", function (event) {
    event.preventDefault();
    toggleMenu();
});