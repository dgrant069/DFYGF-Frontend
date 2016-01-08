'use strict';

import React            from 'react';
import Reflux           from 'reflux';
import Lodash           from 'lodash';
import DocumentTitle    from 'react-document-title';
import {Link}           from 'react-router';
import MyListStore      from '../../stores/myListStore';
import Lists            from '../../components/widgets/lists/lists';

const Account = React.createClass({
    mixins: [Reflux.connect(MyListStore, "myList")],

    getInitialState() {
        return {
            showMyLists:    false,
            showSettings:   false,
            showProfile:    false
        }
    },

    clickExpand() {
        this.setState({ showMyLists: true });
    },

    render() {
        console.log("account this", this);
        let myList = this.state.myList;

        return (
            <DocumentTitle title="Account">
            <section className="account-view-wrapper all-views">
                <section className="account-choices">
                    <button className="account-button button" onClick={this.clickExpand}>My Lists</button>
                        { this.state.showMyLists ? <Lists list={myList}/> : null }
                        { this.state.showMyLists ? <li><Link to="/add-list">Add a list</Link></li> : null }
                    <Link to="/my-list" className="account-button button">My Lists</Link>
                    <Link to="/profile" className="account-button button">Edit Profile</Link>
                    <Link to="/settings" className="account-button button">Account Settings</Link>
                </section>
            </section>
            </DocumentTitle>
        );
    }
});

export default Account;