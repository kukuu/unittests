
import { VoteComponent } from 'vote.component';

describe('VoteComponent', () => {
	
	it('It should increment totalVotes when upVoted', () => {

		//Arrange
		let component = new VoteComponent; // Instantiate an Object from the clas

		//Act - call a method on the instantiated oblect
		component.upVote();

		//Assertion
		expect(component.totalvote).toBe(1);

	});

	it('It should decrement totalVotes when downvoted', () => {

		let component = new VoteComponent; // Instantiate an Object from the clas

		component.downVote();

		expect(component.totalvote).toBe(-1);

	});
})