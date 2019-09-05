$(document).ready(function () {

    setImageSlide('.slide_box', 1, true, 3000);
    setImageSlide('.slide_box_mobile', 1, true, 2000);









    function setImageSlide(selector, first, status, speed) {
        var numSlide = $(selector).find('.slide li').length;
        var slideNow = 0;
        var slidePrev = 0;
        var slideNext = 0;
        var slideFirst = first;
        var timerId = '';
        var isTimerOn = status;
        var timerSpeed = speed;

        $(selector).find('.slide li').each(function (i) {
            $(selector).find('.indicator').append('<li><a href="#">' + (i + 1) + '번 슬라이드</a></li>');
        });

        showSlide(slideFirst);

        $(selector).find('.indicator li a').on('click', function () {
            var index = $(selector).find('.indicator li').index($(this).parent());
            showSlide(index + 1);
        });

        $(selector).find('.prev').on('click', function () {
            showSlide(slidePrev);
        });

        $(selector).find('.next').on('click', function () {
            showSlide(slideNext);
        });


        var startX = 0;
        var delX = 0;
        var offsetX = 0;

        $('.slide li').on('touchstart', function (e) {
            e.preventDefault;
            $(this).css({
                'transition': 'none'
            });
            clearTimeout(timerId);
            startX = e.touches[0].clientX;
            offsetX = $(this).position().left;
            $(document).on('touchmove', function (e) {
                delX = e.touches[0].clientX - startX;

            });
            $(document).on('touchend', function () {
                $(document).off('touchmove touchend');
                if (delX < -50) {
                    showSlide(slideNext);
                } else if (delX > 50) {
                    showSlide(slidePrev);
                } else {
                    showSlide(slideNow);
                }
            });
        });









        function showSlide(n) {
            clearTimeout(timerId);
            if (slideNow === 0) {
                $(selector).find('.slide li').css({
                    'transition': 'none'
                });
            } else {
                $(selector).find('.slide li').css({
                    'transition': 'all 1s'
                });
            }
            $(selector).find('.slide li').css({
                'opacity': 0
            });
            $(selector).find('.slide li:eq(' + (n - 1) + ')').css({
                'opacity': 1
            });
            $(selector).find('.indicator li').removeClass('on');
            $(selector).find('.indicator li:eq(' + (n - 1) + ')').addClass('on');

            slideNow = n;
            slidePrev = (n - 1) < 1 ? numSlide : n - 1;
            slideNext = (n + 1) > numSlide ? 1 : n + 1;
            console.log(slidePrev + '/' + slideNow + '/' + slideNext);

            if (isTimerOn === true) {
                timerId = setTimeout(function () {
                    showSlide(slideNext);
                }, timerSpeed);
            }
        }
    }









    $('.hiddenmenu .left > ul > li > a').on('mouseenter focus', function () {
        $('.hiddenmenu .left > ul > li > ul').css({
            'display': 'none'
        });
        $(this).nextAll().css({
            'display': 'block'
        });
        $('.left > ul > li').removeClass('on');
        $(this).parent().addClass('on');
    });

    $('.hiddenmenu .left > ul').on('mouseleave focusout', function () {
        $('.hiddenmenu .left > ul > li > ul').css({
            'display': 'none'
        });

        $('.left > ul > li').removeClass('on');

    });









    $('.theme li a').on('mouseenter', function () {
        var index = $('.theme li').index($(this).parent());
        $('.theme_image li').css({
            'display': 'none'
        });
        $('.theme_image li:eq(' + index + ')').css({
            'display': 'block'
        });
    });

    $('.theme').on('mouseleave', function () {

        $('.theme_image li').css({
            'display': 'none'
        });

    });




    $('.niniz li a').on('mouseenter', function () {
        var index = $('.niniz li').index($(this).parent());
        $('.niniz_image li').css({
            'display': 'none'
        });
        $('.niniz_image li:eq(' + index + ')').css({
            'display': 'block'
        });
    });

    $('.niniz').on('mouseleave', function () {

        $('.niniz_image li').css({
            'display': 'none'
        });

    });

    $('.header .menu li a').on('mouseenter', function () {
        $('.header .menu li').removeClass('on');
        $(this).parent().addClass('on');
    });

    $('.header').on('mouseleave', function () {
        $('.header .menu li').removeClass('on');
    });




    $('.header .menu li a').on('mouseenter', function () {
        $('.hiddenmenu').removeClass('on');
    });
    $('.header .menu li:eq(0) a').on('mouseenter', function () {

        $('.hiddenmenu').addClass('on');


    });




    $('.hiddenmenu').on('mouseleave', function () {

        $('.hiddenmenu').removeClass('on');

    });

    $('.hiddenmenu .left > ul > li:eq(10)').on('mouseenter', function () {
        $('.hiddenmenu .left > ul > li:eq(10) > a').html('<img src="img/ninizimg_gnb_181002.png" alt="">');
    });
    $('.hiddenmenu .left > ul > li:eq(10)').on('mouseleave', function () {
        $('.hiddenmenu .left > ul > li:eq(10) > a').html('<img src="img/niniimg_gnb_181002.png" alt="">');
    });


    $('.gotop').on('click', function () {
        $('html, body').animate({
            'scrollTop': 0
        }, 500);
    });

    setScrollUI();
    $(window).on('scroll', function () {
        setScrollUI();
    });


    function setScrollUI() {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 300) {
            $('.gotop').addClass('on');
        } else {
            $('.gotop').removeClass('on');
        }

    }

    setGnb();

    function setGnb() {

        $('.header_mobile .nav li a').on('click', function () {
            var offsetLeft = $(this).position().left;
            var width = $(this).width();
            $('.header_mobile .nav li').removeClass('on');
            $(this).parent().addClass('on');
            $('.header_mobile .nav .bar').css({
                'left': offsetLeft + 'px',
                'width': width + 'px'
            });
        });
    }

    $('.header_mobile .nav li a:eq(1)').on('click', function () {
        $('.main .innermain > div').css({
            'display' : 'none'
        });
        $('.main .innermain .section3').css({
            'display' : 'block',
            'margin-top' : '120px'
        });
    })
$('.header_mobile .nav li a:eq(2)').on('click', function () {
        $('.main .innermain > div').css({
            'display' : 'none'
        });
        $('.main .innermain .section7').css({
            'display' : 'block',
            'margin-top' : '120px'
        });
    })

$('.header_mobile .nav li a:eq(0)').on('click', function () {
        $('.main .innermain > div').css({
            'display' : 'none'
        });
        $('.main .innermain > div').css({
            'display' : 'block'
        });
    })

var myScroll = new IScroll('#wrapper', {
    mouseWheel: true
});

    $('.header_mobile .topheader .leftmenu .menubar a').on('click', function() {
        $('.curtain').addClass('on');
    });
    $('.curtain .top1 .cancel a').on('click', function() {
        $('.curtain').removeClass('on');
    });






















});
