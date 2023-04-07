<!DOCTYPE html>
<html>
<head>
	<title>Preview</title>
</head>
<body>
	<h1>Preview</h1>

	<?php

	// Check if "name" input was provided
	if (!empty($_POST["name"])){
		echo $_POST["name"] . "<br>";
	}
	else {
		echo "Name: Not provided". "<br>";
	}

	// Check if "username" input was provided
	if (!empty($_POST["username"])){
		echo $_POST["username"]. "<br>";
	}
	else {
		echo "Username: Not provided". "<br>";
	}

	// Check if "password" input was provided
	if (!empty($_POST["password"])){
		echo $_POST["password"]. "<br>";
	}
	else {
		echo "Password: Not provided". "<br>";
	}
	
	// Check if "address" input was provided
	if (!empty($_POST["address"])){
		echo $_POST["address"]. "<br>";
	}
	else {
		echo "Adress:Not provided". "<br>";
	}

	// Check if "country" input was provided
	if (!empty($_POST["country"])){
		echo $_POST["country"]. "<br>";
	}
	else {
		echo "Country: Not provided". "<br>";
	}

	// Check if "zip" input was provided
	if (!empty($_POST["zip"])){
		echo $_POST["zip"]. "<br>";
	}
	else {
		echo "Zip: Not provided". "<br>";
	}

	// Check if "email" input was provided
	if (!empty($_POST["email"])){
		echo $_POST["email"]. "<br>";
	}
	else {
		echo "Email: Not provided". "<br>";
	}

	// Check if "language" input was provided
	if (!empty($_POST["language"])){
		for($i=0; $i<sizeof($_POST["language"]); $i++){
			echo $_POST["language"][$i] . "<br>";
		}
	}
	else {
		echo "Language: Not provided". "<br>";
	}

	// Check if "about" input was provided
	if (!empty($_POST["about"])){
		echo $_POST["about"]. "<br>";
	}
	else {
		echo "About: Not provided". "<br>";
	}

	?>

</body>
</html>