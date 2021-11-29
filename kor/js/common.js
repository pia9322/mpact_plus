$(document).ready(function(){
    console.log('common_js_start')
    // common_js_start

    var Mainswiper = new Swiper('.main_section_01', {
        effect: "fade",
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        loopAdditionalSlides : 1,
        
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        
        touchMoveStopPropagation : true,
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


    
    var mainProduct_01 = new Swiper('.main_product_slide_01', {
        slidesPerView: 4,
        // centeredSlides: true,
        loop: true,
        loopAdditionalSlides : 1,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        
        touchMoveStopPropagation : true,
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });




    



    // header_default 
    let header_right = document.querySelector('.header_right');
    let header_ham = document.querySelector('.header_ham');

    header_ham.addEventListener('click', function() {
        $(this).toggleClass('active');
    })


    














    // common_js_end
    console.log('common_js_end')
});

