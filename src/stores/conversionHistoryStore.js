import AppDispatcher from "../AppDispatcher";
import ActionTypes from "../constants/actionTypes";
import EventTypes from "../constants/eventTypes";
import { EventEmitter } from "events";
import { AsyncStorage } from "react-native";

var ConversionHistoryStore = Object.assign({}, EventEmitter.prototype, {
	items: []
});

// Load last saved conversions from device storage
ConversionHistoryStore.items = AsyncStorage.getItem(
	"@ConversionHistoryStore:items"
).then(value => {
	if (value == null) {
		ConversionHistoryStore.items = [];
	} else {
		ConversionHistoryStore.items = JSON.parse(value);
	}
});

AppDispatcher.register(function(payload) {
	switch (payload.actionName) {
		case ActionTypes.ADD_CONVERSION_TO_HISTORY:
			// Inserts the item to the beginning of the array so user
			// sees the last inserted item at the top ot the list.
			ConversionHistoryStore.items.unshift(payload.data);
			// Updates the device storage
			AsyncStorage.setItem(
				"@ConversionHistoryStore:items",
				JSON.stringify(ConversionHistoryStore.items)
			);
			ConversionHistoryStore.emit(EventTypes.CONVERSION_HISTORY_CHANGED);
			break;
	}
});

function getItems() {
	return ConversionHistoryStore.items;
}

module.exports = { getItems, ConversionHistoryStore };
