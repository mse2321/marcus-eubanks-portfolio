<?php
	$servername = "localhost";
	$username = "83991656";
	$password = "GD79uq$@1";

	// Creates connection
	$connect = new mysqli($servername, $username, $password);

	// Check connection
	if ($connect->connect_error) {
		die("Connection failed: " . $connect->connect_error);
	}

	$sql = "SELECT ID, Title, Description, Techonologies, Image FROM ME-Innovation";
	$result = $connect->query($sql);

	if ($result->num_rows > 0) {
		// outputs row data
		while($row = $result->fetch_assoc()) {
			$id[] =  $row["ID"];
			$title[] = $row["Title"];
			$tech[] = $row["Technologies"];
			$desc[] = $row["Description"];
			$image[] = $row["Image"];
		}
	} else {
		echo "Something didn't work right!";
	}


?>