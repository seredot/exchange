export default function findRate(rates, currency) {
	if (currency === 'EUR')
		return 1;

	for (r in rates) {
		if (rates[r].currency === currency) {
			return parseFloat(rates[r].rate)
		}
	}
	
	throw new Error("Invalid data.")
}