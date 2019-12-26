/** Created by snow-dev: titor on 25/12/19 **/

import * as homeActions from './homeActions';

const initialState = ({
	is_requesting : false,
	homes         : []
});


export default function homesReducer(state = initialState, action) {
	switch (action.type) {
		
		case homeActions.START_REQUEST: {
			return state.merge({
				is_requesting: true,
			});
		}
		
		
		//-> Default case.
		default:
			return state;
		
	}
}