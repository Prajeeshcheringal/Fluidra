$(document).on('ready', function() {
      
      $(".bannerSlider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
		arrows: true,
        slidesToScroll: 1,
		autoplay: true,
	    autoplaySpeed: 3000,
		fade: true,
		speed: 1600,
		prevArrow: '<a href="javascript:void(0);" class="btnPrev"><i class="fas fa-arrow-left" aria-hidden="true"></i></a>',
        nextArrow: '<a href="javascript:void(0);" class="btnNext"><i class="fas fa-arrow-right" aria-hidden="true"></i></a>',
		responsive: [
					{
					  breakpoint: 768,
					  settings: {
						arrows: false,
						fade: false,
						speed: 800
					  }
					}
				]
      });
	  
	  $('.projectSlider').slick({
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 800,
                centerPadding: '350px',
                dots: false,
                arrows: true,
                slidesToShow: 1,
                centerMode: true,
                draggable: false,
                //cssEase: 'cubic-bezier(0.500, -0.280, 0.735, 0.045)',
                focusOnSelect: true,
                prevArrow: '<a href="javascript:void(0);" class="btnPrev"><i class="fa fa-angle-left fa-2x" aria-hidden="true"></i></a>',
                nextArrow: '<a href="javascript:void(0);" class="btnNext"><i class="fa fa-angle-right fa-2x" aria-hidden="true"></i></a>',
				responsive: [
					{
					  breakpoint: 990,
					  settings: {
						slidesToShow: 1,
						centerPadding: '60px',
						slidesToScroll: 1
					  }
					},
					{
					  breakpoint: 420,
					  settings: {
						centerPadding: '20px',
						slidesToShow: 1,
						slidesToScroll: 1
					  }
					}
				]
            });
			
			
			$(".preLoader").addClass("animated fadeOut");
				setTimeout(function() {
					$(".preLoader").css("display", "none");
				}, 1000);
				
			
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
			
			
			AOS.init({
				easing: 'ease-in-out-sine',
				disable: 'mobile'
			  });
			  
			  
			  
$(window).scroll(function() {
	
	//$("nav").toggleClass("fixed-top", $(this).scrollTop() > 180);
	
	if($(this).scrollTop() > 350){
		$("nav").addClass("fixed-top");
	} else {
		$("nav").removeClass("fixed-top");
	}
	
	$(".bannerSection").toggleClass("fixed", $(this).scrollTop() > 234);
	
	
	$(".aboutSection").toggleClass("marginTop", $(this).scrollTop() > 234);
	
});


  
	  
    });