'use strict';

import React            from 'react';
import {Link}           from 'react-router';

const Logo = React.createClass({
    render() {
        return (
            <div className="logo-wrapper">
                <Link to="/" className="logo">DFGYG</Link>
            </div>
        );
    }
});

export default Logo;