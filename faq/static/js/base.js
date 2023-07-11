// Получаем ссылки
const aboutLink = document.querySelector('.about_link');
const servicesLink = document.querySelector('.services_link');
const teamLink = document.querySelector('.team_link');

// Получаем элементы, к которым нужно выполнить скролл
const aboutContainer = document.getElementById('about');
const servicesContainer = document.getElementById('services');
const teamContainer = document.getElementById('team');

// Функция для плавного скролла к элементу
function scrollToElement(element) {
    element.scrollIntoView({
        behavior: 'smooth',
    });
}

// Обработчики событий для ссылок
aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
    if (window.location.pathname !== '/') {
        window.location.href = '/#about';
    } else {
        scrollToElement(aboutContainer);
    }
});

servicesLink.addEventListener('click', (event) => {
    event.preventDefault();
    if (window.location.pathname !== '/') {
        window.location.href = '/#services';
    } else {
        scrollToElement(servicesContainer);
    }
});

teamLink.addEventListener('click', (event) => {
    event.preventDefault();
    if (window.location.pathname !== '/') {
        window.location.href = '/#team';
    } else {
        scrollToElement(teamContainer);
    }
});