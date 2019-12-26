/** Created by snow-dev: titor on 25/12/19 **/

import * as homeActions from './homeActions';
import {fromJS} from 'immutable';

const initialState = (fromJS({
	is_requesting   : false,
	finish_request  : false,
	homes           : []
}));

/**
 * This reducer stores all data and flags related to homes data.
 * @param state
 * @param action
 * @returns {any}
 */
const homesReducer = (state = initialState, action) => {
	switch (action.type) {
		// case 0: turn on is requesting flag.
		case homeActions.START_REQUEST: {
			return state.merge({
				is_requesting   : true,
			});
		}
		// Set API response data on global state.
		case homeActions.SET_HOME_DATA: {
			return state.merge({
				is_requesting   : false,
				finish_request  : true,
				homes           : action.data,
			});
		}
		//-> Default case.
		default:
			return state;
	}
};

export default homesReducer;