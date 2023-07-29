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