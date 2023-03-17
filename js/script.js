function playGame() {

  function clearMessages() {
    document.getElementById('messages').innerHTML = '';
  }

  function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
  }

  let computerMove = "nieznany ruch";
  let playerMove = 3;

  function getMoveName(moveId) {
    if (moveId == 1) {
      return 'kamien';
    } else if (moveId == 2) {
      return 'papier';
    } else if (moveId == 3) {
      return 'nozyce';
    } else {
      printMessage('Podaj liczbę z zakresu od 1-3')
    }

  }

  let randomFraction = Math.random();
  let calculation = randomFraction * 3 + 1;
  let moveIdComputer = Math.floor(calculation);

  const computerMoveName = getMoveName(moveIdComputer);
  const playerMoveName = getMoveName(playerMove);

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

 document.getElementById('play-rock').addEventListener('click', function(){
  console.log(playGame(1));
});
document.getElementById('play-paper').addEventListener('click', function(){
  console.log(playGame(2));
});
document.getElementById('play-scizors').addEventListener('click', function(){
  console.log(playGame(3));
}); 