import React from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';

export default class Service extends React.Component {

    render(){
        const {title, icon, description} = this.props.service;
        const classes = classNames(icon, {
            'icon-md': true
        });

        return (
            <div class="col-md-4 col-sm-6">
                <div class="media">
                    <div class="pull-left">
                        <i class={ classes }></i>
                    </div>
                    <div class="media-body">
                        <h3 class="media-heading">{ title }</h3>
                        <p>{ description }</p>
                    </div>
                </div>
            </div>
        );
    }
}
