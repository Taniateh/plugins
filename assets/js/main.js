$(document).ready(function(){
	
	$('.image-slider').slick({
		//'autoplay': true, 
		'autoplaySpeed': 4000, 
		'slidesToShow': 3,
		'centerMode': true
	});
jQuery.datetimepicker.setLocale('de');

jQuery('#datetimepicker1').datetimepicker({
 i18n:{
  de:{
   months:[
    'Januar','Februar','März','April',
    'Mai','Juni','Juli','August',
    'September','Oktober','November','Dezember',
   ],
   dayOfWeek:[
    "So.", "Mo", "Di", "Mi", 
    "Do", "Fr", "Sa.",
   ]
  }
 },
 timepicker:false,
 format:'d.m.Y'
});
	$(document).on('click', '.tabs-navigation li a', function(e){
		
		e.preventDefault();
		var tab_id = $(this).parent().attr('data-tab');
		$('.active[data-tab]').removeClass('active');
		$('[data-tab="' + tab_id + '"]').addClass('active');
		
	});
	
	$(document).on('click', '[data-toggle="modal"]', function(e){
		
		e.preventDefault();
		var el_selector = $(this).attr('data-target');
		$(el_selector).fadeIn();
		
	});
	
	$(document).on('click', '.modal .close-modal', function(e){
		
		e.preventDefault();
		$(this).closest('.modal').fadeOut();
		
	});
	
	fixed_head_pos = $('.head-row-second').offset().top;
	fixed_head_height = $('.head-row-second').outerHeight();
	
});

var fixed_head_pos, fixed_head_height;

$(document).scroll(function(){
	
	var scroll_top = $(window).scrollTop();
	if (scroll_top >= fixed_head_pos){
		$('.head-row-second').addClass('fixed');
		$('body').css('padding-top', fixed_head_height + 'px');
	} else {
		$('.head-row-second').removeClass('fixed');
		$('body').css('padding-top', '0');
	}
	
});

$(window).load(function(){
	
	$('.masonry-content').masonry({
		'itemSelector': '.masonry', 
		'gutter': '.masonry-gutter',
		'columnWidth': '.masonry-sizer',
		'percentPosition': true
	});
	
});