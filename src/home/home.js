import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import Slider from './slider/slider';
import Services from './services/services';
import Works from './works/works';
import Testimonial from './testimonial/testimonial';

import * as Action from './home-action';

@connect((store) => {
    return {
        services: store.home.services
    }
})
export default class Home extends React.Component {

    constructor(){
        super();

    }

    componentDidMount(){
        this.props.dispatch(Action.fetchServices());
    }

    componentWillUnmount(){
        //console.log('componentWillUnmount');
    }

    render(){

        return (
            <div>
                <Slider/>
                <Services services={ this.props.services.data }/>
                <Works/>
                <Testimonial/>
            </div>
        );
    }
}



