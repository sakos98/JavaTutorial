function playGame(playerInput) {

  document.getElementById('messages').innerHTML = '';

  function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
  }

  function getMoveName(moveId) {
    if (moveId == 1) {
      return 'kamien';
    } else if (moveId == 2) {
      return 'papier';
    } else if (moveId == 3) {
      return 'nozyce';
    } 
  }                         

  let randomFraction = Math.random();
      calculation = randomFraction * 3 + 1;
      moveIdComputer = Math.floor(calculation);
    

  const computerMoveName = getMoveName(moveIdComputer);
         playerMoveName = getMoveName(playerInput);

  function displayResult(computerMove, playerMove) {
    printMessage('Zagrałeś ' + playerMove + ', a komputer ' + computerMove);
    if (computerMove == 'kamien' && playerMove == 'papier') {
      printMessage('Wygrałeś!');
    } else if (computerMove == 'papier' && playerMove == 'nozyce') {
      printMessage('Wygrałeś!');
    } else if (computerMove == 'nozyce' && playerMove == 'kamien') {
      printMessage('Wygrałeś!');
    } else if (computerMove == 'kamien' && playerMove == 'nozyce') {
      printMessage('Komputer Wygrywa!');
    } else if (computerMove == 'papier' && playerMove == 'kamien') {
      printMessage('Komputer Wygrywa!');
    } else if (computerMove == 'nozyce' && playerMove == 'papier') {
      printMessage('Komputer Wygrywa!');
    }
    else {
      printMessage('Remis!');
    }
  }
  displayResult(computerMoveName, playerMoveName);
}

function buttonRock(){
  playGame(1);
}
let playRock = document.getElementById('play-rock');
playRock.addEventListener('click', buttonRock);

function buttonPaper(){
  playGame(2);
}
let playPaper = document.getElementById('play-paper');
playPaper.addEventListener('click', buttonPaper);

function buttonScizors(){
  playGame(3);
}
let playScizors = document.getElementById('play-scizors');
playScizors.addEventListener('click', buttonScizors);

/*
 document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scizors').addEventListener('click', function(){
  playGame(3);
}); */