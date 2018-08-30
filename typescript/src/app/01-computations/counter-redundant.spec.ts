
import  { CounterComponent } from './counter';

describe('CounterComponent', () => {

let counter: CounterComponent = new CounterComponent;
	
	it('Returns a positive number', () => {

		let counter: CounterComponent = new CounterComponent;
		const countValue = counter.incremmentCounter();

		expect(result)tobeGreaterThan(0);
	});

	it('Check for negative', () => {

		let counter: CounterComponent = new CounterComponent;
		const countValue = counter.decremmentCounter();

		expect(countValue)tobeLessThan(0);
	})
})