'use strict';

import React            from 'react';
import Reflux           from 'reflux';
import Lodash           from 'lodash';
import DocumentTitle    from 'react-document-title';
import ItemListStore    from '../../stores/itemListStore';
import Lists            from '../../components/widgets/lists/lists';
import {Link}           from 'react-router';

// let list = [];

const ItemList = React.createClass({
    mixins: [Reflux.connect(ItemListStore, "list")],
    // getInitialState() {
    //     console.log("Testing getInitialState", React);
    // },

    // componentDidMount() {
        // this.listenTo(ItemListStore.dogs, this.updateList);
        // list = this.state.list;
    // },

    render() {
        let _ = Lodash;
        let list = this.state.list;

        return (
            <DocumentTitle title="My List">
            <section className="my-list-view-wrapper all-views">
                <h1 className="item-list-title view-title">Your list of gifts</h1>
                <Lists list={list} addPath="/add-item"/>
            </section>
            </DocumentTitle>
        );
    }
});

export default ItemList;