import React, { Component } from 'react';

import hero from '../images/hero.jpg'

class Header extends Component {

    render() {
        let imgUrl = {hero};
        let styles = {
            root: {
                background: 'url(' + imgUrl + ')',
                backgroundSize: 'cover',
                overflow: 'hidden',
            }};

        return (
                <div><img className="hero-home"  style={{styles}}/></div>
        )
    }
}

export default Header;