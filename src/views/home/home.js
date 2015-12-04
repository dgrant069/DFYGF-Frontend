'use strict';

import React            from 'react';
import DocumentTitle    from 'react-document-title';
import {Link}           from 'react-router';
import Account          from '../account/account'

const HomeView = React.createClass({
    render() {
        return (
            <DocumentTitle title="Home">
            <section className="home-view-wrapper all-views">
                <Account />
            </section>
            </DocumentTitle>
        );
    }
});

export default HomeView;