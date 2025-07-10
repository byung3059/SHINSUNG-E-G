$('main').fullpage({
    anchors: ['main_visual', 'main_clean', 'main_renew', 'main_sustain', 'main_merit', 'main_notice', 'footer'],
    responsiveWidth: 769,
    recordHistory: false,
    scrollingSpeed: 850,
    easingcss3: 'cubic-bezier(.61,.01,.13,.95)',
    onLeave: function (name, idx) {
        $('#aside .lnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
        $('#scroll_nav .num li').eq(idx - 1).addClass('on').siblings().removeClass('on');
        $('#scroll_nav .sec_name li').eq(idx - 1).addClass('on').siblings().removeClass('on');
        $('body').removeClass('show');
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
        direction: "vertical",
        autoHeight: true,
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
            1025: {

            },

            1201: {
                loop: true,
                slidesPerView: 2,
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

    $('.footer .right .link_box button').on('click', function () {
        $(this).toggleClass('on');
        $('.footer .right .link_box>ul').toggleClass('on');

    });



})