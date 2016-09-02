import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

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
                            <li className="active"><Link to="">Home</Link></li>
                            <li><Link to="about">About Us</Link></li>
                            <li><Link to="services">Services</Link></li>
                            <li><Link to="portfolio">Portfolio</Link></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages <i className="icon-angle-down"></i></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="career">Career</Link></li>
                                    <li><Link to="blog">Blog Single</Link></li>
                                    <li><Link to="pricing">Pricing</Link></li>
                                    <li><a href="404.html">404</a></li>
                                    <li><Link to="registration">Registration</Link></li>
                                    <li className="divider"></li>
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
