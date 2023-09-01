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

$(document).ready(function () {
    function updateGrid() {
        var mastersContainer = $(".masters_first");
        var masters = mastersContainer.find(".master");

        var screenWidth = $(window).width();
        var maxColumns = Math.floor(screenWidth / 500); // Assuming 300px width for each item
        var maxItemsPerRow = Math.min(maxColumns, 3); // Максимум 3 элемента в строке

        // Группировка мастеров по группам с максимум 3 элементами
        var masterGroups = [];
        for (var i = 0; i < masters.length; i += maxItemsPerRow) {
            var group = masters.slice(i, i + maxItemsPerRow);
            masterGroups.push(group);
        }

        // Удалить все существующие сетки
        mastersContainer.empty();

        // Создать сетку для каждой группы мастеров
        for (var i = 0; i < masterGroups.length; i++) {
            var group = masterGroups[i];
            var groupContainer = $("<div class='group'></div>");

            // Если количество элементов в группе меньше 3, то добавить класс centered
            if (group.length < maxItemsPerRow) {
                groupContainer.addClass("centered");
            }

            groupContainer.append(group);
            groupContainer.appendTo(mastersContainer);
        }
    }

    // Исключите функцию updateGrid() из события resize, чтобы избежать многократных вызовов
    var resizeTimeout;
    $(window).resize(function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateGrid, 1);
    });

    // Инициализируйте grid при загрузке страницы
    updateGrid();
});