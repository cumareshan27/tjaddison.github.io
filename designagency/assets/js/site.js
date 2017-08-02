$(function() {
	"use strict";
var stickOnScroll;
$('#header').addClass('intelligent');//Choose Here Class Name (normal or fixed or intelligent);
	$('.tab > div').hide();
	$('.tab > div:first').show();
	$('.tabing-block .img').on('click', function() {
		var dataimg = $(this).find('img').attr('data-img');

		$('.team .about-us-info .img img').attr('src', dataimg);
		$('.tabing-block .active').removeClass('active');
		$(this).addClass('active');
		$('.tab > div').hide();
		var list = $(this).attr('data-filter');

		$('#' + list).show();
	})

	$('.tab > div').hide();
	$('.tab > div:first').show();
	$('.tabing-block li').on('click', function() {

		$('.tabing-block .active').removeClass('active');
		$(this).addClass('active');
		$('.tab > div').hide();
		var list = $(this).attr('data-filter');

		$('#' + list).show();
	})

	$(".blogpost-slider").owlCarousel({
		autoPlay : 3000, //Set AutoPlay to 3 seconds
		items : 1,
		itemsDesktop : [1199, 1],
		itemsDesktopSmall : [979, 1],
		navigation : true,
		pagination : false
	});

	$("#owl-demo").owlCarousel({
		autoPlay : 3000, //Set AutoPlay to 3 seconds
		items : 4,
		itemsDesktop : [1199, 3],
		itemsDesktopSmall : [979, 3],
		navigation : true

	});

	$("#owl-slider").owlCarousel({

		autoPlay : 3000, //Set AutoPlay to 3 seconds
		items : 2,
		itemsDesktop : [1199, 3],
		itemsDesktopSmall : [979, 3],
		navigation : true
	});

	$("#owl-client-slider").owlCarousel({

		autoPlay : 3000, //Set AutoPlay to 3 seconds

		items : 1,
		itemsDesktop : [1199, 1],
		itemsDesktopSmall : [979, 1],
		itemsTablet : [768, 1],
		itemsMobile : [479, 1],
		navigation : true

	});

	$('.home-menu').on('click', function() {

		$(this).toggleClass('menu-bar');

		$('.navigation').slideToggle();

	});

	$('.menu').on('click', function() {
		if ($(window).width() < 768) {
			$(this).toggleClass('menu-bar');

			$('.navigation').slideToggle();
		}

	});

	$('.navigation li').on('click', function() {
		if ($(window).width() < 768) {
			$(this).children('.drop-down').slideToggle();
		}
	});
	// if($('.timer').length){
	//
	// $('.timer').countTo({from: 0, to: 15});
	//
	// $('.proj-finish-timer').countTo({from: 0, to: 101});
	//
	// $('.hpy-client-timer').countTo({from: 0, to: 88});
	//
	// }

	if ($('.timer').length) {
		$('.timer').appear(function() {
			$('.timer').countTo({
				from : 0,
				to : 15
			});

			$('.proj-finish-timer').countTo({
				from : 0,
				to : 101
			});

			$('.hpy-client-timer').countTo({
				from : 0,
				to : 88
			});

		});

	}

	// init Isotope
	// filtering
	$(function() {
		// init Isotope

		if ($('.project-detail').length) {
			var $grid = $('.proj-img').isotope({
				itemSelector : '.project-item',
				layoutMode : 'fitRows'
			});
		}

		// filter functions
		var filterFns = {
			// show if number is greater than 50
			numberGreaterThan50 : function() {
				var number = jQuery(this).find('.web-design').text();
				return parseInt(number, 10) > 50;
			},
			// show if name ends with -ium
			ium : function() {
				var name = jQuery(this).find('.name').text();
				return name.match(/ium$/);
			}
		};
		// bind filter button click

		jQuery('.project-title ').on('click', 'li', function() {
			var filterValue = jQuery(this).attr('data-filter');

			// use filterFn if matches value
			filterValue = filterFns[filterValue] || filterValue;
			$grid.isotope({
				filter : filterValue
			});
			$('.project-title  li').removeClass('active')
			$(this).addClass('active')
		});
		// change is-checked class on buttons
		jQuery('.button-group').each(function(i, buttonGroup) {
			var $buttonGroup = jQuery(buttonGroup);
			$buttonGroup.on('click', 'button', function() {
				$buttonGroup.find('.is-checked').removeClass('is-checked');
				jQuery(this).addClass('is-checked');
			});
		});

	});

	//Custom Map
	if ($('#map').length) {
		var map = new GMaps({
			div : '#map',
			lat : 44.453436,
			lng : -95.797182,
			disableDefaultUI : true,
			zoom : 17,
			scrollwheel : false,
			styles:[{
        featureType:"poi",
        elementType:"labels",
        stylers:[{
            visibility:"off"
        }]
    }]
		});
		map.drawOverlay({
			lat : map.getCenter().lat(),
			lng : map.getCenter().lng(),
			content : '<a href="#" class="mapmarker"><img src</a>',
			verticalAlign : 'center',
			horizontalAlign : 'center'
		});

	};

	// Svg implement
	jQuery('img.svg').each(function() {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if ( typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if ( typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
$(window).load(function() {
		$('.loader').delay(50).fadeOut();
		//=================Header Style function================
		if ($('#header').hasClass('fixed')) {
			$('#header').next().addClass('top-m');
		}
		if ($('#header').hasClass('intelligent')) {
			$('#header').next().addClass('top-m');
		};
	});

	var class_pr = $('body').attr('class');
	var headerHeight = $('#header').outerHeight();
	var st = $(window).scrollTop();
	stickOnScroll = function() {

		if ($('#header').hasClass("intelligent")) {

			$('#header').removeClass('normal');
			$('#header').next().addClass('top-m');
			var pos = $(window).scrollTop();

			if (pos > headerHeight) {
				if (pos > st) {
					$('#header').addClass('simple')
					$('#header.simple').removeClass('down');
					$('#header.simple').addClass('fixed up');

				} else {
					$('#header.simple').removeClass('up');
					$('#header.simple').addClass('fixed down');

				}
				st = pos;

			} else {
				$('#header.simple').removeClass('fixed down up simple');
			}
			if (pos == $(document).height() - $(window).height()) {
				$('#header.simple').removeClass('up');
				$('#header.simple').addClass('fixed down');
			}

		} else if ($('body').hasClass("fix")) {

			$('#header').next().addClass('top-m');
			$('#header').addClass('simple fixed');
			$('#header').removeClass('down up');
			$('#wrapper').css({
				paddingTop : 0
			});
		} else {

			$('#header.simple').removeClass('fixed down up simple');
			$('#header').addClass('normal');
			//$('.spacetop').removeClass('top-m');
			$('#wrapper').css({
				paddingTop : 0
			});
		}
	};
	stickOnScroll();
	$(window).scroll(function() {
		stickOnScroll();
	});

	// end for sticky header
});