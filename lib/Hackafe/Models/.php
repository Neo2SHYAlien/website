<?

	use Hackafe\DB\Mysqli;

	class Hackafe_Models_News {

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
			/*
				show article

				example errors:
				0 - no errors
				1 - not specified id
				2 - not found

				return (array)
			*/

			$article = array(
				'loaded' => 0,
				'error' => 1,
				'data' => array(),
			);
			if (empty($id)) {
				return $article;
			}
			$article['error'] = 2;
			$query = '
				SELECT
					* # example
				FROM `news`
				WHERE 1
					AND `id` = ' . (int)$id . '
				LIMIT 1;
			';
			$query = $this->db->query($query);
			if ($query) {
				$result = $query->fetch_assoc();
				if ($result) {
					$article['error'] = 0;
					$article['data'] = $result;
				}
			}

			return $article;

		}

	}
