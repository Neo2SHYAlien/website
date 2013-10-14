<?php
use Hackafe\DB\Mysqli,
	Hackafe\DB\Exception;

defined('DS') OR
    define('DS', DIRECTORY_SEPARATOR);

$config = parse_ini_file(__DIR__ . DS . '..' . DS . 'config' . DS . 'config.ini', true);
require_once __DIR__ . DS . '..' . DS . 'vendor' 	. DS . 'SplClassLoader.php'; 

$classLoader = new \SplClassLoader('Hackafe', realpath(__DIR__ . DS . '..' . DS . 'lib'));
$classLoader->register();


try {
    $db = Mysqli::singleton();
} catch (Exception $e) {
    die($e->getMessage());
}
//the query that returns all sponsors

    $qwr = "SELECT sp.id, sp.name, tp.type,sp.logo_url, sp.website
            FROM sponsors as sp JOIN sponsor_types as tp
            ON sp.sponsor_tid = tp.id";
    $result = mysqli_query($db, $qwr);
    $res=array();
    
    //loop all results
    while($row = mysqli_fetch_array($result))
    {
       $res[$row['id']]['name'] = $row['name']; 
       $res[$row['id']]['type'] = $row['type']; 
       $res[$row['id']]['website'] = $row['website'];
    }
    //return the encoded json string
    $str = json_encode($res);
    echo $str;
    
