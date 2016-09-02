import React from 'react';
import { render } from 'react-dom';

import Page from '../page';

export default class Pricing extends React.Component {

    render(){
        return (
            <Page>
                <section id="pricing" className="body-section">
                    <div className="container">
                        <div className="center">
                            <h2>See our Pricings</h2>
                            <p className="lead">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </div>
                        <div className="gap"></div>
                        <div id="pricing-table" className="row">
                            <div className="col-md-3 col-xs-6">
                                <ul className="plan plan1">
                                    <li className="plan-name">
                                        <h3>Basic</h3>
                                    </li>
                                    <li className="plan-price">
                                        <div>
                                            <span className="price"><sup>$</sup>29</span>
                                            <small>month</small>
                                        </div>
                                    </li>
                                    <li>
                                        <strong>5GB</strong> Storage
                                    </li>
                                    <li>
                                        <strong>1GB</strong> RAM
                                    </li>
                                    <li>
                                        <strong>400GB</strong> Bandwidth
                                    </li>
                                    <li>
                                        <strong>10</strong> Email Address
                                    </li>
                                    <li>
                                        <strong>Forum</strong> Support
                                    </li>
                                    <li className="plan-action">
                                        <a href="#" className="btn btn-primary btn-md">Signup</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <ul className="plan plan2 featured">
                                    <li className="plan-name">
                                        <h3>Standard</h3>
                                    </li>
                                    <li className="plan-price">
                                        <div>
                                            <span className="price"><sup>$</sup>39</span>
                                            <small>month</small>
                                        </div>
                                    </li>
                                    <li>
                                        <strong>5GB</strong> Storage
                                    </li>
                                    <li>
                                        <strong>1GB</strong> RAM
                                    </li>
                                    <li>
                                        <strong>400GB</strong> Bandwidth
                                    </li>
                                    <li>
                                        <strong>10</strong> Email Address
                                    </li>
                                    <li>
                                        <strong>Forum</strong> Support
                                    </li>
                                    <li className="plan-action">
                                        <a href="#" className="btn btn-primary btn-md">Signup</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <ul className="plan plan3">
                                    <li className="plan-name">
                                        <h3>Advanced</h3>
                                    </li>
                                    <li className="plan-price">
                                        <div>
                                            <span className="price"><sup>$</sup>49</span>
                                            <small>month</small>
                                        </div>
                                    </li>
                                    <li>
                                        <strong>50GB</strong> Storage
                                    </li>
                                    <li>
                                        <strong>8GB</strong> RAM
                                    </li>
                                    <li>
                                        <strong>1024GB</strong> Bandwidth
                                    </li>
                                    <li>
                                        <strong>Unlimited</strong> Email Address
                                    </li>
                                    <li>
                                        <strong>Forum</strong> Support
                                    </li>
                                    <li className="plan-action">
                                        <a href="#" className="btn btn-primary btn-md">Signup</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <ul className="plan plan4">
                                    <li className="plan-name">
                                        <h3>Mighty</h3>
                                    </li>
                                    <li className="plan-price">
                                        <div>
                                            <span className="price"><sup>$</sup>99</span>
                                            <small>month</small>
                                        </div>
                                    </li>
                                    <li>
                                        <strong>50GB</strong> Storage
                                    </li>
                                    <li>
                                        <strong>8GB</strong> RAM
                                    </li>
                                    <li>
                                        <strong>1024GB</strong> Bandwidth
                                    </li>
                                    <li>
                                        <strong>Unlimited</strong> Email Address
                                    </li>
                                    <li>
                                        <strong>Forum</strong> Support
                                    </li>
                                    <li className="plan-action">
                                        <a href="#" className="btn btn-primary btn-md">Signup</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Page>
        );
    }
}
