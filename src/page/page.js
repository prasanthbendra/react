import React from 'react';
import { render } from 'react-dom';

export default class Page extends React.Component {

    render(){
        return (
            <div>
                <section id="title" className="emerald body-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h1>Services</h1>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
                            </div>
                            <div className="col-sm-6">
                                <ul className="breadcrumb pull-right">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="active">Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {this.props.children}
            </div>
        );
    }
}
