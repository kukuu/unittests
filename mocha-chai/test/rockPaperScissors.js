
module.exports = function(user, comp){
	//Note: user can be rock,paper scissors
	//comp can also be rock, paper or scissors

	//1. both players play the same thing
	if(user === user){
		return "draw";
	}

	//2. Condition where "user" wins
	if((user == 'rock' && comp === 'scissors') || 
		(user === 'paper' && comp == 'rock') || 
		(user === 'scissors' && comp === 'paper') {
			return 'user';
	}

	//2. Condition where computer, "comp" wins
	return 'comp';
};
