import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from '../src/app';
import Home from '../src/home/home';
import { About, Services, Portfolio, Contact } from '../src/page';

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="about" component={About}></Route>
            <Route path="services" component={Services}></Route>
            <Route path="portfolio" component={Portfolio}></Route>
            <Route path="contact" component={Contact}></Route>
        </Route>
    </Router>,
    document.getElementById('app')
);
