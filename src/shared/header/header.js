import React from 'react';
import { render } from 'react-dom';

export default class Header extends React.Component {

    render(){
        return (
            <header className="navbar navbar-inverse navbar-fixed-top wet-asphalt" role="banner">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" /></a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages <i className="icon-angle-down"></i></a>
                                <ul className="dropdown-menu">
                                    <li><a href="career.html">Career</a></li>
                                    <li><a href="blog-item.html">Blog Single</a></li>
                                    <li><a href="pricing.html">Pricing</a></li>
                                    <li><a href="404.html">404</a></li>
                                    <li><a href="registration.html">Registration</a></li>
                                    <li className="divider"></li>
                                    <li><a href="privacy.html">Privacy Policy</a></li>
                                    <li><a href="terms.html">Terms of Use</a></li>
                                </ul>
                            </li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact-us.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}
