import React from 'react';
import { render } from 'react-dom';

export default class Services extends React.Component {

    render(){
        return (
            <section id="services" className="emerald body-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="media">
                                <div className="pull-left">
                                    <i className="icon-twitter icon-md"></i>
                                </div>
                                <div className="media-body">
                                    <h3 className="media-heading">Twitter Marketing</h3>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="media">
                                <div className="pull-left">
                                    <i className="icon-facebook icon-md"></i>
                                </div>
                                <div className="media-body">
                                    <h3 className="media-heading">Facebook Marketing</h3>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="media">
                                <div className="pull-left">
                                    <i className="icon-google-plus icon-md"></i>
                                </div>
                                <div className="media-body">
                                    <h3 className="media-heading">Google Plus Marketing</h3>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}



