import AppDispatcher from "../AppDispatcher";
import ActionTypes from "../constants/actionTypes";
import EventTypes from "../constants/eventTypes";
import { EventEmitter } from "events";
import { AsyncStorage } from "react-native";

var CurrencySelectionStore = Object.assign({}, EventEmitter.prototype, {
	currencies: { fromCurrency: "EUR", toCurrency: "USD" }
});

AppDispatcher.register(function(payload) {
	switch (payload.actionName) {
		case ActionTypes.SELECT_CURRENCIES:
			CurrencySelectionStore.currencies = payload.data;
			CurrencySelectionStore.emit(EventTypes.CURRENCIES_CHANGED);
			break;
	}
});

function getCurrencies() {
	return CurrencySelectionStore.currencies;
}

module.exports = { getCurrencies, CurrencySelectionStore };
