/** Created by snow-dev: titor on 25/12/19 **/

/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {shallow} from 'enzyme';
import {HomeComponent} from '../HomeComponent';

/** Components section import **/

describe('HomeComponent.test', () => {
	let wrapper;
	
	/**
	 * For each test, we wrap component with Root (Provider).
	 */
	beforeEach(() => {
		wrapper = shallow(
			<HomeComponent />,
		);
	});
	
	
	/**
	 * After each test we unmount component, to avoid garbage on the next tests.
	 */
	afterEach(() => {
		wrapper.unmount();
	});
	
	it('should render a div with class .home', () => {
		expect(wrapper.find('.home').length).toEqual(1);
	});
});
