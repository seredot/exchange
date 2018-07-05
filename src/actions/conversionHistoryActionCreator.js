import AppDispatcher from "../AppDispatcher";
import ActionTypes from "../constants/actionTypes";

export function addConversionToHistory(
	date,
	fromCurrency,
	fromAmount,
	toCurrency,
	toAmount
) {
	AppDispatcher.dispatch({
		actionName: ActionTypes.ADD_CONVERSION_TO_HISTORY,
		data: {
			date,
			fromCurrency,
			fromAmount,
			toCurrency,
			toAmount
		}
	});
}
