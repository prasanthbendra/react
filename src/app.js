import React from 'react';
import { render } from 'react-dom';

import Header from './shared/header/header';
import Slider from './home/slider/slider';
import Services from './home/services/services';
import Works from './home/works/works';
import Testimonial from './home/testimonial/testimonial';
import Bottom from './home/bottom/bottom';
import Footer from './shared/footer/footer';

export default class App extends React.Component {

    render(){
        return (
            <div>
                <Header/>
                <Slider/>
                <Services/>
                <Works/>
                <Testimonial/>
                <Bottom/>
                <Footer/>
            </div>
        );
    }
}



