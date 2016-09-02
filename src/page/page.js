import React from 'react';
import { render } from 'react-dom';

export default class Page extends React.Component {

    render(){
        const { title, description, children } = this.props;
        return (
            <div>
                <section id="title" class="emerald body-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <h1>{ title }</h1>
                                <p>{ description }</p>
                            </div>
                            <div class="col-sm-6">
                                <ul class="breadcrumb pull-right">
                                    <li><a href="index.html">Home</a></li>
                                    <li class="active">Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                { children }
            </div>
        );
    }
}
