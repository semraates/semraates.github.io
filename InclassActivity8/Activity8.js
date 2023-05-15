$(document).ready(function() {
    // activate datepicker for the birthday input
	$("#birthday").datepicker();

    // define the array of programming languages for the autocomplete feature
    var languages = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python"
    ];

    // activate autocomplete for the language input
    $("#language").autocomplete({
        source: languages
    });

});