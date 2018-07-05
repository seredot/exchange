import findRate from "./findRate";

export default function findParity(rates, fromCurrency, toCurrency) {
	return findRate(rates, toCurrency) / findRate(rates, fromCurrency);
}
