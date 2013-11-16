<?

	/*
	SELECT
		`nd`.*#, GROUP_CONCAT(`nd`.`language_id`) AS `available_languages`
	FROM `news` AS `n`
	LEFT JOIN `news_data` AS `nd` ON `nd`.`news_id` = `n`.`id`
	WHERE 1
		AND `nd`.`is_deleted` = 0
		#AND `nd`.`language_id` = 1
	GROUP BY `n`.`id`
	*/
	namespace Hackafe\Models;

	use Hackafe\DB\Mysqli;

	class News {

		private $db;

		public function __construct() {
			$this->db = Mysqli::singleton();
			$this->_temp_create_table(); // COMMENT THIS LINE AFTER FIRST RUN :)
		}

		private function _temp_create_table() {
			// temporarily function

			$query = 'SHOW TABLES LIKE "news"';
			$result = $this->db->query($query);
			$not_exist = ($result->num_rows == 0);
			if ($not_exist) {
				$query = '
					USE `hwebsite`;
					CREATE TABLE IF NOT EXISTS `news`(
					  `id` int(11) NOT NULL AUTO_INCREMENT,
					  `language_id` int(11) NOT NULL,
					  PRIMARY KEY (`id`)
					) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;
					INSERT IGNORE INTO `news` (`id`, `language_id`) VALUES (1, 1);
				';
				$this->db->query($query); // this thing does not create table?! / run the creation manually
			}

			return true;

		}

		public function show_articles($params = array()) {
			// show articles /w paging
			// return (array)

			$articles = array();

			return $articles;

		}

		public function add_article($params = array()) {
			// add article and return auto increment if success or 0 if not succeed
			// return (int)

			$added_id = 0;

			return $added_id;

		}

		public function edit_article($params = array()) {
			// edit article
			// return (bool)

			return true;

		}

		public function delete_article($params = array()) {
			// delete article
			// return (bool)

			return true;

		}

		public function view_article($id = 0) {
			if (empty($id)) {
				throw new NewsException('Not Specified id', 1);
			}
			$query = '
				SELECT
					* # example
				FROM `news`
				WHERE 1
					AND `id` = ' . (int)$id . '
				LIMIT 1;
			';
			$query = $this->db->query($query);
			if ( (false == $query) || (null == ($result = $query->fetch_assoc()) ) ) {
				throw new NewsException('News article not found', 2);
			}
			return $result;

		}

	}
