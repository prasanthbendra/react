import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';


export default class NotFound extends React.Component {

    render(){
        return (
            <section id="error" class="container">
                <h1>404, Page not found</h1>
                <p>The Page you are looking for doesn\'t exist or an other error occurred.</p>
                <Link to=""><a class="btn btn-success">GO BACK TO THE HOMEPAGE</a></Link>
            </section>
        );
    }
}
