/** Created by snow-dev: titor on 25/12/19 **/


export const START_REQUEST = 'START_REQUEST';


/**
 * Generic action creator for start any kind of action
 * @param type
 * @returns {{type: *}}
 */
export function startProcess(type) {
	return {
		type: type,
	}
}


/**
 * Action that will request all home data from API.
 * @returns {Function}
 */
export function requestHomesData() {
	return function (dispatch) {
		dispatch(startProcess(START_REQUEST));
	}
}