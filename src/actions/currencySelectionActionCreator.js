import AppDispatcher from "../AppDispatcher";
import ActionTypes from "../constants/actionTypes";

export default function selectCurrencies(fromCurrency, toCurrency) {
	AppDispatcher.dispatch({
		actionName: ActionTypes.SELECT_CURRENCIES,
		data: { fromCurrency, toCurrency }
	});
}
