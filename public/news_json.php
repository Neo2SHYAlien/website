<?

	use Hackafe\DB\Mysqli,
		Hackafe\DB\Exception,
		Hackafe\Models\News,
		Hackafe\Models\NewsException;

	defined('DS') OR define('DS', DIRECTORY_SEPARATOR);

	$config = parse_ini_file(__DIR__ . DS . '..' . DS . 'config' . DS . 'config.ini', true);
	require_once __DIR__ . DS . '..' . DS . 'vendor' . DS . 'SplClassLoader.php'; 

	// autoloader за неймспейснати класове
	$classLoader = new \SplClassLoader('Hackafe', realpath(__DIR__ . DS . '..' . DS . 'lib'));
	$classLoader->register();

	// autoloader за глобални класове
	$classLoader = new \SplClassLoader(null, realpath(__DIR__ . DS . '..' . DS . 'lib'));
	$classLoader->register();

	$news = new News();

	$article = array();
	$id = (isset($_GET['id']) && $_GET['id'] ? (int)$_GET['id'] : 0);

	try {
		$article = $news->view_article($id);
	} catch (NewsException $e) {
		echo json_encode(
			array(
				'error' => array(
					'code' => $e->getCode(),
					'message' => $e->getMessage(),
				)
			)
		);
		exit;
	}

	echo json_encode($article);

	//$news->view_article()
	//$news->view_article(1)
	//$news->view_article(2)
