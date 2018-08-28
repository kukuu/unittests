import { greet } from './greet';

describe('Greet', () => {
	
	it('It should include the name in the message', () => {
		expect(greet(mosh)).toBe("Welcome mosh");
	})
})