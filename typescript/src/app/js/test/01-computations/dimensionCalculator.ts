
export class DimensionCalculator {
	
	public getArea( length:number, breadth:number): number) {

		return length * breadth;
	}

	public getPerimeter( length: number, breadth:number): number {

		return 2 * (length + breadth )
	}
	
}
