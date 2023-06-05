$(document).ready(function () {
    $("#nav_list a").click(function (event) {
      event.preventDefault();
  
      var title = $(this).attr("title");
      var jsonName = "json_files/" + title + ".json";
  
      $("main").empty();
  
      $.getJSON(jsonName, function (data) {
          var speakerData = data.speakers[0];
          
          var html = "<h1>" + speakerData.title + "</h1>";
          html += '<img src="' + speakerData.image + '">';
          html += "<h2>" + speakerData.month + "<br>" + speakerData.speaker + "</h2>";
          html += "<p>" + speakerData.text + "</p>";
  
          // Append the HTML elements to the main element
          $("main").append(html);
        
      });
    });
  }); // end ready

