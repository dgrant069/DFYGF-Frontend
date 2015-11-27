'use strict';

import React            from 'react';
import DocumentTitle    from 'react-document-title';
import {Link}        from 'react-router';

const HomeView = React.createClass({

    render() {
        return (
            <DocumentTitle title="Home">
            <section className="home-view">

                <div>
                    Home
                </div>
                <Link to="/about">About</Link>
            </section>
            </DocumentTitle>
        );
    }
});

export default HomeView;