<!DOCTYPE html>
<html>
<head>
	<title>Activity5</title>
	<style>
		body {
			margin-left: 10%;
			margin-top: 5%;
		}

		input[type='number'],
		select {
			display: inline-block;
			width: 10%;
		} 

		label {
			display: inline-block;
			width: 5%;
			margin-right: 3%;
		}

		button {
			margin-left: 33%;
		}

		#to_amount {
			border-style: solid;
			border-color: white;
		}
	</style>
</head>
<body>
    <form method="post">
		<label for="from_amount">From:</label>
		<input type="number" name="from_amount" value="<?php echo isset($_POST['from_amount']) ? $_POST['from_amount'] : '0' ?>">

		<label for="from_currency">Currency:</label>
		<select name="from_currency" >
			<option value="USD" <?php if(isset($_POST['from_currency']) && $_POST['from_currency'] == 'USD') echo 'selected'; ?>>US Dollar</option>
            <option value="CAD" <?php if(isset($_POST['from_currency']) && $_POST['from_currency'] == 'CAD') echo 'selected'; ?>>Canadian Dollar</option>
    		<option value="EUR" <?php if(isset($_POST['from_currency']) && $_POST['from_currency'] == 'EUR') echo 'selected'; ?>>Euro</option>
		</select><br>

		<label for="to_amount">To:</label>
		<input type="number" id="to_amount" name="to_amount" value="0" readonly >

    	<label for="to_currency">Currency:</label>
		<select name="to_currency">
			<option value="USD" <?php if(isset($_POST['to_currency']) && $_POST['to_currency'] == 'USD') echo 'selected'; ?>>US Dollar</option>
    		<option value="CAD" <?php if(isset($_POST['to_currency']) && $_POST['to_currency'] == 'CAD') echo 'selected'; ?>>Canadian Dollar</option>
    		<option value="EUR" <?php if(isset($_POST['to_currency']) && $_POST['to_currency'] == 'EUR') echo 'selected'; ?>>Euro</option>
		</select><br>

		<button type="submit" name="convert">Convert</button>
		
	</form>

	<?php

	$exchange_rates = array(
		'USD' => array('CAD' => 1.36, 'EUR' => 0.91),  // exchange rates for US Dollar
		'CAD' => array('USD' => 0.74, 'EUR' => 0.67),  // exchange rates for Canadian Dollar
		'EUR' => array('USD' => 1.10, 'CAD' => 1.47)  // exchange rates for Euro
 	);

	if(isset($_POST['convert'])) {

		// get user input
		$from_amount = $_POST['from_amount'];
		$from_currency = $_POST['from_currency'];
		$to_currency = $_POST['to_currency'];

		if ($from_currency == $to_currency) {  // if from and to currencies are the same, result is equal to input amount
			$result = $from_amount;
		} else {
			$from_rate = $exchange_rates[$from_currency][$to_currency];  // get exchange rate for converting from currency to to currency
			$to_rate = $exchange_rates[$to_currency][$from_currency];  // get exchange rate for converting to currency to from currency
			$result = $from_amount / $from_rate * $to_rate;  // calculate converted amount
		}
		
		$formatted_result = number_format($result, 2);
		// output converted amount in the input field with id "to_amount"
		echo  '<script>document.getElementById("to_amount").value = '.$formatted_result .';</script>';
		
	}

	?>
</body>
</html>