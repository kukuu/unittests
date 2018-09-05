
export class CounterComponent (

	public counter: number = 0;
	public countries: Array<string> = ["INDIA", "US", "JAPAN", "FRANCE"];

	public incremmentCounter(): number (

		this.counter++;

		return this.counter;

	)

	public decrementCounter(): number {

		this.counter--:

		return this.counter;
	}

)