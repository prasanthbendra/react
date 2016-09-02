import React from 'react';
import { render } from 'react-dom';

export default class Bottom extends React.Component {

    render(){
        return (
            <section id="bottom" className="wet-asphalt body-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>About Us</h4>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
                            <p>Pellentesque habitant morbi tristique senectus.</p>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h4>Company</h4>
                            <div>
                                <ul className="arrow">
                                    <li><a href="#">Company Overview</a></li>
                                    <li><a href="#">Meet The Team</a></li>
                                    <li><a href="#">Our Awesome Partners</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Frequently Asked Questions</a></li>
                                    <li><a href="#">Conatct Us</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Use</a></li>
                                    <li><a href="#">Copyright</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h4>Latest Blog</h4>
                            <div>
                                <div className="media">
                                    <div className="pull-left">
                                        <img src="images/blog/thumb1.jpg" alt="" />
                                    </div>
                                    <div className="media-body">
                                        <span className="media-heading"><a href="#">Pellentesque habitant morbi tristique senectus</a></span>
                                        <small className="muted">Posted 17 Aug 2013</small>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="pull-left">
                                        <img src="images/blog/thumb2.jpg" alt="" />
                                    </div>
                                    <div className="media-body">
                                        <span className="media-heading"><a href="#">Pellentesque habitant morbi tristique senectus</a></span>
                                        <small className="muted">Posted 13 Sep 2013</small>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="pull-left">
                                        <img src="images/blog/thumb3.jpg" alt="" />
                                    </div>
                                    <div className="media-body">
                                        <span className="media-heading"><a href="#">Pellentesque habitant morbi tristique senectus</a></span>
                                        <small className="muted">Posted 11 Jul 2013</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h4>Address</h4>
                            <address>
                                <strong>Twitter, Inc.</strong>
                                <br /> 795 Folsom Ave, Suite 600
                                <br /> San Francisco, CA 94107
                                <br />
                                <abbr title="Phone">P:</abbr> (123) 456-7890
                            </address>
                            <h4>Newsletter</h4>
                            <form role="form">
                                <div className="input-group">
                                    <input type="text" className="form-control" autocomplete="off" placeholder="Enter your email" />
                                    <span className="input-group-btn">
                                    <button className="btn btn-danger" type="button">Go!</button>
                                </span>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}



