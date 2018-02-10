(function($) {

    'use strict';

    /* smooth scrolling for scroll to top */
    $('#to-top').bind('click', function() {
        $('body,html').animate({
                scrollTop: 0
            },
            2500);
    });

    //Easing Scroll replace Anchor name in URL and Offset Position 
    // $('a[href*=#]:not([href=#])').click(function() {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             $('html,body').animate({
    //                 scrollTop: target.offset().top - 420
    //             }, 3500, 'easeOutBounce');
    //             return false;
    //         }
    //     }
    // });

    // header position on scroll
    var lastScroll = 0;
    var headerHeight = $('nav.navbar').outerHeight();

    header_pos();

    $(window).scroll(function() {
        header_pos();
    });

    function header_pos() {
        var st = $(window).scrollTop();
        if (st > lastScroll) {
            $('nav.navbar').addClass('hide-nav');
            lastScroll = st;
        } else {
            $('nav.navbar').removeClass('hide-nav');
            lastScroll = st;
        }
        // transparent case
        if ($('nav.navbar').hasClass('bg-transparent') && st > 0) {
            $('nav.navbar').addClass('transparent-bkg');
        } else {
            $('nav.navbar').removeClass('transparent-bkg');
        }
    }


    // if (st > lastScroll) {
    //     $('.fixed-top').removeClass('header-appear');
    //     $('.dropdown.on').removeClass('on').removeClass('open').find('.dropdown-menu').fadeOut(100);
    // } else
    //     $('.fixed-top').addClass('header-appear');
    // lastScroll = st;
    // if (lastScroll <= headerHeight)
    //     $('header').removeClass('header-appear');


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

$(document).ready(function(){
  $grid = $('.list').isotope({
    // options
    itemSelector: '.list__item',
    layoutMode: 'masonry',
    masonry: {
      gutter: 0
    }
  });
  // filter items on button click
  $('.js-filter').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $( '.js-filter button' ).removeClass( 'is-active' );
    $( this ).addClass( 'is-active' );
  });
});