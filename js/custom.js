$(document).ready(function() {
	
			$('.banner-slider').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  autoplay: true,
				autoplaySpeed: 4000,
				speed: 1000,
			  arrows: true,
			  dots: false,
			  fade: true,
			  cssEase: 'linear',
			  pauseOnHover:false
			});
			
			
			
			$('.photo-gallery-slider').slick({
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  autoplay: true,
				autoplaySpeed: 5000,
				speed: 1500,
			  arrows: false,
			  dots: true,
			  responsive: [
					{
					  breakpoint: 1024,
					  settings: {
						slidesToShow: 3,
					  }
					},
					{
					  breakpoint: 600,
					  settings: {
						slidesToShow: 2,
					  }
					},
					{
					  breakpoint: 480,
					  settings: {
						slidesToShow: 1,
					  }
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
				  ]
			});
			
			
			$('.gallery-content').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: false,
			  fade: true,
			  asNavFor: '.gallery-nav'
			});
			
			$('.gallery-nav').slick({
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  asNavFor: '.gallery-content',
			  dots: false,
			  arrows: true,
			  centerMode: true,
			  centerPadding:'0px',
			  focusOnSelect: true,
			  responsive: [
												
						{
						  breakpoint: 576,
						  settings: {
							slidesToShow: 2,
			  				slidesToScroll: 1,
							centerPadding: '90px'
						  }
						}
						
						
					]
			});
			
			
			$('.projects-slider').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: true,
			  fade: true
			});
			
			
			$('.nav-pills > li > a').hover(function() {
			  $(this).tab('show');
			});
			
			
			$('.contentTabs').scrollingTabs();
            $('.contentTabs').scrollingTabs('refresh');
			
			
			//if ($(window).width() < 960) {
//				  $('.nav-pills').scrollingTabs();
//            	  $('.nav-pills').scrollingTabs('refresh');
//				}
			
			


			$(".preLoader").addClass("animated fadeOut");
				setTimeout(function() {
					$(".preLoader").css("display", "none");
				}, 1500);
				
			
			$(window).scroll(function(){ 
				if ($(this).scrollTop() > 200) { 
					$('#scroll').fadeIn(); 
				} else { 
					$('#scroll').fadeOut(); 
				} 
			}); 
			
			$('#scroll').click(function(){ 
				$("html, body").animate({ scrollTop: 0 }, 600); 
				return false; 
			});
			
			
			//AOS.init({
//				easing: 'ease-in-out-sine',
//				disable: 'mobile'
//			  });
			  
			  AOS.init({
			  disable: function() {
				var maxWidth = 1000;
				return window.innerWidth < maxWidth;
			  }
			});
			
			
			  
		  
			  
		$(window).scroll(function() {
			
			//$("nav").toggleClass("fixed-top", $(this).scrollTop() > 180);
			
			if($(this).scrollTop() > 100){
				$("header").addClass("fixed-top");
			} else {
				$("header").removeClass("fixed-top");
			}
			
			
		});
		
		
			






});


  
	  
    