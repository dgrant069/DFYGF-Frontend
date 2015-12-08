'use strict';

import React            from 'react';
import DocumentTitle    from 'react-document-title';
import {Link}           from 'react-router';
import ItemForm         from '../../../components/forms/itemForm/itemForm';

const EditItem = React.createClass({

    render() {
        return (
            <DocumentTitle title="Edit Item">
            <section className="edit-item-view-wrapper all-views">
                <h1 className="edit-item-title view-title">Edit a gift to your list</h1>
                <ItemForm />
                <Link to="/my-list" className="my-list-button button">Edit</Link>
            </section>
            </DocumentTitle>
        );
    }
});

export default EditItem;