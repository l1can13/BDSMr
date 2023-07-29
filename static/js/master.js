// Найти элементы на странице
const bookSessionButton = document.getElementById('bookSessionButton');
const modal = document.getElementById('myModal');
const closeModal = document.getElementById('closeModal');

// Функция для открытия модального окна
function openModal() {
    modal.style.display = 'block';
    modal.classList.add('fade-in');
}

// Функция для закрытия модального окна
function closeModalFunc() {
    modal.classList.remove('fade-in');
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('fade-out');
    }, 300); // Задержка для завершения анимации
}

// Обработчик события для открытия модального окна при нажатии на кнопку
bookSessionButton.addEventListener('click', openModal);

// Обработчик события для закрытия модального окна при нажатии на крестик
closeModal.addEventListener('click', closeModalFunc);

// Обработчик события для закрытия модального окна при клике вне его области
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalFunc();
    }
});