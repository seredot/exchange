import AppDispatcher from "../AppDispatcher";
import ActionTypes from "../constants/actionTypes";
import EventTypes from "../constants/eventTypes";
import { EventEmitter } from "events";
import { AsyncStorage } from "react-native";
import findParity from "../utils/findParity";

var RateHistoryStore = Object.assign({}, EventEmitter.prototype, {
	items: {},
	latest: {}
});

// Load last saved rates from device storage
RateHistoryStore.items = AsyncStorage.getItem(
	"@RateHistoryStore:items"
).then(value => {
	if (value == null) {
		RateHistoryStore.items = {};
	} else {
		RateHistoryStore.items = JSON.parse(value);
	}
});

AppDispatcher.register(function(payload) {
	switch (payload.actionName) {
		case ActionTypes.ADD_RATE_DATA:
			// Rate data is saved in a dictionary. Key of the dictionary is
			// time field of service response which represents the date of
			// the data. Since data changes daily we keep 1 record per day.
			RateHistoryStore.items[payload.data.time] = payload.data;
			RateHistoryStore.latest = payload.data;
			// Updates the device storage
			AsyncStorage.setItem(
				"@RateHistoryStore:items",
				JSON.stringify(RateHistoryStore.items)
			);
			RateHistoryStore.emit(EventTypes.RATE_HISTORY_CHANGED);
			break;
	}
});

function getItems() {
	return RateHistoryStore.items;
}

function getLatest() {
	return RateHistoryStore.latest;
}

function getRatesBetweenCurrencies(fromCurrency, toCurrency) {
	let result = [];
	for (let key in RateHistoryStore.items) {
		let item = RateHistoryStore.items[key];
		let parity = findParity(item.rates, fromCurrency, toCurrency).toFixed(4);
		result.push({date: item.time, parity: parity, fromCurrency, toCurrency});	
	}
	return result;
}

module.exports = { getItems, getLatest, getRatesBetweenCurrencies, RateHistoryStore };
