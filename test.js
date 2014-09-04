$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function() {
        
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1) {
				$("#titlebar").addClass('borderClass');
				$("#hometitlebar").addClass('borderClass');
			} 
            else
            {
                $("#titlebar").removeClass('borderClass');
                $("#hometitlebar").removeClass('borderClass');

            }
		});
        
		$(window).scroll(function () {
			if ($(this).scrollTop() > 500) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});

$(document).ready(function(){
            $('.carousel').slick({
                autoplay: true,
                autoplaySpeed: 9000,
                arrows: true,
                dots: true,
                slidesToShow: 1,
                
            });            
//            $('.text_carousel').slick({
//                autoplay: false,
//                autoplaySpeed: 9000,
//                slidesToShow: 1,
//                
//            });
                $('.carousel2').slick({
                autoplay: true,
                autoplaySpeed: 9000,
                arrows: true,
                dots:true,
                slidesToShow: 1,
                
            });
    $("#back-top").hide();
	
	// fade in #back-top
	$(function() {
        
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1) {
				$("#titlebar").addClass('borderClass');
				$("#hometitlebar").addClass('borderClass');
//				$("#reuptitlebar").addClass('borderClass');
			} 
            else
            {
                $("#titlebar").removeClass('borderClass');
                $("#hometitlebar").removeClass('borderClass');
//                $("#reuptitlebar").removeClass('borderClass');

            }
		});		
        $(window).scroll(function () {
			if ($(this).scrollTop() > 58) {
				$("#reuptitlebar").addClass('blackborder');
			} 
            else
            {
//                $("#reuptitlebar").removeClass('blackborder');

            }
		});
        
		$(window).scroll(function () {
			if ($(this).scrollTop() > 500) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
        });

