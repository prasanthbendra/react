import React from 'react';
import { render } from 'react-dom';

import Service from './service'

export default class Services extends React.Component {

    render(){
        const services = [
            {
                title: "Twitter Marketing",
                icon: "icon-twitter",
                description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae."
            },
            {
                title: "Facebook Marketing",
                icon: "icon-facebook",
                description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae."
            },
            {
                title: "Google Plus Marketing",
                icon: "icon-google-plus",
                description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae."
            }
        ];

        const service = services.map( (service) => <Service service={ service } /> );


        return (
            <section id="services" class="emerald body-section">
                <div class="container">
                    <div class="row">
                        { service }
                    </div>
                </div>
            </section>
        );
    }
}



