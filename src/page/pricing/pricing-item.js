import React from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';

export default class PricingItem extends React.Component {

    render(){
        const { pricing } = this.props;
        const { id, forumSupport, featured } = pricing;

        const classes = classNames({
            'plan': true
        }, 'plan' + id, {
            'featured': featured
        });

        return (
            <div class="col-md-3 col-xs-6">
                <ul class={ classes }>
                    <li class="plan-name">
                        <h3>{ pricing.title }</h3>
                    </li>
                    <li class="plan-price">
                        <div>
                            <span class="price"><sup>$</sup>{ pricing.price }</span>
                            <small>month</small>
                        </div>
                    </li>
                    <li>
                        <strong>{ pricing.storage }GB</strong> Storage
                    </li>
                    <li>
                        <strong>{ pricing.ram }GB</strong> RAM
                    </li>
                    <li>
                        <strong>{ pricing.bandwidth }GB</strong> Bandwidth
                    </li>
                    <li>
                        <strong>{ pricing.email }</strong> Email Address
                    </li>
                    <li>
                        <strong>Forum</strong> Support
                    </li>
                    <li class="plan-action">
                        <a href="#" class="btn btn-primary btn-md">Signup</a>
                    </li>
                </ul>
            </div>
        );
    }
}
