'use strict';

import React            from 'react';
import DocumentTitle    from 'react-document-title';
import {Link}           from 'react-router';
import ListForm         from '../../../components/forms/listForm/listForm';

const EditList = React.createClass({

    render() {
        return (
            <DocumentTitle title="Edit List">
            <section className="edit-list-view-wrapper all-views">
                <h1 className="edit-list-title view-title">Edit a list for someone special</h1>
                <ListForm />
                <Link to="/my-list" className="my-list-button button">Edit</Link>
            </section>
            </DocumentTitle>
        );
    }
});

export default EditList;