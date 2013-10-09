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

	whoIsInTheLab();	
});

function whoIsInTheLab()
{
	$.ajax({
		url: 'http://raspberry.hackafe.org/?format=json',
		dataType: 'jsonp',
		success: function(data){
			if ('undefined' === typeof data.data)
			{
				return;
			}
			var nCount = data.data.count;
			var sText = '';
			if (0 >= nCount)
			{
				sText = 'В лаба няма никой.';
			}
			else
			{
				var sText = '<a href="http://raspberry.hackafe.org/" class="info" target="_blank">В лаба са: ';
				var sUsers = '';
				for(var nUser=0; nUser<data.data.users.length; nUser++)
				{
					var sPrefix = (0 == nUser) ? '' : ', ';
					sUsers += sPrefix+data.data.users[nUser].name1;
				}
				sText += sUsers;
				var nGuests = data.data.guests;
				if (0 >= nGuests)
				{
					sText += '.';
				}
				else
				{
					if (0 < sUsers.length)
					{
						sText += ' и ';
					}
					sText += nGuests;
					sText += (1 == nGuests) ? ' гостуващо устройство.' : ' гостуващи устройства.';
				}
				sText += '</a>';
			}
			$('#whoIsInTheLab').html(sText);
		}
	});
}