
let rockPaperScissors = require('./rockPaperScissors.js');
let expect = require('chai').expect;

describe('rockPaperScissors', () => {
	
	//SMOKE test
	describe('smoke test', () => {
		it('should exist', () => {
			expect(rockPaperScissors).to.exist;
		});

		it('should be a function', () => {
			expect('rockPaperScissors').to.be.a('function');
		});
	});

	//DRAW
	describe('draw condition', () => {
		it('should return "draw" on "rock", "rock"', () => {
			expect(rockPaperScissors('rock','rock')).to.equal('draw');
		});

		it('should return "draw" on "paper", "paper"', () => {
			expect(rockPaperScissors('paper','paper')).to.equal('draw');
		});

		it('should return "draw" on "scissors", "scissors"', () => {
			expect(rockPaperScissors('scissors','scissors')).to.equal('draw');
		});	
	});


	//"user" wins
	describe('player "user" winning', () => {
		it('should return "user" on "rock", "scissors"', () => {
			expect(rockPaperScissors('rock','scissors')).to.equal('user');
		});

		it('should return "user" on "paper", "rock"', () => {
			expect(rockPaperScissors('paper','rock')).to.equal('user');
		});

		it('should return "user" on "scissors", "paper"', () => {
			expect(rockPaperScissors('scissors','paper')).to.equal('user');
		});	
	});


	//"comp" wins
	describe('player "comp" winning', () => {
		it('should return "comp" on "rock", "paper"', () => {
			expect(rockPaperScissors('rock','paper')).to.equal('comp');
		});

		it('should return "user" on "paper", "scissors"', () => {
			expect(rockPaperScissors('paper','scissors')).to.equal('comp');
		});

		it('should return "comp" on "scissors", "rock"', () => {
			expect(rockPaperScissors('scissors','rock')).to.equal('comp');
		});	

	});
})
