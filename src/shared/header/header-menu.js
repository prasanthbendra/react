import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class HeaderMenu extends React.Component {

    render(){
        const { location } = this.props;
        let menuItems = [
            {
                id: 1,
                text: "Home",
                to: "",
                children: []
            },
            {
                id: 2,
                text: "About Us",
                to: "about",
                children: []
            },
            {
                id: 3,
                text: "Services",
                to: "services",
                children: []
            },
            {
                id: 4,
                text: "Portfolio",
                to: "portfolio",
                children: []
            },
            {
                id: 5,
                text: "Pages",
                to: "pages",
                children: [
                    {
                        id: 51,
                        text: "Career",
                        to: "career",
                        children: []
                    },
                    {
                        id: 52,
                        text: "Pricing",
                        to: "pricing",
                        children: []
                    },
                    {
                        id: 53,
                        text: "Registration",
                        to: "registration",
                        children: []
                    },
                    {
                        id: 54,
                        text: "Privacy Policy",
                        to: "privacy",
                        children: []
                    },
                    {
                        id: 55,
                        text: "Terms of Use",
                        to: "terms",
                        children: []
                    }
                ]
            },
            {
                id: 6,
                text: "Blog",
                to: "blog",
                children: []
            },
            {
                id: 7,
                text: "Contact",
                to: "contact",
                children: []
            }
        ];

        let menu = menuItems.map( (menuItem) => {
            let menu = "";
            const classes = classNames({
                'active': menuItem.to == location.pathname.replace(/\//g, "")
            });
            if( !!menuItem.children.length ){
                let menuChildren = menuItem.children.map( (menuChild) => {
                    let classes = classNames({
                        'active': menuChild.to == location.pathname.replace(/\//g, "")
                    });
                    return <li class={ classes } ><Link to={ menuChild.to }>{ menuChild.text }</Link></li>
                })
                menu = (
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">{ menuItem.text } <i class="icon-angle-down"></i></a>
                        <ul class="dropdown-menu">
                            { menuChildren }
                        </ul>
                    </li>
                )
            } else {
                menu =  <li class={ classes } ><Link to={ menuItem.to }>{ menuItem.text }</Link></li>
            }
            return menu;
        });

        return (
            <ul class="nav navbar-nav navbar-right">
                { menu }
            </ul>
        );
    }
}
