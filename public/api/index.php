<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
xmlns:fb="http://www.facebook.com/2008/fbml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<title>Display Facebook Events to You Website</title>
		<style type='text/css'>
			/*adding some styles*/
			.event{
				background-color: #E3E3E3;
				margin: 0 0 5px 0;
				padding: 5px;
			}
		</style>
	</head>
<body>
<?php
//we have to set timezone to California
date_default_timezone_set('Europe/Sofia');

//requiring FB PHP SDK
require 'fb-sdk/src/facebook.php';

//initializing keys
$facebook = new Facebook(array(
	'appId'  => '606117122809506',
	'secret' => 'caea1a49adc01ef72801c1124eae50e5e',
	'cookie' => true, // enable optional cookie support
));

//just a heading
//echo "<div style='font-weight: bold; margin: 0 0 20px 0;'>";
//echo "This event list is synchronized with this ";
//echo "<a href='https://www.facebook.com/pages/HackafePlovdiv/510776052304267?sk=events'>";
//echo "Hackafe Events List</a></div>";

//query the events
//we will select name, start_time, end_time, location, description this time
//but there are other data that you can get on the event table (https://developers.facebook.com/docs/reference/fql/event/)
//as you've noticed, we have TWO select statement here
//since we can't just do "WHERE creator = your_fan_page_id".
//only eid is indexable in the event table, sow we have to retrieve
//list of events by eids
//and this was achieved by selecting all eid from
//event_member table where the uid is the id of your fanpage.
//*yes, you fanpage automatically becomes an event_member
//once it creates an event

$hackafeId = "510776052304267";
//TODO
$after = '';//get from url
$before = '';//get from url


$fqlDONOTTOUCH    =   "SELECT name, pic, start_time, end_time, location, description 
			FROM event WHERE eid IN ( SELECT eid FROM event_member WHERE uid = $hackafeId ) 
			ORDER BY start_time asc";

$fql1    =   "SELECT name, pic, start_time, end_time, location, description 
			FROM event WHERE eid = 260131784147356 AND start_time <=".  time()."
			ORDER BY start_time asc";

$fqlCources    =   "SELECT name, pic, start_time, end_time, location, description 
			FROM event WHERE eid IN ( SELECT eid FROM event_member WHERE uid = $hackafeId ) AND end_time > ".  time()."
                            AND start_time < ".  time()."
			ORDER BY start_time asc";

$fql    =   "SELECT eid, name, description, pic_big, start_time, end_time, location 
            FROM event 
            WHERE eid IN (SELECT eid FROM event_member WHERE uid = $hackafeId) AND start_time < now() AND end_time > now() 
            ORDER BY start_time";
			

$param  =   array(
'method'    => 'fql.query',
'query'     => $fql,
'callback'  => ''
);
//$url = "/events?fields=description,end_time,location,name,owner,picture,start_time,timezone,id,venue&limit=10";
$url = '';
if(isset($_REQUEST['url_string']))
{
    $url = $_REQUEST['url_string'];
}
//$fqlResult   =   $facebook->api($param);
//echo '<pre>';
$eventsResult = $facebook->api($hackafeId . $url, 'GET', NULL);
//$eventsResult = $facebook->api($param);

//var_dump($eventsResult);
//echo '</pre>';


//looping through retrieved data
//$start = new DateTime('2014-01-01');
//$end = new DateTime('2014-03-22');

//foreach ($eventsResult['data'] as $value)
//{
//    //foreach ($key as $value)
//    //{
//        echo "<div class='event'>";
//        if(isset($value['picture']))
//        {
//            echo "<div style='float: left; margin: 0 8px 0 0;'>";
//            echo "<img src={$value['picture']['data']['url']} />";
//            echo '</div>';
//                //echo "<div>Picture_url: " . $value['picture']['data']['url'] . "</div>";
//        }else 
//        {
//            echo NULL;
//        }       
//        if(isset($value['location']))
//        {
//            echo "<div>Location: " . $value['location'] . "</div>";
//        }else 
//        {
//            echo NULL;
//        }
//        
//        if(isset($value['name']))
//        {
//            echo "<div>Name: " . $value['name'] . "</div>";
//        }else 
//        {
//            echo NULL;
//        }
//        
//        if(isset($value['start_time']))
//        {
//             echo "<div>Start Time: " . $value['start_time'] . "</div>";
//        }else 
//        {
//            echo NULL;
//        }
//        
//        if(isset($value['end_time']))
//        {
//            echo "<div>End Time: " . $value['end_time'] . "</div>";
//
//        }else 
//        {
//            echo NULL;
//        }
//        
//        if(isset($value['description']))
//        {
//            echo "<div>More Info: " . $value['description'] . "</div>";
//
//        }else 
//        {
//            echo NULL;
//        }
//        echo "<div style='clear: both'></div>";
//        echo '</div>';
//           
//    //}
//        
//}
//$before = $eventsResult['paging']['cursors']['before'];
//$after = $eventsResult['paging']['cursors']['after'];

$result = json_encode($eventsResult);
//print_r($result);
echo $result
//foreach( $eventsResult as $keys => $val ){
//    foreach ($values as $val){
//	//see here http://php.net/manual/en/function.date.php for the date format I used
//	//The pattern string I used 'l, F d, Y g:i a'
//	//will output something like this: July 30, 2015 6:30 pm
//
//	//getting 'start' and 'end' date,
//	//'l, F d, Y' pattern string will give us
//	//something like: Thursday, July 30, 2015
//	$start_date = date( 'l, F d, Y', strtotime($val['start_time'] ));
//	$end_date = date( 'l, F d, Y', strtotime($val['end_time'] ));
//
//	//getting 'start' and 'end' time
//	//'g:i a' will give us something
//	//like 6:30 pm
//	$start_time = date( 'g:i a', strtotime($val['start_time'] ));
//	$end_time = date( 'g:i a', strtotime($val['end_time'] ));
//
//	//printing the data
//	echo "<div class='event'>";
//	echo "<div style='float: left; margin: 0 8px 0 0;'>";
//		echo "<img src={$val['picture']} />";
//	echo "</div>";
//	echo "<div style='float: left;'>";
//		echo "<div style='font-size: 26px'>{$val['name']}</div>";
//		if( $start_date == $end_date ){
//			//if $start_date and $end_date is the same
//			//it means the event will happen on the same day
//			//so we will have a format something like:
//			//July 30, 2015 - 6:30 pm to 9:30 pm
//			echo "<div>on {$start_date} - {$start_time} to {$end_time}</div>";
//		}else{
//			//else if $start_date and $end_date is NOT the equal
//			//it means that the event will will be
//			//extended to another day
//			//so we will have a format something like:
//			//July 30, 2013 9:00 pm to Wednesday, July 31, 2013 at 1:00 am
//			echo "<div>on {$start_date} {$start_time} to {$end_date} at {$end_time}</div>";
//		}
//		echo "<div>Location: " . $val['location'] . "</div>";
//		echo "<div>More Info: " . $val['description'] . "</div>";
//	echo "</div>";
//	echo "<div style='clear: both'></div>";
//	echo "</div>";
//    }
//}

?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js">
</script>
<script type='text/javascript'>
//just to add some hover effects
$(document).ready(function(){

$('.event').hover(
	function () {
		$(this).css('background-color', '#CFF');
	}, 
	function () {
		$(this).css('background-color', '#E3E3E3');
	}
);

});
</script>
</body>
</html>