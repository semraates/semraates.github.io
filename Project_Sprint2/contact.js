$(document).ready(function() {

   // Enable datepicker for the birthdate field
   $("#birthdate").datepicker();

   // Define an array of courses for autocomplete
   var courses = [
       "Yoga",
       "Pilates",
       "HIIT",
       "Zumba class",
       "CrossFit class"
   ];

   // Apply autocomplete functionality to the course field
   $("#course").autocomplete({
       source: courses
   });

   // Enable form validation
   $("#contact-form").validate();

   // Apply phone number masking
   $("#phone").mask("(000)000-00-00");

   // Handle form submission
   $("#button").click(function(e) {
       e.preventDefault();
       if ($("#contact-form").valid()) {
           // Show success message
           Swal.fire("Success!", "Form submitted successfully.", "success");

           // Clear form fields
           $("#name").val('');
           $("#birthdate").val('');
           $("#phone").val('');
           $("#email").val('');
           $("#course").val('');
           $("#message").val('');
		}
    });
});