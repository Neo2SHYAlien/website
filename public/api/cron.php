<?php

/*
 * SQL
 *
CREATE  TABLE IF NOT EXISTS `events` (
   `id` INT NOT NULL AUTO_INCREMENT ,
   `facebook_id` VARCHAR(90) NULL ,
   `cover` VARCHAR(90) NULL ,
   `title` VARCHAR(45) NULL ,
   `description` VARCHAR(120) NULL ,
   `start_date` DATETIME NULL ,
   `end_date` DATETIME NULL ,
   `kind` ENUM('event', 'coursе') NULL,
   primary key (id)
   )
   ENGINE = InnoDB
   DEFAULT CHARACTER SET = utf8
   COLLATE = utf8_unicode_ci;
 */

include 'facebook.php';

class EventsFromFacebook
{
    // ------- Settings -------
    const ADMIN_MAIL = 'user@mail.com';

    const DB_HOST = 'localhost';
    const DB_USER = 'root';
    const DB_PASS = 'megdan123';
    const DB_NAME = 'hwebsite';

    const HACKAFE_FACEBOOK_GROUP_ID = '510776052304267';
    const FACEBOOK_APP_ID = '587936391261335';
    const FACEBOOK_APP_SECRET = '1a7d90c81992e153fbf41aeb4d45a9ca';
    const FACEBOOK_ACCESS_TOKEN = 'CAAIWuZAvAbJcBAJIixFZAv0HRFEjp4KVHQLvhwjARq3dOcykED4ae7BAnUFQWG20mpZAnGErJMf90jntXkrH3cwtWvRh3BThoWrYq8ZC4ots1oyyNK9O9V2chZCS1zLYZAQ1FV9xHu6BatWfXqWmqSEZARXkAnQlUwDrZCkvc7IVpZB38EdxZALskSrGNbWkAOl4R8ZBrJhw4HisAZDZD';

    protected $facebookApi;
    protected $database;

    // ------- Cron -------
    public function __construct()
    {

        $this->database = new mysqli(self::DB_HOST, self::DB_USER, self::DB_PASS, self::DB_NAME);

        if ($this->database->connect_errno > 0) {
            $this->sendMessage('Unable to connect to database [' . $this->database->connect_error . ']');
            exit;
        }

        $this->facebookApi = new Facebook(array(
            'appId' => self::FACEBOOK_APP_ID,
            'secret' => self::FACEBOOK_APP_SECRET));

        $apiQuery = '/' . self::HACKAFE_FACEBOOK_GROUP_ID . '/events?fields=cover,name,id,start_time,end_time,description, location ';
        $apiResult = $this->facebookApi->api($apiQuery);

        foreach ($apiResult['data'] as $event) {
            if (!$this->eventExists($event['id'])) {
                $type = ($this->isCourse($event) ? 'course' : 'event');
                $event['name'] = $this->sanitizeStrings($event['name']);
                $event['description'] = $this->sanitizeStrings($event['description']);
                $event['location'] = $this->sanitizeStrings($event['location']);

                $insertStatement = $this->database->prepare("INSERT INTO events(facebook_id, cover, title, description, start_date, end_date, kind, location) VALUES(?,?,?,?,?,?,?,?);");
                $insertStatement->bind_param('ssssssss', $event['id'], $event['cover']['source'], $event['name'], $event['description'], $event['start_time'], $event['end_time'], $type, $event['location']);
                $insertStatement->execute();

                if (!$this->database->insert_id) {
                    $this->sendMessage('Error with Facebook Event: ' . $event['id']);
                }
            } else {
                echo 'Data saved successfully!   <a href="index.php">Back to index page...</a>';
                exit();
            }
        }
    }

    public function sanitizeStrings($string)
    {
        return mb_substr($string, 0, 1000, 'utf-8');
    }

    public function sendMessage($message)
    {
        $to = self::ADMIN_MAIL;
        $subject = 'Hackafe Facebook Events Cron';
        $headers = 'From: cron@hackafe.org' . "\r\n" .
            'Reply-To: cron@hackafe.org' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        mail($to, $subject, $message, $headers);
    }

    public function eventExists($eventId)
    {
        $selectQuery = "SELECT facebook_id FROM events WHERE facebook_id = '{$eventId}' LIMIT 1;";
        $result = $this->database->query($selectQuery);
        return ($result->num_rows ? true : false);
    }

    public function isCourse($eventData)
    {
        return (array_key_exists('end_date', $eventData) && strtotime($eventData['end_date']) - strtotime($eventData['start_date']) >= 86400 ? true : false);
    }

}

$cron = new EventsFromFacebook;