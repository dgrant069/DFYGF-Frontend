'use strict';

import React            from 'react';
import Logo             from '../logo/logo';
import Navigation       from '../nav/nav';

const Header = React.createClass({
    render() {
        console.log("header props, ", this.props);
        return (
            <header className="header-wrapper">
                <Logo />
                <Navigation />
            </header>
        );
    }
});

export default Header;