import { getCurrencies } from './getCurrencies'

describe('getCurrencies', () => {
	
	it('It should return the supported currncies', () => {

	const result = getCurrencies();

	expect(result).toContain("US");
	expect(result).toContain("AUD");
	expect(result).toContain("EUR");
	
	})

})