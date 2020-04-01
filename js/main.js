var scene = document.getElementById('js-scene');
var parallax = new Parallax(scene);
function visiteur(){
	$(".after-button1").addClass("active");
	$(".after-button1").removeClass("remove");
	$(".freebirdSolidBackground").css("background-color","#e55b68")
}
function rVisiteur(){
	$(".after-button1").addClass("remove")
	$(".after-button1").removeClass("active")
}
function prof(){
	$(".after-button2").addClass("active");
	$(".after-button2").removeClass("remove");
	$(".freebirdSolidBackground").css("background-color","#e55b68")
}
function rprof(){
	$(".after-button2").addClass("remove")
	$(".after-button2").removeClass("active")
}
$(document).ready(function() {
    var el = document.getElementById("js-scene");
    var theMain =document.getElementById("main");
    var height = el.offsetHeight;
    var newHeight = height + 75;
    el.style.height = newHeight + 'px';
    theMain.style.height = newHeight + 'px';
});

$('a[href^="#home"]').on("click", function(event) {
	var target = $(this.getAttribute("href"));

	if (target.length) {
		event.preventDefault();
		$("html, body")
			.stop()
			.animate(
			{
				scrollTop: target.offset().top
			},1000
		);
	}
});
$('a[href^="#fh5co-services"]').on("click", function(event) {
	var target = $(this.getAttribute("href"));

	if (target.length) {
		event.preventDefault();
		$("html, body")
			.stop()
			.animate(
			{
				scrollTop: target.offset().top +1
			},1000
		);
	}
});
$('a[href^="#fh5co-testimonials"]').on("click", function(event) {
	var target = $(this.getAttribute("href"));

	if (target.length) {
		event.preventDefault();
		$("html, body")
			.stop()
			.animate(
			{
				scrollTop: target.offset().top +1
			},1000
		);
	}
});
$('a[href^="#fh5co-work"]').on("click", function(event) {
	var target = $(this.getAttribute("href"));

	if (target.length) {
		event.preventDefault();
		$("html, body")
			.stop()
			.animate(
			{
				scrollTop: target.offset().top +1
			},1000
		);
	}
});
$('a[href^="#fh5co-contact"]').on("click", function(event) {
	var target = $(this.getAttribute("href"));

	if (target.length) {
		event.preventDefault();
		$("html, body")
			.stop()
			.animate(
			{
				scrollTop: target.offset().top +1
			},1000
		);
	}
});
$('a[href^="#fh5co-work"]').on("click", function(event) {
	var target = $(this.getAttribute("href"));

	if (target.length) {
		event.preventDefault();
		$("html, body")
			.stop()
			.animate(
			{
				scrollTop: target.offset().top +1
			},1000
		);
	}
	$(".after-button1").removeClass("active")
	$(".after-button2").removeClass("active")
});
$('.ovla').click (function(){
  $("#myNav").toggleClass("overlayaf");
  $('.menu').toggleClass('open');
});
$('.circle-menu').click (function(){
  $(".menu").toggleClass('open');
});
$(window).scroll(function() {
  if ($(document).scrollTop() > height ) {
    $(".circle-menu").addClass("active");
    rVisiteur()
    rprof()
  } else {
    $(".circle-menu").removeClass("active");
  }
});
let height = window.innerHeight;
$(document).ready(function() {
  $(".circle-menu").click(function() {
    $("#myNav").toggleClass("overlayaf");
  });
});
;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};


	// Animations
	// Home

	var homeAnimate = function() {
		if ( $('#fh5co-home').length > 0 ) {	

			$('#fh5co-home').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-home .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var introAnimate = function() {
		if ( $('#fh5co-intro').length > 0 ) {	

			$('#fh5co-intro').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-intro .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};
	var introAnimate2 = function() {
		if ( $('#fh5co-intro2').length > 0 ) {	

			$('#fh5co-intro2').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-intro2 .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};
	var introAnimate3 = function() {
		if ( $('#fh5co-intro3').length > 0 ) {	

			$('#fh5co-intro3').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-intro3 .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var workAnimate = function() {
		if ( $('#fh5co-work').length > 0 ) {	

			$('#fh5co-work').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-work .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var testimonialAnimate = function() {
		var testimonial = $('#fh5co-testimonials');
		if ( testimonial.length > 0 ) {	

			testimonial.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = testimonial.find('.to-animate').length,
						sec = parseInt((sec * 200) - 400);

					setTimeout(function() {
						testimonial.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						testimonial.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInDown animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var servicesAnimate = function() {
		var services = $('#fh5co-services');
		if ( services.length > 0 ) {	

			services.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = services.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						services.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						services.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);


					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var aboutAnimate = function() {
		var about = $('#fh5co-about');
		if ( about.length > 0 ) {	

			about.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						about.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var countersAnimate = function() {
		var counters = $('#fh5co-counters');
		if ( counters.length > 0 ) {	

			counters.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = counters.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						counters.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						counters.find('.js-counter').countTo({
						 	formatter: function (value, options) {
				      		return value.toFixed(options.decimals);
				   		},
						});
					}, 400);

					setTimeout(function() {
						counters.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);

					

					

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var contactAnimate = function() {
		var contact = $('#fh5co-contact');
		if ( contact.length > 0 ) {	

			contact.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						contact.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};
	function query() {
		var order1 = $(".the-order-1");
		var order2 = $(".the-order-2");
		if (x.matches) {
			order1.addClass("order-1");	
	  		order2.addClass("order-2");
	  		$("#fh5co-intro2").removeClass("normal-margin2");
			    var el = document.getElementById("js-scene");
			    var theMain =document.getElementById("main");
			    var height = el.offsetHeight;
			    var newHeight = height - 50;
			    el.style.height = newHeight + 'px';
			    theMain.style.height = newHeight + 'px';
	 	} else {
	 		order1.removeClass("order-1");	
	 		order2.removeClass("order-2");
	 		$("#fh5co-intro2").addClass("normal-margin2");
		}
	}
	var x = window.matchMedia("(max-width: 768px)")
	query(x) // Call listener function at run time
	x.addListener(query) // Attach listener function on state change
	

	// Document on load.
	$(function(){

		parallax();
		
		// Animations
		homeAnimate();
		introAnimate();
		introAnimate2();
		introAnimate3();
		workAnimate();
		testimonialAnimate();
		servicesAnimate();
		aboutAnimate();
		countersAnimate();
		contactAnimate();
		

	});


}());