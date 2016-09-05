import { combineReducers } from 'redux';

import home from './home/home-reducer';
import about from './page/about/about-reducer';
import pricing from './page/pricing/pricing-reducer';

export default combineReducers({
    home,
    about,
    pricing
});
