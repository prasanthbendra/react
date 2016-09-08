import { expect } from 'chai';
import { shallow } from 'enzyme';
import { createRenderer } from 'react-addons-test-utils';

import React from 'react';
import { Provider } from 'react-redux';

import { Page } from '../page';
import Blog from './blog';

describe("Pricing component", () => {
    it("Should render", () => {
    	const wraper = shallow(<Blog />);
    	console.log(wraper);
    });
})
