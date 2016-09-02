import React from 'react';
import { render } from 'react-dom';

import Header from './shared/header/header';
import Bottom from './shared/bottom/bottom';
import Footer from './shared/footer/footer';

export default class App extends React.Component {

    render(){
        return (
            <div>
                <Header/>
                {this.props.children}
                <Bottom/>
                <Footer/>
            </div>
        );
    }
}
