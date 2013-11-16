<?

	class Hackafe_Models_Events_Request {

		private $array_request	= array();
		private $array_error	= array();

		public function __construct() {
		
			$this->array_request	= $_REQUEST;
		}
		
		public function sanitize_request()
		{	
			
			
				filter_input_array($this->array_request, FILTER_SANITIZE_STRING);
			
		}
		
	
	}
?>