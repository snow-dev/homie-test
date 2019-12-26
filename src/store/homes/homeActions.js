/** Created by snow-dev: titor on 25/12/19 **/


import axios from 'axios';

export const START_REQUEST = 'START_REQUEST';
export const SET_HOME_DATA = 'SET_HOME_DATA';


/**
 * Generic action creator for start any kind of action
 * @param type
 * @returns {{type: *}}
 */
export const startProcess = (type) => {
	return {
		type: type,
	}
};

/**
 * Generic action creator for
 * @param type
 * @param data
 * @returns {{data: *, type: *}}
 */
export const setDataToStore = (type, data) => {
	return {
		type: type,
		data: data,
	}
};


/**
 * Action that will request all home data from API.
 * @returns {Function}
 */
export const requestHomesData = () => {
	return function (dispatch) {
		dispatch(startProcess(START_REQUEST));
		// Setup
		let url = "https://us-central1-homie-front-test.cloudfunctions.net/homes";
		
		// When
		axios.get(url).then(response => {
			console.debug("homesActions: requestHomesData <=> Response: ", response.data.homes);
			dispatch(setDataToStore(SET_HOME_DATA, response.data.homes));
		}).catch(error =>{
			console.error("homesActions: requestHomesData <=> Error: ", error);
		});
	}
};