
import  { CounterComponent } from './counter';

describe('CounterComponent', () => {
	
	it('Returns a positive number', () => {

		let counter: CounterComponent = new CounterComponent;
		const result = counter.incremmentCounter();

		expect(result)tobeGreaterThan(0);
	})
})