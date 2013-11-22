$(document).ready(function() {


/**
*	Init
*/	
	'use strict';
	$('#section-home').css('height', $(window).height());
  $('#section-home .head-section').css('margin-top', ($(window).height() / 2) - ($('.head-section').height() / 2));
  $("#section-home").videoBG({
  	mp4:'/assets/claire-loop-1920x1080.mp4',
  	poster:'/assets/2.jpg',
  	scale:true,
  	zIndex:0
  });
	$(window).resize(function () {
		$('#section-home').css('height', $(window).height());
	});
	$('.navbar-nav').scrollspy();
  
  $(window).scroll(function () {

      if ($(window).scrollTop() > $('#navigation').height() ) {
          $('#navigation').addClass('sticky-nav');
      } else {
          $('#navigation').removeClass('sticky-nav');
      }

  });
  
/** 
* FlexSlider
*/
	$('#main-slider').flexslider({
		directionNav: true,
		controlNav: false,
		prevText: "",
		nextText: "", 
	});
	
	$('#main-slider .slides li').css('height', $(window).height());

    $('#main-slider .slides li').each(function () {
        var background_src = $('.slider-bg').attr('src');
        $(this).children('.slider-bg').remove();
        $(this).css('background', 'url("' + background_src + '")');
    });

	
	$('#main-slider .slides li').css('padding-top', ($(window).height() / 2) - ($('.slide-content').height() / 2));

	$('.list-faqs').cycle({
		slides: 'li',
		pager: ".faqs-bullets",
		timeout: 0,
		autoHeight: 0,
		centerHorz: true
	});

	// size testimonial 
	$('.list-faqs').on( 'cycle-update-view', function(e,o,sh,cs) {
		var $this = $(this);

        $this.animate({
          height: $(cs).height()
        }, 500);

        $(window).resize(function() {
          $this.stop().animate({
            height: $(cs).height()
          }, 500);
        });
      });
  
	
/**
*	Resize events
*/
	
	$(window).resize(function () {
		
    	$('#main-slider .slides li').css('padding-top', ($(window).height() / 2) - ($('.slide-content').height() / 2));
		$('.flex-control-nav').css('top',( $(window).height() - 100));
		$('.flex-direction-nav a').css('top',( $(window).height()/2));
		
		$(".portfolio-item-block .details").css('width', $("body").width());
		$(".intro-block").css("height", $(window).height());
		$(".fullwidthbanner-container").css("height", $(window).height());
		
	});


});