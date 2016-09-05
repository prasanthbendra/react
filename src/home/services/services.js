import React from 'react';
import { render } from 'react-dom';

import Service from './service'

export default class Services extends React.Component {

    constructor(){
        super();

        this.state = {
            services: []
        };
    }

    componentDidMount(){

    }

    componentWillUnmount(){
        //console.log('componentWillUnmount');
    }

    render(){
        let service = "";
        if(!!this.props.services){
            service = this.props.services.map( (service) => <Service key={ service.id } service={ service } /> );
        }

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



