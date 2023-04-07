<!DOCTYPE html>
<html>
<head>
	<title>Activity4</title>
    <link rel="stylesheet" href="Activity4.css">
</head>
<body>
<h1>Registration Form</h1>
	<form action="Activity4-preview.php" method="post"> <!-- Form to submit data to "Activity4-preview.php" using POST method -->
		<label for="name">Name:</label>
		<input type="text" name="name"><br><br>

		<label for="username">Username:</label>
		<input type="text" name="username"><br><br>

		<label for="password">Password:</label>
		<input type="password" name="password"><br><br>

		<label for="address">Address:</label>
		<input type="text" name="address" ><br><br>

        <label for="country">Country:</label>
		<select  name="country"> <!-- Select menu for country -->
			<option value="America">America</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
			<option value="China">China</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Japan">Japan</option>
            <option value="Mexico">Mexico</option>
            <option value="USA">USA</option>
		</select><br><br>

        <label for="zip">ZIP Code:</label>
		<input type="text" name="zip"><br><br>

		<label for="email">Email:</label>
		<input type="email" name="email"><br><br>

        <label>Sex:</label>
		<input type="radio" name="sex" value="Male">Male <!-- Radio button for male -->
		<input type="radio" name="sex" value="Female">Female<br><br> <!-- Radio button for female -->

        <label for="language">Language:</label>
        English <input type="checkbox" name="language[]" value="English"> <!-- Checkbox for English language -->
        French <input type="checkbox" name="language[]" value="French"> <!-- Checkbox for French language -->
        Germany <input type="checkbox"  name="language[]" value="Germany"><br><br> <!-- Checkbox for Germany language -->
        
        <label for="about">About:</label>
		<textarea name="about" rows="4" cols="22"></textarea><br>

		<input type="submit" value="Submit"> <!-- Submit button to send form data to Activity4-preview.php -->
	</form>
</body>
</html>