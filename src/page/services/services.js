import React from 'react';
import { render } from 'react-dom';

import Page from '../page';

export default class Services extends React.Component {

    render(){
        return (
            <Page>
                <section id="services" className="body-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="center gap">
                                    <h2>What we do</h2>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="media">
                                    <div className="pull-left">
                                        <i className="icon-windows icon-md"></i>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">Windows Development</h3>
                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="media">
                                    <div className="pull-left">
                                        <i className="icon-android icon-md"></i>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">Android Development</h3>
                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="media">
                                    <div className="pull-left">
                                        <i className="icon-apple icon-md"></i>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">iOS Development</h3>
                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gap"></div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="media">
                                    <div className="pull-left">
                                        <i className="icon-linux icon-md"></i>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">Linux Development</h3>
                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="media">
                                    <div className="pull-left">
                                        <i className="icon-dribbble icon-md"></i>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">Graphic Design</h3>
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
                                        <h3 className="media-heading">SEO Services</h3>
                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
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
                                    </div>
                                    <div className="col-md-6">
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
            </Page>
        );
    }
}
