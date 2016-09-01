import React from 'react';
import { render } from 'react-dom';

export default class Footer extends React.Component {

    render(){
        return (
            <footer id="footer" className="midnight-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            &copy; 2013 <a target="_blank" href="http://shapebootstrap.net/" title="Free Twitter Bootstrap WordPress Themes and HTML templates">ShapeBootstrap</a>. All Rights Reserved.
                        </div>
                        <div className="col-sm-6">
                            <ul className="pull-right">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Faq</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a id="gototop" className="gototop" href="#"><i className="icon-chevron-up"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}



