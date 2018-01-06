jQuery(document).ready(function($) {
    // Revlution slider
    jQuery('.banner').revolution({
        delay:9000,
        startwidth:960,
        startheight:700,
        startWithSlide:0,

        fullScreenAlignForce:"on",
        autoHeight:"on",
        minHeight:"off",

        shuffle:"off",

        onHoverStop:"on",

        thumbWidth:100,
        thumbHeight:50,
        thumbAmount:3,

        hideThumbsOnMobile:"off",
        hideNavDelayOnMobile:1500,
        hideBulletsOnMobile:"off",
        hideArrowsOnMobile:"off",
        hideThumbsUnderResoluition:0,

        hideThumbs:0,
        hideTimerBar:"off",

        keyboardNavigation:"on",

        navigationType:"off",
        navigationArrows:"solo",
        navigationStyle:"round",

        navigationHAlign:"center",
        navigationVAlign:"bottom",
        navigationHOffset:30,
        navigationVOffset:30,

        soloArrowLeftHalign:"left",
        soloArrowLeftValign:"center",
        soloArrowLeftHOffset:20,
        soloArrowLeftVOffset:0,

        soloArrowRightHalign:"right",
        soloArrowRightValign:"center",
        soloArrowRightHOffset:20,
        soloArrowRightVOffset:0,


        touchenabled:"on",
        swipe_velocity:"0.7",
        swipe_max_touches:"1",
        swipe_min_touches:"1",
        drag_block_vertical:"false",

        parallax:"mouse",
        parallaxBgFreeze:"on",
        parallaxLevels:[10,7,4,3,2,5,4,3,2,1],
        parallaxDisableOnMobile:"off",

        stopAtSlide:-1,
        stopAfterLoops:-1,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        hideSliderAtLimit:0,

        dottedOverlay:"none",

        spinned:"spinner4",

        fullWidth:"off",
        forceFullWidth:"off",
        fullScreen:"off",
        fullScreenOffsetContainer:"#topheader-to-offset",
        fullScreenOffset:"0px",

        panZoomDisableOnMobile:"off",

        simplifyAll:"off",

        shadow:0

    });

    /* smooth scrolling for scroll to top */
	$('#to-top').bind('click', function()
	{
		$('body,html').animate({
			scrollTop: 0}, 
			2500);
	});

	//Easing Scroll replace Anchor name in URL and Offset Position
	$(function(){
		$('a[href*=#]:not([href=#])').click(function()
		{
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top -420
					}, 3500, 'easeOutBounce');
					return false;
				}
			}
		});
	});
});

 
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