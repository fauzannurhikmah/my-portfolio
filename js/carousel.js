$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 40,
        responsiveClass: true,
        lazyLoad: true,
        navText: ["<img src='../img/left.png' width='30'></img>", "<img src='../img/right.png' width='30'></img>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
});