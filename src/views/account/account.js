'use strict';

import React            from 'react';
import DocumentTitle    from 'react-document-title';
// import {Link}        from 'react-router';

const Account = React.createClass({

    render() {
        return (
            <DocumentTitle title="Account">
            <section className="account-view">

                <div>
                    Account
                </div>

            </section>
            </DocumentTitle>
        );
    }
});

export default Account;