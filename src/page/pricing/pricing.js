import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import Page from '../page';
import PricingItem from './pricing-item';
import * as Action from './pricing-action';

@connect((store) => {
    return {
        pricing: store.pricing.pricing
    }
})

export default class Pricing extends React.Component {

    constructor(){
        super();
    }

    componentDidMount(){
        this.props.dispatch(Action.fetchPricing());
    }

    componentWillUnmount(){
        //console.log('componentWillUnmount');
    }

    render(){
        let pricing = "";
        if( !!this.props.pricing.data ){
            let pricingItems = this.props.pricing.data;
            pricing = pricingItems.map( (pricingItem) => <PricingItem key={ pricingItem.id } pricing={ pricingItem } />);
        }

        return (
            <Page title="Pricing" description="Pellentesque habitant morbi tristique senectus et netus et malesuada">
                <section id="pricing" class="body-section">
                    <div class="container">
                        <div class="center">
                            <h2>See our Pricings</h2>
                            <p class="lead">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </div>
                        <div class="gap"></div>
                        <div id="pricing-table" class="row">
                            { pricing }
                        </div>
                    </div>
                </section>
            </Page>
        );
    }
}
