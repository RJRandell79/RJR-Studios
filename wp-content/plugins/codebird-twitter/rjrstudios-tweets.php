<?

/*
Plugin Name: Codebird Twitter
Plugin URI: http://wordpress.org/plugins/codebird-twitter/
Description: Twitter feed via Codebird
Author: Rob Randell
Version: 0.6
Author URI: http://www.rjrstudio.co.uk/
*/

require_once ( 'codebird.php' );
//Twitter OAuth Settings
$CONSUMER_KEY = 'MZkd6vvOtETZAbRvXQAvPA';
$CONSUMER_SECRET = 'l9m2XN3X5ihFmPDVypckgY6lnZj5it4JLGb7zSZsi7E';
$ACCESS_TOKEN = '262312567-mbnlpIZBquoPY3DFR6hQi6zCiqW4tGq6mlKPDHy7';
$ACCESS_TOKEN_SECRET = '5Ew4m2n47H2viZ2RkDW3jrq3Q49wFxLKDuavAOa2OjQ';

//Get authenticated
\Codebird\Codebird::setConsumerKey( $CONSUMER_KEY, $CONSUMER_SECRET );
$cb = \Codebird\Codebird::getInstance();
$cb->setToken( $ACCESS_TOKEN, $ACCESS_TOKEN_SECRET);

//retrieve posts

//https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline
//https://dev.twitter.com/docs/api/1.1/get/search/tweets

$api = 'statuses_userTimeline';

$params = array(
	'screen_name' => 'RJRan',
	'q' => 'rjran',
	'include_rts' => 'false',
	'count' => '20',
	'exclude_replies' => 'true'
);

//Make the REST call
$data = ( array ) $cb->$api( $params );

$jsonData = json_encode( $data );
//$jsonStart = "{\"value\":{\"items\":";
//$jsonEnd = "}}";

$jsonStart = "jsonCallback({\"tweets\":";
$jsonEnd = "})";

/*header('Content-Type: application/javascript');

echo $jsonStart;
echo $jsonData;
echo $jsonEnd;
*/

$file = "rjrstudios-latest-tweet.json";

$handle = fopen( $file, 'w' );
fwrite( $handle, $jsonStart );
fwrite( $handle, $jsonData );
fwrite( $handle, $jsonEnd );
fclose( $handle );

?>
