'use strict';

import React    from 'react';
import {Link}   from 'react-router';

const Navigation = React.createClass({
    render() {
        return (
            <nav className="nav-wrapper">
                <ul className="nav-list">
                    <li className="nav-link">
                        <Link to="/account">profile</Link>
                        <Link to="/add-gift">add gift</Link>
                    </li>
                </ul>
            </nav>
        );
    }
});

export default Navigation;