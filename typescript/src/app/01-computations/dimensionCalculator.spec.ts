
import { DimensionCalculator } from './dimensionCalculator';

describe('Dimension calculator', () => {
	
	it('Validate area is equal to 100', () => {

		let dimCalc: DimensionCalculator = new DimensionCalculator;
		
		//const area = dimCalc.getArea(3, 9);
		const area = dimCalc.getArea(20, 5);

		expect(area)toBe(100);


	});


	it('Perimeter area is equal to 100', () => {

		let dimCalc: DimensionCalculator = new DimensionCalculator;
		
		//const area = dimCalc.getPerieter(4, 19);
		const area = dimCalc.getPerimeter(20, 5);

		expect(area)toBe(100);


	})
})