'use strict';

let pageSlider = new Swiper('.swiper', {
    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',

    direction: 'vertical',

    slidesPerView: 1,

    navigation: {
        prevEl: ".navigation__prev-btn",
        nextEl: ".navigation__next-btn",
    },

    keyboard: {
        enabled: true,
        onlyInViewPort: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    scrollbar: {
        el: ".navigation__scrollbar",
        draggable: true,
    },

    speed: 800, 

    pagination: {
        el: ".navigation__pagination",
        type: "fraction",
        renderFraction: function(currentClass, totalClass){
            return `<span class="${currentClass}"></span><span class="${totalClass}"></span>`;
        },
        
        formatFractionCurrent: zeroBefore,
        formatFractionTotal: zeroBefore,       
    },

    allowTouchMove: false,
});

const fakeScroll = document.querySelector('.fakeScroll').fakeScroll();

// FUNCTION

// Adding zero before fractions is less than ten
function zeroBefore(num){
    return (num < 10) ? '0' + num : num;
}