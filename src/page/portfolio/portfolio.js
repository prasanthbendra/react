import React from 'react';
import { render } from 'react-dom';

import Page from '../page';

export default class Portfolio extends React.Component {

    render(){
        return (
            <Page>
                <section id="portfolio" className="container body-section">
                    <ul className="portfolio-filter">
                        <li><a className="btn btn-default active" href="#" data-filter="*">All</a></li>
                        <li><a className="btn btn-default" href="#" data-filter=".bootstrap">Bootstrap</a></li>
                        <li><a className="btn btn-default" href="#" data-filter=".html">HTML</a></li>
                        <li><a className="btn btn-default" href="#" data-filter=".wordpress">Wordpress</a></li>
                    </ul>

                    <ul className="portfolio-items col-3">
                        <li className="portfolio-item apps">
                            <div className="item-inner">
                                <img src="images/portfolio/thumb/item1.jpg" alt="" />
                                <h5>Lorem ipsum dolor sit amet</h5>
                                <div className="overlay">
                                    <a className="preview btn btn-danger" href="images/portfolio/full/item1.jpg" rel="prettyPhoto"><i className="icon-eye-open"></i></a>
                                </div>
                            </div>
                        </li>
                        <li className="portfolio-item joomla bootstrap">
                            <div className="item-inner">
                                <img src="images/portfolio/thumb/item2.jpg" alt="" />
                                <h5>Lorem ipsum dolor sit amet</h5>
                                <div className="overlay">
                                    <a className="preview btn btn-danger" href="images/portfolio/full/item2.jpg" rel="prettyPhoto"><i className="icon-eye-open"></i></a>
                                </div>
                            </div>
                        </li>
                        <li className="portfolio-item bootstrap wordpress">
                            <div className="item-inner">
                                <img src="images/portfolio/thumb/item3.jpg" alt="" />
                                <h5>Lorem ipsum dolor sit amet</h5>
                                <div className="overlay">
                                    <a className="preview btn btn-danger" href="images/portfolio/full/item3.jpg" rel="prettyPhoto"><i className="icon-eye-open"></i></a>
                                </div>
                            </div>
                        </li>
                        <li className="portfolio-item joomla wordpress apps">
                            <div className="item-inner">
                                <img src="images/portfolio/thumb/item4.jpg" alt="" />
                                <h5>Lorem ipsum dolor sit amet</h5>
                                <div className="overlay">
                                    <a className="preview btn btn-danger" href="images/portfolio/full/item4.jpg" rel="prettyPhoto"><i className="icon-eye-open"></i></a>
                                </div>
                            </div>
                        </li>
                        <li className="portfolio-item joomla html">
                            <div className="item-inner">
                                <img src="images/portfolio/thumb/item5.jpg" alt="" />
                                <h5>Lorem ipsum dolor sit amet</h5>
                                <div className="overlay">
                                    <a className="preview btn btn-danger" href="images/portfolio/full/item5.jpg" rel="prettyPhoto"><i className="icon-eye-open"></i></a>
                                </div>
                            </div>
                        </li>
                        <li className="portfolio-item wordpress html">
                            <div className="item-inner">
                                <img src="images/portfolio/thumb/item6.jpg" alt="" />
                                <h5>Lorem ipsum dolor sit amet</h5>
                                <div className="overlay">
                                    <a className="preview btn btn-danger" href="images/portfolio/full/item6.jpg" rel="prettyPhoto"><i className="icon-eye-open"></i></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            </Page>
        );
    }
}
