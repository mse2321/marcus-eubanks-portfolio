<?php

	//$localhost = "localhost";
	$db_server =  23.229.134.102;
	$db_username = "meubanks";
	$db_password = "meinnovation2016";
	$db_name = "MeInnovation";


	$mysqli = new mysqli($db_server, $db_username, $db_password, $db_name);


	if ($mysqli->connect_error) {
	    die('Connect Error (' . $mysqli->connect_errno . ') '
	            . $mysqli->connect_error);
	}

	echo 'Success... ' . $mysqli->host_info . "\n";

	$mysqli->close();