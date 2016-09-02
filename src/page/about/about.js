import React from 'react';
import { render } from 'react-dom';

import Page from '../page';

export default class About extends React.Component {

    render(){
        return (
            <Page>
                <section id="about-us" className="container body-section">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>What we are</h2>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. ClassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
                        </div>
                        <div className="col-sm-6">
                            <h2>Our Skills</h2>
                            <div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                                        <span>HTML/CSS</span>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                                        <span>Wordpress</span>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}>
                                        <span>Joomla</span>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{width: "55%"}}>
                                        <span>Drupal</span>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}>
                                        <span>PHP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="gap"></div>
                    <h1 className="center">Meet the Team</h1>
                    <p className="lead center">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <div className="gap"></div>

                    <div id="meet-the-team" className="row">
                        <div className="col-md-3 col-xs-6">
                            <div className="center">
                                <p><img className="img-responsive img-thumbnail img-circle" src="images/team-member.jpg" alt="" /></p>
                                <h5>David J. Robbins<small className="designation muted">Senior Vice President</small></h5>
                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</p>
                                <a className="btn btn-social btn-facebook" href="#"><i className="icon-facebook"></i></a> <a className="btn btn-social btn-google-plus" href="#"><i className="icon-google-plus"></i></a> <a className="btn btn-social btn-twitter" href="#"><i className="icon-twitter"></i></a> <a className="btn btn-social btn-linkedin" href="#"><i className="icon-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-6">
                            <div className="center">
                                <p><img className="img-responsive img-thumbnail img-circle" src="images/team-member.jpg" alt="" /></p>
                                <h5>David J. Robbins<small className="designation muted">Senior Vice President</small></h5>
                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</p>
                                <a className="btn btn-social btn-facebook" href="#"><i className="icon-facebook"></i></a> <a className="btn btn-social btn-google-plus" href="#"><i className="icon-google-plus"></i></a> <a className="btn btn-social btn-twitter" href="#"><i className="icon-twitter"></i></a> <a className="btn btn-social btn-linkedin" href="#"><i className="icon-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <div className="center">
                                <p><img className="img-responsive img-thumbnail img-circle" src="images/team-member.jpg" alt="" /></p>
                                <h5>David J. Robbins<small className="designation muted">Senior Vice President</small></h5>
                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</p>
                                <a className="btn btn-social btn-facebook" href="#"><i className="icon-facebook"></i></a> <a className="btn btn-social btn-google-plus" href="#"><i className="icon-google-plus"></i></a> <a className="btn btn-social btn-twitter" href="#"><i className="icon-twitter"></i></a> <a className="btn btn-social btn-linkedin" href="#"><i className="icon-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <div className="center">
                                <p><img className="img-responsive img-thumbnail img-circle" src="images/team-member.jpg" alt="" /></p>
                                <h5>David J. Robbins<small className="designation muted">Senior Vice President</small></h5>
                                <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</p>
                                <a className="btn btn-social btn-facebook" href="#"><i className="icon-facebook"></i></a> <a className="btn btn-social btn-google-plus" href="#"><i className="icon-google-plus"></i></a> <a className="btn btn-social btn-twitter" href="#"><i className="icon-twitter"></i></a> <a className="btn btn-social btn-linkedin" href="#"><i className="icon-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
            </Page>
        );
    }
}
