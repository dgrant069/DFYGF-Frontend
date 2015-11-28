'use strict';

import React    from 'react';
import {Link}   from 'react-router';

const Navigation = React.createClass({
    render() {
        return (
            <nav className="nav-wrapper">
                <Link to="/" className="nav-link">a link to somewhere</Link>
            </nav>
        );
    }
});

export default Navigation;