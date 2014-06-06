<?php
	$isLoginFailed = 0;

	// Is the user currently logged in? 1 if true, 0 otherwise.
	function nmg_is_logged(){
		if (isset($_SESSION['logged'])) {
		  return 1;
		}else{
			return 0;
		}
	}
	
	function connect_to_nmg_database(){
		include('db-access.php');

		//Connect to the databasse
		$db = mysql_connect($dbHost,$dbUser,$dbPass)or die("Error connecting to database.");
		
		//Selects the database
		mysql_select_db($dbDatabase, $db)or die("Couldn't select the database.");
	}

	if (isset($_GET['logout'])) {
		session_unset();
		unset($_GET['logout']);
		//header('refresh:0;');
		header("Location: index.php");
	}
	
	// If the login credentials are submitted, verify the user/passwd and set $_SESSION['logged'].
	if(isset($_POST['login'])){
		connect_to_nmg_database();

		$usr = mysql_real_escape_string($_POST['username']);
		$pas= mysql_real_escape_string($_POST['password']);

		$sql = mysql_query("SELECT * FROM parent_logins 
			WHERE login='$usr' AND password='$pas'
			LIMIT 1");

		if(mysql_num_rows($sql) == 1){
			$row = mysql_fetch_array($sql);
			session_start();
			$_SESSION['firstName'] = $row['First_Name'];
			$_SESSION['lastName'] = $row['Last_Name'];
			$_SESSION['logged'] = TRUE;
			$isLoginFailed = 0;
		} else {
			unset($_SESSION['firstName']);
			unset($_SESSION['lastName']);
			unset($_SESSION['logged']);
			$isLoginFailed = 1;
		}
	}


	/* ALTERNATIVE WAY OF DATABASE CONNECTION
	define("HOST", ""); // The host you want to connect to.
	define("USER", ""); // The database username. Access limited to do only 'SELECT, INSERT, UPDATE'.
	define("PASSWORD", ""); // The database password. 
	define("DATABASE", ""); // The database name.
	$mysqli = new mysqli(HOST, USER, PASSWORD, DATABASE);
	*/
?>