import React from 'react';
import { render } from 'react-dom';

export default class Slider extends React.Component {

    render(){
        return (
            <section id="main-slider" className="no-margin body-section">
                <div className="carousel slide wet-asphalt">
                    <ol className="carousel-indicators">
                        <li data-target="#main-slider" data-slide-to="0" className="active"></li>
                        <li data-target="#main-slider" data-slide-to="1"></li>
                        <li data-target="#main-slider" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active" style={{backgroundImage: "url(images/slider/bg1.jpg)"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="carousel-content centered">
                                            <h2 className="animation animated-item-1">Powerful and Responsive Web Design</h2>
                                            <p className="animation animated-item-2">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item" style={{backgroundImage: "url(images/slider/bg2.jpg)"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="carousel-content center centered">
                                            <h2 className="boxed animation animated-item-1">Clean, Crisp, Powerful and Responsive Web Design</h2>
                                            <p className="boxed animation animated-item-2">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                            <br />
                                            <a className="btn btn-md animation animated-item-3" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item" style={{backgroundImage: "url(images/slider/bg3.jpg)"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="carousel-content centered">
                                            <h2 className="animation animated-item-1">Powerful and Responsive Web Design Theme</h2>
                                            <p className="animation animated-item-2">Pellentesque habitant morbi tristique senectus et netus et malesuada fames</p>
                                            <a className="btn btn-md animation animated-item-3" href="#">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 hidden-xs animation animated-item-4">
                                        <div className="centered">
                                            <div className="embed-container">
                                                <iframe src="//player.vimeo.com/video/69421653?title=0&amp;byline=0&amp;portrait=0&amp;color=a22c2f" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <a className="prev hidden-xs" href="#main-slider" data-slide="prev">
                    <i className="icon-angle-left"></i>
                </a>
                <a className="next hidden-xs" href="#main-slider" data-slide="next">
                    <i className="icon-angle-right"></i>
                </a>
            </section>
        );
    }
}
