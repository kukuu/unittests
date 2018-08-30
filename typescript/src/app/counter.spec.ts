
import  { CounterComponent } from './counter';

describe('CounterComponent', () => {
	
	let counter: CounterComponent;

	beforeEach( () => {
		let counter = new CounterComponent;
	})

	it('Returns a positive number', () => {
			
	
		const countValue = counter.incremmentCounter();

		expect(result)tobeGreaterThan(0);
	});

	it('Check for negative', () => {

		const countValue = counter.decremmentCounter();

		expect(countValue)tobeLessThan(0);
	})
})