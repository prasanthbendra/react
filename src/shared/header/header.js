import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default class Header extends React.Component {

    render(){
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
                        <ul class="nav navbar-nav navbar-right">
                            <li class="active"><Link to="">Home</Link></li>
                            <li><Link to="about">About Us</Link></li>
                            <li><Link to="services">Services</Link></li>
                            <li><Link to="portfolio">Portfolio</Link></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages <i class="icon-angle-down"></i></a>
                                <ul class="dropdown-menu">
                                    <li><Link to="career">Career</Link></li>
                                    <li><Link to="blog">Blog Single</Link></li>
                                    <li><Link to="pricing">Pricing</Link></li>
                                    <li><a href="404.html">404</a></li>
                                    <li><Link to="registration">Registration</Link></li>
                                    <li class="divider"></li>
                                    <li><Link to="privacy">Privacy Policy</Link></li>
                                    <li><Link to="terms">Terms of Use</Link></li>
                                </ul>
                            </li>
                            <li><Link to="blog">Blog</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}
