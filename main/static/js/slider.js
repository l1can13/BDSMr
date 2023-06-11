$(document).ready(function () {
    $('.slider').slick({
        centerPadding: '60px',
        slidesToShow: 4,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});