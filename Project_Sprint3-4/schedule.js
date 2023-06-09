$(document).ready(function() {
    $.getJSON('schedule.json', function(data) {
        // Access the table body
        var tableBody = $('#schedule-table');
  
        // Clear existing table rows
        tableBody.empty();
  
        // Iterate over each event in the data
        data.forEach(function(classItem) {
            // Create a new table row
            var row = $('<tr>');
  
            // Create table cells for each property of the event
            var dateCell = $('<td>').text(classItem.date);
            var classCell = $('<td>').text(classItem.class);
            var timeCell = $('<td>').text(classItem.time);
    
            // Append the cells to the row
            row.append(dateCell, classCell, timeCell);
    
            // Append the row to the table body
            tableBody.append(row);
        });
    });
});



  
      
      
  