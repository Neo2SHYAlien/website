$(document).ready(function(){
	//Start scroll
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	//Start Tabs
	$("#tabBox").organicTabs();
	
	//Active navigation
	$("#navi>li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
	
	//Start target=_blank
	$('a[rel*=external]').click( function() {
		window.open(this.href);
		return false;
	});		
});