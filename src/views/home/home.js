'use strict';

import React            from 'react';
import DocumentTitle    from 'react-document-title';
import {Link}           from 'react-router';
import Account          from '../account/account'

// temporary using account until decide what home is/means
const HomeView = React.createClass({
    render() {
        return (
            <DocumentTitle title="Home">
            <section className="home-view-wrapper">
                <Account />
            </section>
            </DocumentTitle>
        );
    }
});

export default HomeView;