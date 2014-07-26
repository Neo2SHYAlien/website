<?php
    use Hackafe\DB\Mysqli,
		Hackafe\DB\Exception;

	defined('DS') OR define('DS', DIRECTORY_SEPARATOR);

        $type =  $_GET['type'];
        $pageNum = $_GET['pageNumber'];
        
	$config = parse_ini_file(__DIR__ . DS . '../..' . DS . 'config' . DS . 'config.ini', true);
	require_once __DIR__ . DS . '../..' . DS . 'vendor' . DS . 'SplClassLoader.php'; 

	// autoloader за неймспейснати класове
	$classLoader = new \SplClassLoader('Hackafe', realpath(__DIR__ . DS . '../..' . DS . 'lib'));
	$classLoader->register();

	
	try {
		$db = Mysqli::singleton();
	} catch (Exception $e) {
		die($e->getMessage());
	}
        
        $result = $db->query("SELECT * from events where kind ='" . $type . "' limit " . $pageNum * 10 . ", 10 ;");
        
        $events = array();
        if ($result) {
		while ($row = $result->fetch_assoc()) {
			//printf('<pre>%s</pre>', print_r($row, true));
                    $events[] = $row;
                        
		}
            
    
                echo json_encode($events);
		$result->free();

	}
        
        
?>
