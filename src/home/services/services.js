import React from 'react';
import { render } from 'react-dom';

import Service from './service'

export default class Services extends React.Component {

    constructor(){
        super();

        console.log('constructor');
        this.state = {
            services: []
        };
    }

    componentDidMount(){
        console.log('componentDidMount');
        fetch('/api/marketing')
            .then( (res) => res.json() )
            .then( (res) => {
                this.setState({
                    services: res.data
                })
            })
            .catch( (error)=> console.log(error));
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    render(){

        const service = this.state.services.map( (service) => <Service key={ service.id } service={ service } /> );

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



