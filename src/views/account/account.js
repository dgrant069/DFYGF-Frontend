'use strict';

import React            from 'react';
import DocumentTitle    from 'react-document-title';
import {Link}           from 'react-router';

const Account = React.createClass({

    render() {
        return (
            <DocumentTitle title="Account">
            <section className="account-view-wrapper all-views">
                <section className="account-choices">
                    <Link to="/my-list" className="account-button button">My Lists</Link>
                    <Link to="" className="account-button button">Edit Profile</Link>
                    <Link to="" className="account-button button">Account Settings</Link>
                </section>
            </section>
            </DocumentTitle>
        );
    }
});

export default Account;