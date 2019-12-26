/** Created by snow-dev: titor on 25/12/19 **/



import {applyMiddleware, createStore} from 'redux';
import rootReducer from './RootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import React from 'react';

const store = createStore(rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk),
	)
);


export default (props) => (
	<Provider store={store}>
		{props.children}
	</Provider>
);