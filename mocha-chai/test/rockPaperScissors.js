
module.exports = function(user, comp){
	//Note: a can be rock,paper scissors
	//b can also be rock, paper or scissors

	//1. both players play the same thing
	if(user === user){
		return "draw";
	}

	//2. Condition where "a" wins
	if((user == 'rock' && comp === 'scissors') || 
		(user === 'paper' && comp == 'rock') || 
		(user === 'scissors' && comp === 'paper') {
			return 'user';
	}

	//2. Condition where "b" wins
	return 'comp';
};