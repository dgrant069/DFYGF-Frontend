'use strict';

import React         from 'react';
import DocumentTitle from 'react-document-title';

const NotFound = React.createClass({

  // propTypes: {
  //   currentUser: React.PropTypes.object.isRequired
  // },

  render() {
    return (
      <DocumentTitle title="404: Not Found">
        <section className="404-not-found-view">
          Page Not Found
        </section>
      </DocumentTitle>
    );
  }
});

export default NotFound;