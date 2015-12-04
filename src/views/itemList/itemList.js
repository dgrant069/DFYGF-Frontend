'use strict';

import React            from 'react';
import DocumentTitle    from 'react-document-title';
import {Link}           from 'react-router';

const MyList = React.createClass({

    render() {
        return (
            <DocumentTitle title="My List">
            <section className="my-list-view-wrapper all-views">
                <h1 className="item-list-title view-title">Your list of gifts</h1>
                <Link to="/add-gift" className="my-list-button button">Add A Gift</Link>
            </section>
            </DocumentTitle>
        );
    }
});

export default MyList;