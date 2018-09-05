
import { VoteComponent } from 'vote.component';

describe('VoteComponent', () => {

	let component: VoteComponent; //type

	beforeEach( () => {
		component = new Component; //Initialisation
	})



	it('It should increment totalVotes when upVoted', () => {

		component.upVote();

		expect(component.totalvote).toBe(1);

	});

	it('It should decrement totalVotes when downvoted', () => {


		component.downVote();

		expect(component.totalvote).toBe(-1);

	});
})