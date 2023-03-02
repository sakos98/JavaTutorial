function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let computerMove = `kamien`;

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamien';
} else if (playerInput == '2'){
	playerMove = 'papier';
}  else if (playerInput == '3'){
	playerMove = 'nozyce'; 
} else { printMessage('Wybierz liczbę z przedziału od 1-3');
}

printMessage('Twój ruch to: ' + playerMove);

let randomFraction = Math.random();

printMessage('Wylosowany ułamek to: ' + randomFraction);

let calculation = randomFraction * 3 + 1;

printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);

let roundNumber = Math.floor(calculation);

printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);

if(roundNumber == '1'){
  printMessage('Komputer wylosował kamień')
} else if (roundNumber == '2') {
  printMessage('Komputer wylosował paier')
} else if (roundNumber == '3') {
  printMessage('Komputer wylosował nożyce')
} else {
  printMessage('Komputer nie wylosował nic')
}

if( roundNumber == '1' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if ( roundNumber == '2' && playerMove == 'nozyce'){
  printMessage('Ty wygrywasz!');
} else if ( roundNumber == '3' && playerMove == 'kamien'){
  printMessage('Ty wygrywasz!');
} else if ( roundNumber == '1' && playerMove == 'nozyce'){
  printMessage('Ty przegrywasz!');
} else if ( roundNumber == '2' && playerMove == 'kamien'){
  printMessage('Ty przegrywasz!');
} else if ( roundNumber == '3' && playerMove == 'papier'){
  printMessage('Ty przegrywasz!');
} else if ( roundNumber == '2' && playerMove == 'papier'){
  printMessage('Jest Remis!');
} else if ( roundNumber == '1' && playerMove == 'kamien'){
  printMessage('Jest Remis!');
} else if ( roundNumber == '3' && playerMove == 'nozyce'){
  printMessage('Jest Remis!');
} else {
  printMessage('Komputer nie wylosował nic')
}
