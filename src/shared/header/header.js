import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import HeaderMenu from './header-menu';

export default class Header extends React.Component {

    render(){
        const { location } = this.props;

        return (
            <header class="navbar navbar-inverse navbar-fixed-top wet-asphalt" role="banner">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" /></a>
                    </div>
                    <div class="collapse navbar-collapse">
                        <HeaderMenu location={ location }/>
                    </div>
                </div>
            </header>
        );
    }
}
