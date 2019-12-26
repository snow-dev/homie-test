/** Created by snow-dev: titor on 25/12/19 **/

import { combineReducers } from 'redux';
import homesReducer from './homes/homesReducer';

export default combineReducers({
	homes: homesReducer,
});