
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var losses = 0;
    var guessleft = 10;
    var computerGuess;
    var userGuess;

    document.onkeyup = function(event) 
    {
      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            if(userGuess==computerGuess){
                wins+=1;
                guessleft-=1;
                alert("YOU WIN!!");
                guessleft=10;
            }
            if(userGuess!=computerGuess)
            {
                losses+=1; 
                guessleft-=1;
            }
            if(guessleft===0){
              alert("GAME OVER - you Lose ");
              wins=0;
              losses=0;
              guessleft=10;
            }

        var html =
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>You chose: " + userGuess + "</p> <hr>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessleft + "</p>";

        document.querySelector("#game").innerHTML = html;
    };