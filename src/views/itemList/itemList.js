'use strict';

import React            from 'react';
import Reflux           from 'reflux';
import DocumentTitle    from 'react-document-title';
import ListStore        from '../../stores/listStore';
import {Link}           from 'react-router';

let list = [];

const MyList = React.createClass({
    mixins: [Reflux.connect(ListStore, "list")],
    getInitialState() {
        console.log("Testing getInitialState", React);
    },

    componentDidMount() {
        // this.listenTo(ListStore.dogs, this.updateList);
        list = this.state.list;
    },

    render() {
        console.log("this %o", this);
        return (
            <DocumentTitle title="My List">
            <section className="my-list-view-wrapper all-views">
                <h1 className="item-list-title view-title">Your list of gifts</h1>
                <ul>
                    <li>
                    React.DOM.li(_.extend(this.state.list))
                    </li>
                </ul>
            </section>
            </DocumentTitle>
        );
    }
});

export default MyList;