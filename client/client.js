import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from '../src/app';
import Home from '../src/home/home';
import About from '../src/home/home';
import Services from '../src/home/home';
import Portfolio from '../src/home/home';

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="about" component={About}></Route>
            <Route path="services" component={Services}></Route>
            <Route path="portfolio" component={Portfolio}></Route>
        </Route>
    </Router>,
    document.getElementById('app')
);
