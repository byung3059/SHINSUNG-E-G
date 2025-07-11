$('main').fullpage({
    anchors: ['main_visual', 'main_clean', 'main_renew', 'main_sustain', 'main_merit', 'main_notice', 'footer'],
    responsiveWidth: 1200,
    recordHistory: false,
    scrollingSpeed: 850,
    easingcss3: 'cubic-bezier(.61,.01,.13,.95)',
    onLeave: function (name, idx) {
        $('#aside .lnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
        $('#scroll_nav .num li').eq(idx - 1).addClass('on').siblings().removeClass('on');
        $('#scroll_nav .sec_name li').eq(idx - 1).addClass('on').siblings().removeClass('on');
        $('body').removeClass('show');
        if (window.innerWidth > 1200) {
            if (idx === 2 || idx === 4 || idx === 6) {
                $('#header').addClass('on');
                $('#aside').addClass('on');
                $('#scroll_nav').addClass('on');
            } else {
                $('#header').removeClass('on');
                $('#aside').removeClass('on');
                $('#scroll_nav').removeClass('on');
            }
            if (idx === 7) {
                $('#header').hide();
            } else {
                $('#header').show();
            }
        }

    },

    afterLoad: function (name, idx) {
        $('body').addClass('show');
    }
});

$(function () {
    $('#header .gnb').on('mouseover', function () {
        $('#header').addClass('gnb_enter');
    });

    $('#header .gnb').on('mouseleave', function () {
        $('#header').removeClass('gnb_enter');
    });

    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,
        speed: 1500,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".main_visual_slide_nav .arrow_next",
            prevEl: ".main_visual_slide_nav .arrow_prev",
        },
        pagination: {
            el: ".main_visual_slide_nav .slide_page_line",
            type: "progressbar",
        },

        on: {
            // 슬라이드가 이동되기전에 발생
            slideChangeTransitionStart: function () {
                $('.main_visual_slide .swiper-slide-active video')[0].currentTime = 0;
                $('.main_visual_slide .swiper-slide-active video')[0].play();
            },
        },
    });

    const main_clean_slide = new Swiper('.main_clean_slide', {

        // loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,

        breakpoints: {
            600: {
                loop: true,
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 30,
            },

            1025: {
                loop: true,
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 30,
            },

            1501: {
                loop: false,

                slidesPerGroup: 2,
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row'
                },
                spaceBetween: 30,
            },


        },

        navigation: {
            nextEl: ".main_clean_slide_nav .arrow_next",
            prevEl: ".main_clean_slide_nav .arrow_prev",
        },
        pagination: {
            el: ".main_clean_slide_nav .slide_page_line",
            type: "progressbar",
        },
    });
    const main_renew_slide = new Swiper('.main_renew_slide', {

        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,

        breakpoints: {
            600: {
                loop: true,
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 30,
            },

            1025: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 30,
            },
        },

        navigation: {
            nextEl: ".main_renew_slide_nav .arrow_next",
            prevEl: ".main_renew_slide_nav .arrow_prev",
        },
        pagination: {
            el: ".main_renew_slide_nav .slide_page_line",
            type: "progressbar",
        },
    });
    const main_merit_slide = new Swiper('.main_merit_slide', {

        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,

        breakpoints: {
            400: {
                loop: true,
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 16,
            },
            768: {
                loop: true,
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 30,
            },

            1025: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 30,
            },
        },

        navigation: {
            nextEl: ".main_merit_slide_nav .arrow_next",
            prevEl: ".main_merit_slide_nav .arrow_prev",
        },
        pagination: {
            el: ".main_merit_slide_nav .slide_page_line",
            type: "progressbar",
        },
    });

    $('.footer .right .link_box button').on('click', function () {
        $(this).toggleClass('on');
        $('.footer .right .link_box>ul').toggleClass('on');

    });



})

$(function () {

    if (window.innerWidth < 1200) {
        $(window).on('scroll', function () {
            let sct = $(window).scrollTop();
            // console.log(sct);
            if (sct > 1) {
                $('#header').addClass('on')
            } else {
                $('#header').removeClass('on')
            }
        });
    }
})