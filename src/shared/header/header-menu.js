import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import HeaderMenuItem from './header-menu-item';

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
                id: 1,
                text: "About Us",
                to: "about",
                children: []
            },
            {
                id: 1,
                text: "Services",
                to: "services",
                children: []
            },
            {
                id: 1,
                text: "Portfolio",
                to: "portfolio",
                children: []
            },
            {
                id: 1,
                text: "Pages",
                to: "pages",
                children: [
                    {
                        id: 1,
                        text: "Career",
                        to: "career",
                        children: []
                    },
                    {
                        id: 1,
                        text: "Pricing",
                        to: "pricing",
                        children: []
                    },
                    {
                        id: 1,
                        text: "Registration",
                        to: "registration",
                        children: []
                    },
                    {
                        id: 1,
                        text: "Privacy Policy",
                        to: "privacy",
                        children: []
                    },
                    {
                        id: 1,
                        text: "Terms of Use",
                        to: "terms",
                        children: []
                    }
                ]
            },
            {
                id: 1,
                text: "Blog",
                to: "blog",
                children: []
            },
            {
                id: 1,
                text: "Contact",
                to: "contact",
                children: []
            }
        ];

        let menu = menuItems.map( (menuItem) => <HeaderMenuItem location={ location } menuItem={ menuItem }/>);

        return (
            <ul class="nav navbar-nav navbar-right">
                { menu }
            </ul>
        );
    }
}
