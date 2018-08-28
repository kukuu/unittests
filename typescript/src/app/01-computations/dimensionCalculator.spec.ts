
import { DimensionCalculator } from './dimensionCalculator';

describe('Dimension calculator', () => {
	
	it('Validate area is equal to 100', () => {

		let dimCalc: DimensionCalculator = new DimensionCalculator;
		
		//const area = dimCalc(3, 9);
		const area = dimCalc(20, 5);

		expect(area)toBe(100);


	})
})