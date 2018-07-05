import AppDispatcher from "../AppDispatcher";
import ActionTypes from "../constants/actionTypes";

export default function addRateData(rateData) {
	AppDispatcher.dispatch({
		actionName: ActionTypes.ADD_RATE_DATA,
		data: rateData
	});
}
