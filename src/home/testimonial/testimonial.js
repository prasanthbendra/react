import React from 'react';
import { render } from 'react-dom';

export default class Testimonial extends React.Component {

    render(){
        return (
            <section id="testimonial" className="alizarin body-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="center">
                                <h2>What our clients say</h2>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            </div>
                            <div className="gap"></div>
                            <div className="row">
                                <div className="col-md-6">
                                    <blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                                    </blockquote>
                                    <blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                                    </blockquote>
                                </div>
                                <div className="col-md-6">
                                    <blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                                    </blockquote>
                                    <blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}



