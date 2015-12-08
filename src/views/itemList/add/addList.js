'use strict';

import React            from 'react';
import DocumentTitle    from 'react-document-title';
import {Link}           from 'react-router';
import ListForm         from '../../../components/forms/listForm/listForm';

const AddList = React.createClass({

    render() {
        return (
            <DocumentTitle title="Add List">
            <section className="add-list-view-wrapper all-views">
                <h1 className="add-list-title view-title">Add a list for someone special</h1>
                <ListForm />
            </section>
            </DocumentTitle>
        );
    }
});

export default AddList;