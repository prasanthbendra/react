import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default class Footer extends React.Component {

    render(){
        return (
            <footer id="footer" class="midnight-blue">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            &copy; 2013 <a target="_blank" href="http://shapebootstrap.net/" title="Free Twitter Bootstrap WordPress Themes and HTML templates">ShapeBootstrap</a>. All Rights Reserved.
                        </div>
                        <div class="col-sm-6">
                            <ul class="pull-right">
                                <li><Link to="">Home</Link></li>
                                <li><Link to="about">About Us</Link></li>
                                <li><Link to="faq">Faq</Link></li>
                                <li><Link to="contact">Contact Us</Link></li>
                                <li><a id="gototop" class="gototop" href="#"><i class="icon-chevron-up"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
