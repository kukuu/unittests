
export class Counter (

	public counter: number = 0;

	public incremmentCounter(): number (

		this.counter++;

		return this.counter;

	)

	public decrementCounter(): number {

		this.counter--:

		return this.counter;
	}

)