$(document).ready(function(){

	// main slider
    var swiper = new Swiper(".swiper_container", {
		autoplay: true,
		loop: true,
	});

	//scroll
	$(window).scroll(function(){
        var win_top = $(window).scrollTop()
        var win_h = $(window).height()        
        
        $('.hld_content > .hld_con,.hld_plus > .hld_con,.hld_content > .hld_gift,.hld_boost').each(function(){
            var about_box = $(this).offset().top            
            if( win_top >= about_box - 850 ){
                $(this).find('.hld_left,.hld_right,.gift_cont,.boost_txt').addClass('active');
                $(".typed").typed({
                    strings: ["#즐거움을_BOOST"],
                    typeSpeed: 100,
                });
            }
            else if( win_top < about_box - win_h ) {
                $(this).find('.hld_left,.hld_right,.gift_cont,.boost_txt').removeClass('active');
            }
        })
        
    });

    //typed
    $('.note_bar h3').on('click', function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('.note_cont').slideUp();
		} else {
			$(this).addClass('open');
			$('.note_cont').slideDown();
		}
	});
})