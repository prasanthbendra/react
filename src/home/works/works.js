import React from 'react';
import { render } from 'react-dom';

export default class Works extends React.Component {

    render(){
        return (
            <section id="recent-works" className="body-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h3>Our Latest Project</h3>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            <div className="btn-group">
                                <a className="btn btn-danger" href="#scroller" data-slide="prev"><i className="icon-angle-left"></i></a>
                                <a className="btn btn-danger" href="#scroller" data-slide="next"><i className="icon-angle-right"></i></a>
                            </div>
                            <p className="gap"></p>
                        </div>
                        <div className="col-md-9">
                            <div id="scroller" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <div className="row">
                                            <div className="col-xs-4">
                                                <div className="portfolio-item">
                                                    <div className="item-inner">
                                                        <img className="img-responsive" src="images/portfolio/recent/item1.png" alt="" />
                                                        <h5>
                                                        Nova - Corporate site template
                                                    </h5>
                                                        <div className="overlay">
                                                            <a className="preview btn btn-danger" title="Malesuada fames ac turpis egestas" href="images/portfolio/full/item1.jpg" rel="prettyPhoto"><i className="icon-eye-open"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-4">
                                                <div className="portfolio-item">
                                                    <div className="item-inner">
                                                        <img className="img-responsive" src="images/portfolio/recent/item3.png" alt="" />
                                                        <h5>
                                                        Fornax - Apps site template
                                                    </h5>
                                                        <div className="overlay">
                                                            <a className="preview btn btn-danger" title="Malesuada fames ac turpis egestas" href="images/portfolio/full/item1.jpg" rel="prettyPhoto"><i className="icon-eye-open"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-4">
                                                <div className="portfolio-item">
                                                    <div className="item-inner">
                                                        <img className="img-responsive" src="images/portfolio/recent/item2.png" alt="" />
                                                        <h5>
                                                        Flat Theme - Business Theme
                                                    </h5>
                                                        <div className="overlay">
                                                            <a className="preview btn btn-danger" title="Malesuada fames ac turpis egestas" href="images/portfolio/full/item1.jpg" rel="prettyPhoto"><i className="icon-eye-open"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="item">
                                        <div className="row">
                                            <div className="col-xs-4">
                                                <div className="portfolio-item">
                                                    <div className="item-inner">
                                                        <img className="img-responsive" src="images/portfolio/recent/item2.png" alt="" />
                                                        <h5>
                                                        Flat Theme - Business Theme
                                                    </h5>
                                                        <div className="overlay">
                                                            <a className="preview btn btn-danger" title="Malesuada fames ac turpis egestas" href="images/portfolio/full/item1.jpg" rel="prettyPhoto"><i className="icon-eye-open"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-4">
                                                <div className="portfolio-item">
                                                    <div className="item-inner">
                                                        <img className="img-responsive" src="images/portfolio/recent/item1.png" alt="" />
                                                        <h5>
                                                        Nova - Corporate site template
                                                    </h5>
                                                        <div className="overlay">
                                                            <a className="preview btn btn-danger" title="Malesuada fames ac turpis egestas" href="images/portfolio/full/item1.jpg" rel="prettyPhoto"><i className="icon-eye-open"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-4">
                                                <div className="portfolio-item">
                                                    <div className="item-inner">
                                                        <img className="img-responsive" src="images/portfolio/recent/item3.png" alt="" />
                                                        <h5>
                                                        Fornax - Apps site template
                                                    </h5>
                                                        <div className="overlay">
                                                            <a className="preview btn btn-danger" title="Malesuada fames ac turpis egestas" href="images/portfolio/full/item1.jpg" rel="prettyPhoto"><i className="icon-eye-open"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
