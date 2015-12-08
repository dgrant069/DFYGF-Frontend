'use strict';

import React            from 'react';
import DocumentTitle    from 'react-document-title';
import {Link}           from 'react-router';
import ItemForm         from '../../../components/forms/itemForm/itemForm';

const AddItem = React.createClass({

    render() {
        return (
            <DocumentTitle title="Add Item">
            <section className="add-item-view-wrapper all-views">
                <h1 className="add-item-title view-title">Add a gift to your list</h1>
                <ItemForm />
            </section>
            </DocumentTitle>
        );
    }
});

export default AddItem;