import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class HeaderMenuItem extends React.Component {

    render(){
        const { menuItem, location } = this.props;
        const classes = classNames({
            'active': menuItem.to == location.pathname.replace(/\//g, "")
        });


        return (

            <li class={ classes } ><Link to={ menuItem.to }>{ menuItem.text }</Link></li>

            /*<li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages <i class="icon-angle-down"></i></a>
                <ul class="dropdown-menu">
                    <li><Link to="career">Career</Link></li>
                    <li><Link to="blog">Blog Single</Link></li>
                    <li><Link to="pricing">Pricing</Link></li>
                    <li><a href="404.html">404</a></li>
                    <li><Link to="registration">Registration</Link></li>
                    <li class="divider"></li>
                    <li><Link to="privacy">Privacy Policy</Link></li>
                    <li><Link to="terms">Terms of Use</Link></li>
                </ul>
            </li>*/
        );
    }
}
