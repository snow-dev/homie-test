/** Created by snow-dev: titor on 25/12/19 **/

import React, {useEffect} from 'react';
import * as homeActions from '../../store/homes/homeActions';
import { useDispatch, useSelector } from 'react-redux';
import {HomeComponent} from './HomeComponent';

const HomeContainer = () => {
	const homes         = useSelector(state => state.homes);
	
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(homeActions.requestHomesData())
	}, [dispatch]);
	
	return <HomeComponent homes={homes}/>;
};

export default HomeContainer;