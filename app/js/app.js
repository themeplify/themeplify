(function($) {

    'use strict';

    /* smooth scrolling for scroll to top */
    $('#to-top').bind('click', function() {
        $('body,html').animate({
                scrollTop: 0
            },
            1500);
    });

    // anchor smooth scroll
    $(document).on('click', 'a[href^="#"][class="nav-link"]', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top + 2
        }, 500);
    });

    // header position on scroll
    var lastScroll = 0;
    var headerHeight = $('nav.navbar').outerHeight();

    header_pos();

    $(window).scroll(function() {
        // header pos
        header_pos();

        // scroll to top
        if ($(this).scrollTop() > 1000) {
            $('#to-top').fadeIn();
        } else {
            $('#to-top').fadeOut();
        }
    });

    function header_pos() {
        var st = $(window).scrollTop();
        if (st > lastScroll) {
            $('nav.navbar').addClass('hide-nav');
            lastScroll = st;
            if ($('header').hasClass('show-white-nav')) {
                $('header').removeClass('show-white-nav');
            }
        } else {
            $('nav.navbar').removeClass('hide-nav');
            lastScroll = st;
            if ($('nav.navbar').hasClass('bg-transparent')) {
                $('header').addClass('show-white-nav');
            } else {
                $('header').removeClass('show-white-nav');
            }
        }
        if (st == 0) {
            $('header').removeClass('show-white-nav');
        }

    }


})(jQuery);

// jQuery(document).ready(function($){
//     $(".dropdown").hover(            
//         function() {
//             $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
//             $(this).toggleClass('open');        
//         },
//         function() {
//             $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
//             $(this).toggleClass('open');       
//         }
//     );
// });

$(document).ready(function() {
    // Initializing 
    // ISOTOPE
    $grid = $('.list').isotope({
        // options
        itemSelector: '.list__item',
        layoutMode: 'masonry',
        masonry: {
            gutter: 0
        }
    });
    // filter items on button click
    $('.js-filter').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $('.js-filter button').removeClass('is-active');
        $(this).addClass('is-active');
    });

    // image popup
    $('.image-link').magnificPopup({ type: 'image' });
    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.team .owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 500,
            autoplay: 4000,
            items: 1,
            dots: false,
            navText: ['<span class="lnr lnr-arrow-left"></span>', '<span class="lnr lnr-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
        // owl carousel
        // $('.team-slider').owlCarousel({
        //     loop: true,
        //     margin: 10,
        //     nav: true,
        //     items: 2,
        //     responsive: {
        //         0: {
        //             items: 1
        //         },
        //         600: {
        //             items: 3
        //         },
        //         1000: {
        //             items: 5
        //         }
        //     }
        // });

        // testimonial slider
        $('.tesimonial .owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 2,
            navText: ['<span class="lnr lnr-arrow-left"></span>', '<span class="lnr lnr-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                }
            }
        });

    // counter
    var a = 0;
    $(window).scroll(function() {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-number').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }
    });

});


// loader
$(window).on('load', function(){
    $(".loader-holder").fadeOut(300);
    $('body').css('overflow-y', 'auto');
});