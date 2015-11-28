'use strict';

import React            from 'react';
import {Link}           from 'react-router';
import Navigation       from '../nav/nav';

const Header = React.createClass({
    render() {
        return (
            <header className="header-wrapper">
                <Link to="/" className="logo">DFGYG</Link>
                <Navigation />
            </header>
        );
    }
});

export default Header;