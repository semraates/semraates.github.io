var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	$("name").focus();
	
};

function displayResults() {
	var average = 0;
	var highestScore=0;
	var highestScoreName="";

	// Calculate average score
	for(var i=0;i<scores.length;i++) {
		average= (average*(i)+scores[i])/(i+1);
	}

	// Find highest score and associated name
	for(var j=0;j<scores.length;j++) {
		if(scores[j] > highestScore) {
			highestScore=scores[j];
			highestScoreName=names[j];
		}
	}
	
	// Display results in HTML element with id "results"
	document.getElementById("results").innerHTML="<h2> Results </h2>" + "<p> Average score = " + average + "</p>" 
	+ "<p> High score = " + highestScoreName + " with a score of " + highestScore + "</p>";
}

// Display names and scores in a table
function displayScores() {
	// Create table header
	document.getElementById("scores_table").innerHTML="<thead><tr><th colspan='2'><h2>Scores</h2></th></tr><tr><th>Name</th><th>Score</th></tr></thead>";

	// Add rows to table for each name and score
	for(var i=0;i<scores.length;i++) {
		var row=scores_table.insertRow();
		var nameCell=row.insertCell();
		var scoreCell=row.insertCell();
		nameCell.innerHTML=names[i];
		scoreCell.innerHTML=scores[i];
	}
  
}

// Add name and score to arrays and clear input fields
function addScore() {
	var name=$("name").value;
	var score=parseInt($("score").value);

	// Validate input
	if(name === "" || isNaN(score) || score < 0 || score > 100) {
		alert("You must enter a name and a valid score");	
	}
	else {
		// Add name and score to arrays
		names.push(name);
		scores.push(score);

		// Clear input fields and set focus to name field
		$("name").value = "";
        $("score").value = "";
		document.getElementById("name").focus();
	}
}
