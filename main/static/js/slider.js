$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 4,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    const sliderItems = document.querySelectorAll('.slider__item div');
    const insideBoxH2s = document.querySelectorAll('.inside_box h2');

    sliderItems.forEach((sliderItem, index) => {
        const insideBoxH2 = insideBoxH2s[index];

        sliderItem.addEventListener('mouseenter', () => {
            sliderItem.style.background = 'rgba(0, 0, 0, 0.74)';
            insideBoxH2.style.opacity = '1';
        });

        sliderItem.addEventListener('mouseleave', () => {
            sliderItem.style.background = '';
            insideBoxH2.style.opacity = '';
        });
    });
});
