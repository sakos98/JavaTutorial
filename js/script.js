function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let playerMove = prompt('Wybierz swój ruch! 1: kamien, 2: papier, 3: nonyce.');

console.log('Gracz wpisał: ' + playerMove);

let computerMove = "nieznany ruch";

function getMoveName(moveId){
  if(moveId == 1){
    return 'kamien';
  }else if (moveId == 2){
      return 'papier';
  } else if (moveId == 3){
    return 'nozyce';
  } else {
    printMessage('Podaj liczbę z zakresu od 1-3')
  }
  
}


let randomFraction = Math.random();
let calculation = randomFraction * 3 + 1;
let moveId = Math.floor(calculation);

const computerMoveName = getMoveName(moveId);
const playerMoveName = getMoveName(playerMove);


function displayResult(computerMove, playerMove){
  printMessage('Zagrałem ' + playerMove + ', a komputer ' + computerMove);
  if( computerMove == 'kamien' && playerMove == 'papier'){
    printMessage('Wygrałeś!');
  } else if( computerMove == 'papier' && playerMove == 'nozyce'){
      printMessage('Wygrałeś!');
  } else if( computerMove == 'nozyce' && playerMove == 'kamien'){
      printMessage('Wygrałeś!');
  } else if( computerMove == 'kamien' && playerMove == 'nozyce'){
    printMessage('Komputer Wygrywa!');
  } else if( computerMove == 'papier' && playerMove == 'kamien'){
    printMessage('Komputer Wygrywa!');
  } else if( computerMove == 'nozyce' && playerMove == 'papier'){
    printMessage('Komputer Wygrywa!');
  }
  else {
    printMessage('Remis!');
  }
}

displayResult(computerMoveName, playerMoveName);
