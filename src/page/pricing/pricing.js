import React from 'react';
import { render } from 'react-dom';

import Page from '../page';
import PricingItem from './pricing-item';

export default class Pricing extends React.Component {

    render(){
        const pricingItems = [{
            id: 1,
            title: "Basic",
            price: 29,
            storage: 5,
            ram: 1,
            bandwidth: 400,
            emails: 10,
            forumSupport: true,
            featured: false
        }, {
            id: 2,
            title: "Standard",
            price: 39,
            storage: 5,
            ram: 1,
            bandwidth: 400,
            emails: 10,
            forumSupport: true,
            featured: false
        }, {
            id: 3,
            title: "Advanced",
            price: 49,
            storage: 50,
            ram: 8,
            bandwidth: 1024,
            emails: "Unlimited",
            forumSupport: true,
            featured: false
        }, {
            id: 4,
            title: "Mighty",
            price: 79,
            storage: 50,
            ram: 8,
            bandwidth: 1024,
            emails: "Unlimited",
            forumSupport: true,
            featured: true
        }];

        const pricing = pricingItems.map( (pricingItem) => <PricingItem key={ pricingItem.id } pricing={ pricingItem } />);

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
