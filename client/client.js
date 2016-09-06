import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from '../src/store'
import App from '../src/app';
import Home from '../src/home/home';
import Blog from '../src/blog/blog';
import {
    About,
    Services,
    Portfolio,
    Contact,
    Career,
    Pricing,
    Registration,
    Privacy,
    Terms,
    NotFound
} from '../src/page';

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={ App }>
                <IndexRoute component={ Home }></IndexRoute>
                <Route path="about" component={ About }></Route>
                <Route path="services" component={ Services }></Route>
                <Route path="portfolio" component={ Portfolio }></Route>
                <Route path="contact" component={ Contact }></Route>
                <Route path="career" component={ Career }></Route>
                <Route path="pricing" component={ Pricing }></Route>
                <Route path="registration" component={ Registration }></Route>
                <Route path="privacy" component={ Privacy }></Route>
                <Route path="terms" component={ Terms }></Route>
                <Route path="blog(/:title)" component={ Blog }></Route>
                <Route path="*" component={ NotFound } />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
