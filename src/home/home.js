import React from 'react';
import { render } from 'react-dom';

import Slider from './slider/slider';
import Services from './services/services';
import Works from './works/works';
import Testimonial from './testimonial/testimonial';
import Bottom from './bottom/bottom';

export default class Home extends React.Component {

    render(){
        return (
            <div>
                <Slider/>
                <Services/>
                <Works/>
                <Testimonial/>
                <Bottom/>
            </div>
        );
    }
}



