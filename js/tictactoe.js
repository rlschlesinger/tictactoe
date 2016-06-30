$(document).ready(function(){

  //Player assigned
  var player = 0


//Player clicks square
$(".cell").on('click', function(event) {

  if ($(this).hasClass('filled')){
      alert("Invalid move: This square is filled!");
  }

  else{
    if (player % 2 == 0){
      $(this).append('X');
      $(this).addClass('filled ex');
      $(".turnStatus").empty();
      $(".turnStatus").append("<span>Player 2</span>");
      player++;
    }
    else if(player % 2 == 1){
      $(this).append('O');
      $(this).addClass('filled oh');
      $(".turnStatus").empty();
      $(".turnStatus").append("<span>Player 1</span>");
      player++;
    }
  }

  if($("#cellOne").hasClass('ex') && $("#cellTwo").hasClass('ex') && $("#cellThree").hasClass('ex')){
    alert('Game Over: Player 1 Wins!');
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

  else if($("#cellFour").hasClass('ex') && $("#cellFive").hasClass('ex') && $("#cellSix").hasClass('ex')){
    alert('Game Over: Player 1 Wins!');
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

  else if($("#cellSeven").hasClass('ex') && $("#cellEight").hasClass('ex') && $("#cellNine").hasClass('ex')){
    alert('Game Over: Player 1 Wins!');
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

  else if($("#cellOne").hasClass('ex') && $("#cellFour").hasClass('ex') && $("#cellSeven").hasClass('ex')){
    alert('Game Over: Player 1 Wins!');
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

  else if($("#cellTwo").hasClass('ex') && $("#cellFive").hasClass('ex') && $("#cellEight").hasClass('ex')){
    alert('Game Over: Player 1 Wins!');
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

  else if($("#cellThree").hasClass('ex') && $("#cellSix").hasClass('ex') && $("#cellNine").hasClass('ex')){
    alert('Game Over: Player 1 Wins!');
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

  else if($("#cellOne").hasClass('ex') && $("#cellFive").hasClass('ex') && $("#cellNine").hasClass('ex')){
    alert('Game Over: Player 1 Wins!');
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

  else if($("#cellThree").hasClass('ex') && $("#cellFive").hasClass('ex') && $("#cellSeven").hasClass('ex')){
    alert('Game Over: Player 1 Wins!');
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

  if($("#cellOne").hasClass('oh') && $("#cellTwo").hasClass('oh') && $("#cellThree").hasClass('oh')){
    alert('Game Over: Player 2 Wins!');
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

  else if($("#cellFour").hasClass('oh') && $("#cellFive").hasClass('oh') && $("#cellSix").hasClass('oh')){
    alert('Game Over: Player 2 Wins!');
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

  else if($("#cellSeven").hasClass('oh') && $("#cellEight").hasClass('oh') && $("#cellNine").hasClass('oh')){
    alert('Game Over: Player 2 Wins!');
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

  else if($("#cellOne").hasClass('oh') && $("#cellFour").hasClass('oh') && $("#cellSeven").hasClass('oh')){
    alert('Game Over: Player 2 Wins!');
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

  else if($("#cellTwo").hasClass('oh') && $("#cellFive").hasClass('oh') && $("#cellEight").hasClass('oh')){
    alert('Game Over: Player 2 Wins!');
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

  else if($("#cellThree").hasClass('oh') && $("#cellSix").hasClass('oh') && $("#cellNine").hasClass('oh')){
    alert('Game Over: Player 2 Wins!');
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

  else if($("#cellOne").hasClass('oh') && $("#cellFive").hasClass('oh') && $("#cellNine").hasClass('oh')){
    alert('Game Over: Player 2 Wins!');
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

  else if($("#cellThree").hasClass('oh') && $("#cellFive").hasClass('oh') && $("#cellSeven").hasClass('oh')){
    alert('Game Over: Player 2 Wins!');
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

  else if ($("#cellOne").hasClass('filled') && $("#cellTwo").hasClass('filled') && $("#cellThree").hasClass('filled') && $("#cellFour").hasClass('filled') && $("#cellFive").hasClass('filled') && $("#cellSix").hasClass('filled') &&
  $("#cellSix").hasClass('filled') && $("#cellSeven").hasClass('filled') && $("#cellEight").hasClass('filled') && $("#cellNine").hasClass('filled')){
    alert("Game Over: Cat's Game");
    $(".cell").empty();
    $(".row").children().removeClass('filled ex oh');
  }

})


});
