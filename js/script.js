var THEMEMASCOT = {};
(function($) {

	"use strict";


  THEMEMASCOT.isRTL = {
    check: function() {
      if( $( "html" ).attr("dir") === "rtl" ) {
        return true;
      } else {
        return false;
      }
    }
  };

  THEMEMASCOT.isLTR = {
    check: function() {
      if( $( "html" ).attr("dir") !== "rtl" ) {
        return true;
      } else {
        return false;
      }
    }
  };
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header-style-one');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				sticky_header.addClass("fixed-header animated slideInDown");
				scrollLink.fadeIn(300);
			}else {
				sticky_header.removeClass("fixed-header animated slideInDown");
				scrollLink.fadeOut(300);
			}
			if (windowpos > 1) {
				siteHeader.addClass("fixed-header");
			}else {
				siteHeader.removeClass("fixed-header");
			}
		}
	}
	headerStyle();

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		var mobileMenuContent = $('.main-header .main-menu .navigation').html();

		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	//Hidder bar
	if ($('.hidden-bar').length){
		//Menu Toggle Btn
		$('.toggle-hidden-bar').on('click', function() {
			$('body').addClass('active-hidden-bar');
		});

		//Menu Toggle Btn
		$('.hidden-bar-back-drop, .hidden-bar .close-btn').on('click', function() {
			$('body').removeClass('active-hidden-bar');
		});
	}

	//Header Search
	if($('.search-btn').length) {
		$('.search-btn').on('click', function() {
			$('.main-header').addClass('moblie-search-active');
		});
		$('.close-search, .search-back-drop').on('click', function() {
			$('.main-header').removeClass('moblie-search-active');
		});
	}


	//Banner Carousel
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			animateOut: 'fadeOut',
		    animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 100,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout:5000,
			mouseDrag:false,
			navText: [ '<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
			}
		});    		
	}

	//Projects Carousel
	if ($('.projects-carousel').length) {
		$('.projects-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoWidth: true,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout: 10000,
			navText: ['PREV<span class="fa fa-long-arrow-alt-right"></span> ', '<span class="fa fa-long-arrow-alt-left"></span>NEXT'],
		});
	}

	//Project Slider
	if ($('.project-slider').length) {
		var swiper = new Swiper(".project-slider", {
			slidesPerView: 1,
			spaceBetween: 30,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1023: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 4,
				},
			},
			navigation: {
				nextEl: ".project-next",
				prevEl: ".project-prev",
			},
		});
	}

	//Services Slider
	if ($('.services-slider').length) {
		var swiper = new Swiper(".services-slider", {
			slidesPerView: 1,
			spaceBetween: 30,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1023: {
					slidesPerView: 3,
				},
			},
			navigation: {
				nextEl: ".services-next",
				prevEl: ".services-prev",
			},
		});
	}

	//Team Slider
	if ($('.team-slider').length) {
		var swiper = new Swiper(".team-slider", {
			slidesPerView: 1,
			spaceBetween: 30,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1023: {
					slidesPerView: 3,
				},
			},
			navigation: {
				nextEl: ".team-next",
				prevEl: ".team-prev",
			},
		});
	}

	//Awards Carousel
	if ($('.awards-carousel').length) {
		$('.awards-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			loop: false,
			margin: 0,
			nav: false,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout: 10000,
			navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 4
				},
			}
		});
	}
	
	// Team Carousel
	if ($('.team-carousel').length) {
		$('.team-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 40,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				991: {
					items: 3
				},
			}
		});
	}


	// Services Carousel
	if ($('.services-carousel').length) {
		$('.services-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 40,
			nav: false,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
		});
	}

	// Services Carousel Two
	if ($('.services-carousel-two').length) {
		$('.services-carousel-two').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 40,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2,
				},
				1024: {
					items: 3,
				},
			}
		});
	}
	
	// Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 0,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
			responsive: {
				0: {
					items: 1,
					margin: 30,
				},
				768: {
					items: 1,
					margin: 60,
				},
				1024: {
					items: 2,
					margin: 120,
				},
			}
		});
	}

	// Testimonial Carousel Two
	if ($('.testimonial-carousel-two').length) {
		$('.testimonial-carousel-two').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 30,
			nav: false,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
		});
	}


	// Testimonial Carousel Three
	if ($('.testimonial-carousel-three').length) {
		$('.testimonial-carousel-three').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 0,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2,
				},
				1024: {
					items: 3,
				},
				1200: {
					items: 4,
				},
			}
		});
	}

	// Testinomials Slider With Thumb
	if ($('.testimonial-content').length) {
		var testimonial_thumbs = new Swiper('.testimonial-thumbs', {
			spaceBetween: 10,
			loop: false,
			slidesPerView: 3,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				425: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
			}
		});

		var testimonial_content = new Swiper('.testimonial-content', {
			spaceBetween: 30,
			loop: true,
			thumbs: {
				swiper: testimonial_thumbs
			},
			navigation: {
				nextEl: ".testi-next",
				prevEl: ".testi-prev",
			},
			pagination: {
				el: "",
			},
		});
	}


	//Clients Carousel
	if ($('.clients-carousel').length) {
		$('.clients-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 60,
			nav: false,
			smartSpeed: 300,
			autoplay: true,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				425: {
					items: 2
				},
				600: {
					items: 3
				},
				768: {
					items: 4
				},
				1024: {
					items: 5
				},
				1200: {
					items: 6
				},
			}
		});
	}

	//Jquery Knob animation  // Pie Chart Animation
	if ($('.dial').length) {
		$('.dial').appear(function () {
			var elm = $(this);
			var color = elm.attr('data-fgColor');
			var perc = elm.attr('value');

			elm.knob({
				'value': 0,
				'min': 0,
				'max': 100,
				'skin': 'tron',
				'readOnly': true,
				'thickness': 0.05,
				'dynamicDraw': true,
				'displayInput': false
			});

			$({ value: 0 }).animate({ value: perc }, {
				duration: 2000,
				easing: 'swing',
				progress: function () {
					elm.val(Math.ceil(this.value)).trigger('change');
				}
			});

			//circular progress bar color
			$(this).append(function () {
				// elm.parent().parent().find('.circular-bar-content').css('color',color);
				//elm.parent().parent().find('.circular-bar-content .txt').text(perc);
			});

		}, { accY: 20 });
	}

	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {
		  var outerBox = $(this).parents('.accordion-box');
		  var target = $(this).parents('.accordion');
		  
		  if ($(this).hasClass('active')) {
			// If the clicked item is already active, close it
			$(this).removeClass('active');
			target.removeClass('active-block');
			$(this).next('.acc-content').slideUp(300);
		  } else {
			// If the clicked item is not active, open it and keep others open
			$(this).addClass('active');
			target.addClass('active-block');
			$(this).next('.acc-content').slideDown(300);
		  }
		});
	  }
	  

	

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}

	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

	//product bxslider
	if ($('.product-details .bxslider').length) {
		$('.product-details .bxslider').bxSlider({
        nextSelector: '.product-details #slider-next',
        prevSelector: '.product-details #slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        mode: 'fade',
        auto: 'true',
        speed: '700',
        pagerCustom: '.product-details .slider-pager .thumb-box'
    });
	};

	//Quantity box
  $(".quantity-box .add").on("click", function () {
    if ($(this).prev().val() < 999) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });
  $(".quantity-box .sub").on("click", function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
        .next()
        .val(+$(this).next().val() - 1);
    }
  });

	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 10,
			max: 99,
			values: [ 10, 60 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});

		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );
	}


	// count Bar
	if ($(".count-bar").length) {
		$(".count-bar").appear(
			function () {
					var el = $(this);
					var percent = el.data("percent");
					$(el).css("width", percent).addClass("counted");
				}, {
					accY: -50
			}
		);
	}

	//Progress Bar
	if ($('.progress-line').length) {
		$('.progress-line').appear(function () {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, { accY: 0 });
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


	// Select2 Dropdown
	$('.custom-select').select2({
		minimumResultsForSearch: 7,
	});

	//Gallery Filters
	 if($('.filter-list').length){
	 	 $('.filter-list').mixItUp({});
	 }

	//Custom Data Attributes
	if($('[data-tm-bg-color]').length){
		$('[data-tm-bg-color]').each(function() {
		  $(this).css("cssText", "background-color: " + $(this).data("tm-bg-color") + " !important;");
		});
	}
	if($('[data-tm-bg-img]').length){
		$('[data-tm-bg-img]').each(function() {
		  $(this).css('background-image', 'url(' + $(this).data("tm-bg-img") + ')');
		});
	}
	if($('[data-tm-text-color]').length){
		$('[data-tm-text-color]').each(function() {
		  $(this).css('color', $(this).data("tm-text-color"));
		});
	}
	if($('[data-tm-font-size]').length){
		$('[data-tm-font-size]').each(function() {
		  $(this).css('font-size', $(this).data("tm-font-size"));
		});
	}
	if($('[data-tm-opacity]').length){
		$('[data-tm-opacity]').each(function() {
		  $(this).css('opacity', $(this).data("tm-opacity"));
		});
	}
	if($('[data-tm-height]').length){
		$('[data-tm-height]').each(function() {
		  $(this).css('height', $(this).data("tm-height"));
		});
	}
	if($('[data-tm-width]').length){
		$('[data-tm-width]').each(function() {
		  $(this).css('width', $(this).data("tm-width"));
		});
	}
	if($('[data-tm-border]').length){
		$('[data-tm-border]').each(function() {
		  $(this).css('border', $(this).data("tm-border"));
		});
	}
	if($('[data-tm-border-top]').length){
		$('[data-tm-border-top]').each(function() {
		  $(this).css('border-top', $(this).data("tm-border-top"));
		});
	}
	if($('[data-tm-border-bottom]').length){
		$('[data-tm-border-bottom]').each(function() {
		  $(this).css('border-bottom', $(this).data("tm-border-bottom"));
		});
	}
	if($('[data-tm-border-radius]').length){
		$('[data-tm-border-radius]').each(function() {
		  $(this).css('border-radius', $(this).data("tm-border-radius"));
		});
	}
	if($('[data-tm-z-index]').length){
		$('[data-tm-z-index]').each(function() {
		  $(this).css('z-index', $(this).data("tm-z-index"));
		});
	}

	if($('[data-tm-padding]').length){
		$('[data-tm-padding]').each(function() {
		  $(this).css('padding', $(this).data("tm-padding"));
		});
	}
	if($('[data-tm-padding-top]').length){
		$('[data-tm-padding-top]').each(function() {
		  $(this).css('padding-top', $(this).data("tm-padding-top"));
		});
	}
	if($('[data-tm-padding-right]').length){
		$('[data-tm-padding-right]').each(function() {
		  $(this).css('padding-right', $(this).data("tm-padding-right"));
		});
	}
	if($('[data-tm-padding-bottom]').length){
		$('[data-tm-padding-bottom]').each(function() {
		  $(this).css('padding-bottom', $(this).data("tm-padding-bottom"));
		});
	}
	if($('[data-tm-padding-left]').length){
		$('[data-tm-padding-left]').each(function() {
		  $(this).css('padding-left', $(this).data("tm-padding-left"));
		});
	}

	if($('[data-tm-margin]').length){
		$('[data-tm-margin]').each(function() {
		  $(this).css('margin', $(this).data("tm-margin"));
		});
	}
	if($('[data-tm-margin-top]').length){
		$('[data-tm-margin-top]').each(function() {
		  $(this).css('margin-top', $(this).data("tm-margin-top"));
		});
	}
	if($('[data-tm-margin-right]').length){
		$('[data-tm-margin-right]').each(function() {
		  $(this).css('margin-right', $(this).data("tm-margin-right"));
		});
	}
	if($('[data-tm-margin-bottom]').length){
		$('[data-tm-margin-bottom]').each(function() {
		  $(this).css('margin-bottom', $(this).data("tm-margin-bottom"));
		});
	}
	if($('[data-tm-margin-left]').length){
		$('[data-tm-margin-left]').each(function() {
		  $(this).css('margin-left', $(this).data("tm-margin-left"));
		});
	}

	if($('[data-tm-top]').length){
		$('[data-tm-top]').each(function() {
		  $(this).css('top', $(this).data("tm-top"));
		});
	}
	if($('[data-tm-right]').length){
		$('[data-tm-right]').each(function() {
		  $(this).css('right', $(this).data("tm-right"));
		});
	}
	if($('[data-tm-bottom]').length){
		$('[data-tm-bottom]').each(function() {
		  $(this).css('bottom', $(this).data("tm-bottom"));
		});
	}
	if($('[data-tm-left]').length){
		$('[data-tm-left]').each(function() {
		  $(this).css('left', $(this).data("tm-left"));
		});
	}


	
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */	
	$(window).on('load', function() {
		handlePreloader();
	});	



		
/* ==========================================================================
   Gsap Animations
   ========================================================================== */
	gsap.registerPlugin(SplitText, ScrollTrigger);

	//Title Animations
	var tl = gsap.timeline(),
	mySplitText = new SplitText(".title-anim", { type: "words,chars" }),
	chars = mySplitText.chars;
	tl.from(chars, {
		duration: 0.8,
		opacity: 0,
		scale: 0,
		delay:1,
		y: 80,
		rotationX: 180,
		transformOrigin: "0% 50% -50",
		ease: "back",
		stagger: 0.08
	});


	// Mouse Circle Animation 
	// var $circle = $('.circle'),
	// 	$follow = $('.circle-follow');
	// function moveCircle(e) {
	// 	TweenLite.to($circle, 0.3, {
	// 		x: e.clientX,
	// 		y: e.clientY
	// 	});
	// 	TweenLite.to($follow, 0.7, {
	// 		x: e.clientX,
	// 		y: e.clientY
	// 	});
	// }
	// function hoverFunc(e) {
	// 	TweenLite.to($circle, 0.3, {
	// 		opacity: 1,
	// 		scale: 0
	// 	});
	// 	TweenLite.to($follow, 0.3, {
	// 		scale: 2
	// 	});
	// }
	// function unhoverFunc(e) {
	// 	TweenLite.to($circle, 0.3, {
	// 		opacity: 1,
	// 		scale: 1
	// 	});
	// 	TweenLite.to($follow, 0.3, {
	// 		scale: 1
	// 	});
	// }
	// $(window).on('mousemove', moveCircle);
	// $("a, .clink").hover(hoverFunc, unhoverFunc);


	// Gsap Text Animations
	window.addEventListener("DOMContentLoaded", (event) => {
		// Split text into spans
		let typeSplit = new SplitType(".text-split", {
			types: "words, chars",
			tagName: "span"
		});

		// Link timelines to scroll position
		function createScrollTrigger(triggerElement, timeline) {
			// Reset tl when scroll out of view past bottom of screen
			ScrollTrigger.create({
				trigger: triggerElement,
				start: "top bottom",
				onLeaveBack: () => {
					timeline.progress(0);
					timeline.pause();
				}
			});
			// Play tl when scrolled into view (60% from top of screen)
			ScrollTrigger.create({
				trigger: triggerElement,
				start: "top 60%",
				onEnter: () => timeline.play()
			});
		}

		$(".words-slide-up").each(function (index) {
			let tl = gsap.timeline({ paused: true });
			tl.from($(this).find(".word"), { opacity: 0, yPercent: 100, duration: 0.5, ease: "back.out(2)", stagger: { amount: 0.5 } });
			createScrollTrigger($(this), tl);
		});

		$(".words-rotate-in").each(function (index) {
			let tl = gsap.timeline({ paused: true });
			tl.set($(this).find(".word"), { transformPerspective: 1000 });
			tl.from($(this).find(".word"), { rotationX: -90, duration: 0.6, ease: "power2.out", stagger: { amount: 0.6 } });
			createScrollTrigger($(this), tl);
		});

		$(".words-slide-from-right").each(function (index) {
			let tl = gsap.timeline({ paused: true });
			tl.from($(this).find(".word"), { opacity: 0, x: "1em", duration: 0.6, ease: "power2.out", stagger: { amount: 0.2 } });
			createScrollTrigger($(this), tl);
		});

		$(".letters-slide-up").each(function (index) {
			let tl = gsap.timeline({ paused: true });
			tl.from($(this).find(".char"), { yPercent: 100, duration: 0.2, ease: "power1.out", stagger: { amount: 0.6 } });
			createScrollTrigger($(this), tl);
		});

		$(".letters-slide-down").each(function (index) {
			let tl = gsap.timeline({ paused: true });
			tl.from($(this).find(".char"), { yPercent: -120, duration: 0.3, ease: "power1.out", stagger: { amount: 0.7 } });
			createScrollTrigger($(this), tl);
		});

		$(".letters-fade-in").each(function (index) {
			let tl = gsap.timeline({ paused: true });
			tl.from($(this).find(".char"), { opacity: 0, duration: 0.2, ease: "power1.out", stagger: { amount: 0.8 } });
			createScrollTrigger($(this), tl);
		});

		$(".letters-fade-in-random").each(function (index) {
			let tl = gsap.timeline({ paused: true });
			tl.from($(this).find(".char"), { opacity: 0, duration: 0.05, ease: "power1.out", stagger: { amount: 0.4, from: "random" } });
			createScrollTrigger($(this), tl);
		});

		$(".scrub-each-word").each(function (index) {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: $(this),
					start: "top 90%",
					end: "top center",
					scrub: true
				}
			});
			tl.from($(this).find(".word"), { opacity: 0.2, duration: 0.2, ease: "power1.out", stagger: { each: 0.4 } });
		});

		// Avoid flash of unstyled content
		gsap.set(".text-split", { opacity: 1 });
	});

})(window.jQuery);



