function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let computerMove = `kamień`;
let playermove = "paier" ;

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to ' + playermove + ', to wygrywasz!');