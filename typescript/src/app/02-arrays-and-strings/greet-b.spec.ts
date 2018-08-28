import { greet } from './greet-b';

describe('Greet', () => {
	
	it('It should include the name in the message', () => {
		expect(greet(mosh)).toContain("mosh");
	})
})