var prompt = require('prompt-sync').prompt;

console.log('You will need 2 players for this game.');

console.log('What is your name Player1?');
var Player1 = prompt();
console.log(Player1);

console.log('What is your name Player2?');
var Player2 = prompt();

var tictactoe = [
[' ',' ',' '],
[' ',' ',' '],
[' ',' ',' ']
];

var currentPlayer = 'x'
var isValid = false;
var hasWinner = false;

// var victoryPlayer1 = false;
// var victoryPlayer2 = false;

// do {
// 	do {
// 		console.log('What\'s your name' + Player1 '?');
// 		var Player1turn = prompt();
// 		var Player1Answer = Player1turn.split(' ');
// 		var x = parseInt(Player1TurnAnswer[0]-1);
// 		var y = parseInt(Player2TurnAnswer[0]-1);
// 	}

// 	while
// }
while (!hasWinner) {

	do { 
		console.log('It is now your move.')
		var move = prompt();
	    var smove = move.split(' ')
	    smove[0] = parseInt(smove[0]);
	    smove[1] = parseInt(smove[1]);

	    if(isNaN(smove[0]) || isNaN(smove[1])) {
	    	console.log('one of them is not a number');
	    }

	    else if((smove[0] < 1 || smove[0] > 3) || (smove[1] < 1 || smove[1] > 3)) {
	    	console.log('This move is not valid');
	    } else { 
	    	if(tictactoe[parseInt(smove[0])-1][parseInt(smove[1])-1] === ' '){
	    		isValid=true;
	    		tictactoe[parseInt(smove[0])-1][parseInt(smove[1])-1] = currentPlayer;
	    		if(currentPlayer === 'x'){
	    			currentPlayer = 'o';
	    			console.log('It is now player ' +Player2+ ' turn.')
	    		}
	    		else if(currentPlayer === 'o') {
	    			currentPlayer = 'x';
	    			console.log('It is now player ' +Player1+ ' turn.')
	    		} 
	    		console.log(tictactoe[0]);	
	    		console.log(tictactoe[1]);	
	    		console.log(tictactoe[2]);	
	    	} else {
	    		console.log('That spot is already taken');
	    		console.log(tictactoe[0]);	
	    		console.log(tictactoe[1]);	
	    		console.log(tictactoe[2]);	
	    	}
	    }
	} while (!isValid);
	isValid = false;

	if(tictactoe[0][0] !== ' ' && tictactoe[0][0] === tictactoe[0][1] && tictactoe[0][1] === tictactoe[0][2]){
		hasWinner === true;
		console.log('there\'s a winner');
	} 
		else if (tictactoe[0][0] !== ' ' && tictactoe[0][0]=== tictactoe[1][0] && tictactoe[0][0] === tictactoe[2][0]){
		hasWinner === true;
		console.log('there\'s a winner');
	} 
		else if(tictactoe[1][0] !== ' ' && tictactoe[1][0] === tictactoe[1][1] && tictactoe[1][0] === tictactoe[1][2]){
		hasWinner === true;
		console.log('there\'s a winner');
	} 

		else if(tictactoe[2][0] !== ' ' && tictactoe[2][0] === tictactoe[2][1] && tictactoe[2][0] === tictactoe[2][2])
		{
		hasWinner === true;
		console.log('there\'s a winner');
	} 

		else if(tictactoe[0][1] !== ' ' && tictactoe[0][1] === tictactoe[1][1] && tictactoe[0][1] === tictactoe[2][1])
		{
		hasWinner === true;
		console.log('there\'s a winner');
	} 

		else if(tictactoe[0][2] !== ' ' && tictactoe[0][2]=== tictactoe[1][2] && tictactoe[0][2] === tictactoe[2][2])
		{
		hasWinner === true;
		console.log('there\'s a winner');
	} 

		/*else if(tictactoe[0][0] === tictactoe[1[1] && tictactoe[0][0] === tictactoe[2][2]){
		hasWinner === true;
		console.log('there\'s a winner');
	} */

		else if(tictactoe[0][2] !== ' ' && tictactoe[0][2]=== tictactoe[1][1] && tictactoe[0][2] === tictactoe[2][0])
		{
		hasWinner === true;
		console.log('there\'s a winner');
	}

		/*else if(tictactoe[2][2] === tictactoe[0[0] && tictactoe[2][2] === tictactoe[1][1])
		{ 
		hasWinner === true;
		console.log('there\'s a winner');
	} */



	/*if(tictactoe[0][0] === tictactoe[0][1] && tictactoe[0][0] === tictactoe[0][2] ||
	   tictactoe[0][0] === tictactoe[1][0] && tictactoe[0][0] === tictactoe[2][0] ||
	   tictactoe[1][0] === tictactoe[1][1] && tictactoe[1][0] === tictactoe[1][2] ||
       tictactoe[0][0] === tictactoe[1][0] && tictactoe[0][0] === tictactoe[2][0] ||
       tictactoe[0][0] === tictactoe[1][0] && tictactoe[0][0] === tictactoe[2][0] ||
       tictactoe[0][0] === tictactoe[1][0] && tictactoe[0][0] === tictactoe[2][0] ||
       tictactoe[0][0] === tictactoe[1][0] && tictactoe[0][0] === tictactoe[2][0] ||
       tictactoe[0][0] === tictactoe[1][0] && tictactoe[0][0] === tictactoe[2][0] ||
       
       
      {
		hasWinner === true;
		console.log('there\'s a winner');
	}*/

}



