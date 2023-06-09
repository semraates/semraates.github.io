$(document).ready(function() {
  // Fetch class data from the Decathlon Sports API for class with ID 127
  $.getJSON('https://sports.api.decathlon.com/sports/127', function(classData1) {
      // Get the class container element
      var classContainer = $('#class-container1');
      // Empty the class container
      classContainer.empty();

      // Extract class information from the API response
      var name = $('<h2>').text(classData1.data.attributes.name);
      var icon = '<img src="' + classData1.data.attributes.icon+ '">';
      var description = $('<p>').text(classData1.data.attributes.description);

      // Append the class information to the class container
      classContainer.append(name);
      classContainer.append(icon);
      classContainer.append(description);
  });
});

$(document).ready(function() {
  // Fetch class data from the Decathlon Sports API for class with ID 93
  $.getJSON('https://sports.api.decathlon.com/sports/93', function(classData2) {
      // Get the class container element
      var classContainer = $('#class-container2');
      // Empty the class container
      classContainer.empty();

      // Extract class information from the API response
      var name = $('<h2>').text(classData2.data.attributes.name);
      var icon = '<img src="' + classData2.data.attributes.icon+ '">';
      var description = $('<p>').text(classData2.data.attributes.description);

      // Append the class information to the class container
      classContainer.append(name);
      classContainer.append(icon);
      classContainer.append(description);
  });
});

$(document).ready(function() {
  // Fetch class data from the Decathlon Sports API for class with ID 134
  $.getJSON('https://sports.api.decathlon.com/sports/134', function(classData3) {
      // Get the class container element
      var classContainer = $('#class-container3');
      // Empty the class container
      classContainer.empty();

      // Extract class information from the API response
      var name = $('<h2>').text(classData3.data.attributes.name);
      var icon = '<img src="' + classData3.data.attributes.icon+ '">';
      var description = $('<p>').text(classData3.data.attributes.description.slice(0, 361));

      // Append the class information to the class container
      classContainer.append(name);
      classContainer.append(icon);
      classContainer.append(description);
  });
});
