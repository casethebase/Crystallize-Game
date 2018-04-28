// Open up jQuery

$(document).ready(function() {

    // All variables we're gonna use
     var wins = 0;
     var losses = 0;
     var playerScore = 0;
     var computerScore = Math.ceil((Math.random() * 102) + 19);
     var green = Math.ceil(Math.random() * 12);
     var blue = Math.ceil(Math.random() * 12);
     var red = Math.ceil(Math.random() * 12);
     var yellow = Math.ceil(Math.random() * 12);


 function game(){

    // Set up a win condition, where if the computerScore variable is equal to playerScore, incremend the wins variable by 1.
    // If playerScore ends up being greater than computerScore, increment the losses variable by 1.
    // Target the #Message ID tag as a result of our win/loss condition
    // Call the gameReset function after both
    // Finally, call the scoreUpdate function
     if (playerScore == computerScore) {
         wins++;
         $("#Message").html("You won!");
         gameReset();
     } else if (playerScore > computerScore) {
         losses++;
         $("#Message").html("You lost!");
         gameReset();
     } else {
         scoreUpdate();
     }
 };

 $("#total").append("<div>"+ "<h3>" + "Random Number: " + computerScore + "</h3>");

 $("#score").append(playerScore);

$(document).ready(function() {
     $("#green").click(function(){
         playerScore = playerScore + green;
         game();
     })

     $("#blue").click(function(){
         playerScore = playerScore + blue;
         game();
     })

     $("#red").click(function(){
         playerScore = playerScore + red;
         game();
     })

     $("#yellow").click(function(){
         playerScore = playerScore + yellow;
         game();
     });
 });

 function scoreUpdate() {
     $("#score").empty();
     $("#score").append(playerScore);

     $("#Wins").empty();
     $("#Wins").append(wins);

     $("#Losses").empty();
     $("#Losses").append(losses);
 };

 function gameReset(){
     playerScore = 0;
     computerScore = Math.floor((Math.random() * 102) + 19);
     $("#total").empty();
     $("#total").append("<div>"+ "<h3>" + "Random Number: " + computerScore + "</h3>");
     green = Math.ceil(Math.random() * 12);
     blue = Math.ceil(Math.random() * 12);
     red = Math.ceil(Math.random() * 12);
     yellow = Math.ceil(Math.random() * 12);
     scoreUpdate();
 };	

});