$(function() {
	$( "#whoIsInTheLabDialog" ).dialog({
		modal: true,
		autoOpen: false
	});
});

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
			var nGuests = data.data.guests;
			var sText = '';
			if (0 >= nCount)
			{
				sText = 'В лаба няма никой.';
				$('#whoIsInTheLabList').html(sText);
			}
			else
			{
				var sText = '<a href="#" onclick="showWhoIsInTheLab()" class="info">В лаба са: ';
				var sUsers = '';
				var sList = '';
				var users = data.data.users;
				for(var nUser=0; nUser<data.data.users.length; nUser++)
				{
					var sPrefix = (0 == nUser) ? '' : ', ';
					sUsers += sPrefix+users[nUser].name1;
					
					var sUserImage = '';
					var sFacebookInfog = '';
					if ( ("undefined" != users[nUser].facebook) && (0 < users[nUser].facebook.length) )
					{
						sFacebookInfo = '<a href="'+users[nUser].facebook+'" target="_blank">Facebook</a> ';
						sUserImage = 'http://graph.facebook.com/'+users[nUser].facebook+'/picture?type=normal';
					}
					
					//load data about the users
					sList += '<li>';
					sList += '<p><div class="whoTitle"><a href="'+users[nUser].website+'" target="_blank">';
					sList += users[nUser].name1+' '+users[nUser].name2+'</a></div>';
					sList += '<div class="whoDetails">';
					sList += sFacebookInfo;
					if ( ("undefined" != users[nUser].twitter) && (0 < users[nUser].twitter.length) )
					{
						sList += '<a href="'+users[nUser].twitter+'" target="_blank">Twitter</a> ';
					}
					if ( ("undefined" != users[nUser].googlePlus) && (0 < users[nUser].googlePlus.length) )
					{
						sList += '<a href="'+users[nUser].googlePlus+'" target="_blank">Google+</a> ';
					}
					if ( ("undefined" != users[nUser].email) && (0 < users[nUser].email.length) )
					{
						sList += '</br>e-mail: <a href="mailto:'+users[nUser].email+'" target="_blank">'+users[nUser].email+'</a> ';
					}
					if ( ("undefined" != users[nUser].tel) && (0 < users[nUser].tel.length) )
					{
						sList += '</br>tel: <a href="'+users[nUser].tel+'" target="_blank">'+users[nUser].tel+'</a> ';
					}
					sList += '</div></p></li>';
				}
								
				sText += sUsers;
				if (0 >= nGuests)
				{
					sText += '.';
				}
				else
				{
					sList += '<p class="whoGuests">Гостуващи устройства: '+nGuests+'</p>';
					if (0 < sUsers.length)
					{
						sText += ' и ';
					}
					sText += nGuests;
					sText += (1 == nGuests) ? ' гостуващо устройство.' : ' гостуващи устройства.';
				}
				sText += '</a>';
				
				$('#whoIsInTheLabList').html(sList);
			}
			$('#whoIsInTheLab').html(sText);
		}
	});
}

function showWhoIsInTheLab()
{
	window.scrollTo(0, 0);
	$( "#whoIsInTheLabDialog" ).dialog( "open" );
}