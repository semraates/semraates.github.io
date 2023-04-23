    
    var button = document.getElementById("myButton");
    var level = 0;
    var timeout = 500;

    // Function to move the button randomly
    function moveButton() {
      button.style.marginTop = Math.random() * 300 + "px";
      button.style.marginLeft = Math.random() * 300 + "px";
    }

    // Add event listener to the button for mouseover event
    button.addEventListener("mouseover", moveButton);

    // Event listener function for the button
    function buttonClick() {
      level++;
      var message;
        // Switch statement to set the timeout and message based on the level
        switch(level) {
          case 1:
            timeout = 500;
            message = "You are the winner! You can go next level2";
            break;
          case 2:
            timeout = 400;
            message = "You are the winner! You can go next level3";
            break;
          case 3:
            timeout = 300;
            message = "You are the winner! You can go next level4";
            break;
          case 4:
            timeout = 200;
            message = "You are the winner! You can go next level5";
            break;
          case 5:
            timeout = 100;
            message = "Congratulations! You won the game!";
            button.removeEventListener("mouseover", moveButton);
            button.removeEventListener("click", buttonClick);
            break;
          default:
            timeout =0;
            message = "Congratulations! You won the game!";
            // Remove the event listeners to stop the game
            button.removeEventListener("mouseover", moveButton);
            button.removeEventListener("click", buttonClick);
            break;
        }
        alert(message);
        
        if (level < 6) {
          // Move the button randomly after the timeout
          setTimeout(function() {
            button.style.marginTop = Math.random() * 300 + "px";
            button.style.marginLeft = Math.random() * 300 + "px";
          }, timeout);
        }
    }

    // Add event listener to the button     
    button.addEventListener("click", buttonClick);