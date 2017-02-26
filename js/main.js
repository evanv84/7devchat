
$(document).ready(function() {


	var productHeader = new TimelineMax();

	productHeader
		.to('.product-1', 1, {autoAlpha: 1, x: 0, ease: Power3.easeInOut})
		.to('.product-2', 1, {autoAlpha: 1, y: 0, ease: Power3.easeInOut}, "-=0.5")
		.to('.product-3', 1, {autoAlpha: 1, y: 0, ease: Power3.easeInOut}, "-=0.5");

	// Nav toggle
	$('.nav-collapse').on('click', function(){
		$('nav ul').toggleClass('showing');
		$('#nav-icon').toggleClass('open');
	});
	
	$('#shop-nav-btn').click(function(event) {
		$('.shop-nav-menu').addClass('is-open');
		var catNav = new TimelineMax();

		catNav
			.staggerFromTo('.category-col', 0.6, {autoAlpha: 0, ease: Power2.easeInOut}, {autoAlpha: 1, ease: Power2.easeInOut}, 0.5, "+=0.7");
	});

	$('.close-btn').click(function(event) {
		$('.shop-nav-menu').removeClass('is-open');
	});


	$('#extra-nav-btn').click(function(e) {
		e.preventDefault();
		
		$('.extra-nav-menu').addClass('is-open');
		var extraNav = new TimelineMax();

		extraNav
			.staggerFromTo('.extra-menu li', 0.6, {autoAlpha: 0, ease: Power2.easeInOut}, {autoAlpha: 1, ease: Power2.easeInOut}, 0.3, "+=0.7");
	});

	$('.close-btn').click(function(e) {
		e.preventDefault();
		$('.extra-nav-menu').removeClass('is-open');
	});

	//init scrolmagic
	var controller = new ScrollMagic.Controller();

	if ($('#arrivals').length) {
		var arrivals = new TimelineMax();

		arrivals
			.fromTo('#arrivals', 1, {autoAlpha: 0, y: 50, ease: Power2.easeInOut}, {autoAlpha: 1, y: 0, ease: Power2.easeInOut});

		var arrivalsScene = new ScrollMagic.Scene({
			triggerElement: "#arrivals",
			triggerHook: "0.35"
		})
		.setTween(arrivals)
		//.addIndicators()
		.addTo(controller);
	}

	if ($('#categories').length ) {
		
		var categories = new TimelineMax();

		categories
			.fromTo('#categories', 1, {autoAlpha: 0, y: 50, ease: Power2.easeInOut}, {autoAlpha: 1, y: 0, ease: Power2.easeInOut});

		var categoriesScene = new ScrollMagic.Scene({
			triggerElement: "#categories",
			triggerHook: "0.5"
		})
		.setTween(categories)
		//.addIndicators()
		.addTo(controller);
	}

	if ($('#about').length) {
		var about = new TimelineMax();

		about
			.fromTo('#about .container .col-1', 1, {autoAlpha: 0, x: 50, ease: Power2.easeInOut}, {autoAlpha: 1, x: 0, ease: Power2.easeInOut})
			.fromTo('#about .container .col-2', 1, {autoAlpha: 0, x: -50, ease: Power2.easeInOut}, {autoAlpha: 1, x: 0, ease: Power2.easeInOut}, "-=0.5");

		var arrivalsScene = new ScrollMagic.Scene({
			triggerElement: "#about",
			triggerHook: "0.45"
		})
		.setTween(about)
		//.addIndicators()
		.addTo(controller);
	}

	if($('#top').hasClass('single-post-header')) {

		var singlePostHeaderIntro = new TimelineMax();

		singlePostHeaderIntro
			.to("#top", 1.5, {autoAlpha: 1, y: 0, ease: Power3.easeInOut})

		var singlePostHeader = new TimelineMax();

		singlePostHeader
			.to("#top .container .bcg", 1, {y: 160, ease: Linear.easeNone});

			var singlePostScene = new ScrollMagic.Scene({
			triggerElement: "nav",
			triggerHook: "0",
			duration: 500
		})
		.setTween(singlePostHeader)
		//.addIndicators()
		.addTo(controller);
	}

	if ($('#shop-content').length ) {

		var shopAnim = new TimelineMax();

		shopAnim
			.to("#shop-content", 1, {autoAlpha: 1, y: 0, ease: Power3.easeInOut});
	}

});