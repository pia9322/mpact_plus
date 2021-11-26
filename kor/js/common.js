$(document).ready(function(){
    console.log('common_js_start')
    // common_js_start

    var Mainswiper = new Swiper('.main_section_01', {
        effect: "fade",
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        loopAdditionalSlides : 1,
        
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // on: {
        //     init: function () {
        //         $('.swiper-progress-bar').removeClass('animate');
        //         $('.swiper-progress-bar').removeClass('active');
        //         $('.swiper-progress-bar').eq(0).addClass('animate');
        //         $('.swiper-progress-bar').eq(0).addClass('active');
        //     },
        //     slideChangeTransitionStart: function () {
        //         $('.swiper-progress-bar').removeClass('animate');
        //         $('.swiper-progress-bar').removeClass('active');
        //         $('.swiper-progress-bar').eq(0).addClass('active');
        //     },
        //     slideChangeTransitionEnd: function () {
        //         $('.swiper-progress-bar').eq(0).addClass('animate');
        //     },
        // }
    });












    // common_js_end
    console.log('common_js_end')
});

