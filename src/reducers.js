import { combineReducers } from 'redux';

import home from './home/home-reducer';
import pricing from './page/pricing/pricing-reducer';

export default combineReducers({
    home,
    pricing
});
