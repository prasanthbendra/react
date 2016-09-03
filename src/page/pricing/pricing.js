import React from 'react';
import { render } from 'react-dom';

import Page from '../page';
import PricingItem from './pricing-item';

export default class Pricing extends React.Component {

    constructor(){
        super();

        console.log('constructor');
        this.state = {
            pricingItems: []
        };
    }

    componentDidMount(){
        console.log('componentDidMount');
        fetch('/api/pricing')
            .then( (res) => res.json() )
            .then( (res) => {
                this.setState({
                    pricingItems: res.data
                })
            })
            .catch( (error)=> console.log(error));
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    render(){

        const pricing = this.state.pricingItems.map( (pricingItem) => <PricingItem key={ pricingItem.id } pricing={ pricingItem } />);

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
