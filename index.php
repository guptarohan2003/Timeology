<?php
// Setup our Resource App
require_once('lib/SchoologyApp.php');

// Initialize the session
session_start();

// Authentication with SAML 2.0 
schoology_login();

$uid = $_SESSION['schoology']['uid'];
$session_created = $_SESSION['session_created'];
$site_base = ($_SESSION['app_state']['is_ssl'] ? 'https://' : 'http://') . $_SESSION['schoology']['domain'];
$schoology = new SchoologyContentApi(SCHOOLOGY_CONSUMER_KEY, SCHOOLOGY_CONSUMER_SECRET, $site_base);

// Make sure a user is logged in
if(!$uid){
  print 'No user information was found when loading this page. Please try loading this application from within Schoology.'; exit;
}

// Initialize a database connection.
$db = new PDO('mysql:dbname='.DB_DATABASE.';host='.DB_HOSTNAME, DB_USERNAME, DB_PASSWORD);

try{
  $oauth_store = new App_OauthStorage($db);
  $schoology->authorize($oauth_store, $uid, $session_created);
}
catch (ExpiredSGYWebSession $e){
  session_destroy();
  print $e->getMessage(); exit;
}
catch (Exception $e){
  print $e->getMessage(); exit;
}

$content = schoology_get_sample_content();
schoology_import($schoology);

// Contruct page
ob_start();
?>

<h3>Sample Resource App</h3>
<div>uid = <?php echo $uid ?></div>

<h4>Import Link</h4>
<div><a href="<?php echo $content['link']['url']; ?>" target="_blank"><?php echo $content['link']['url']; ?></a></div>
<pre><?php echo print_r($content['link'], TRUE); ?></pre>
<div>
  Click <a href="?import=link">here</a> to import the link above
</div>
<br /><hr />


<h4>Import Embed</h4>
<div><?php echo $content['embed']['embed']; ?></div>
<xmp><?php echo print_r($content['embed'], TRUE); ?></xmp>
<div>
  Click <a href="?import=embed">here</a> to import the embed above
</div>
<br /><hr />


<h4>Import File</h4>
<div><img src="<?php echo $content['file']['filepath']; ?>" /></div>
<xmp><?php echo print_r($content['file'], TRUE); ?></xmp>
<div>
  Click <a href="?import=file">here</a> to import the file above
</div>
<br /><hr />


<h4>Import All (Bulk Import)</h4>
<div>
  Click <a href="?import=bulk">here</a> to import all (bulk import)
</div>
<br /><br />

<?php
$output = ob_get_clean();
?><!DOCTYPE html>
<html>
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  </head>
  <body>
    <?php echo $output; ?>
  </body>
</html>