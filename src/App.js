'use strict';

import React              from 'react';
import {ListenerMixin}    from 'reflux';

// import CurrentUserActions from './actions/currentUserActions';
// import CurrentUserStore   from './stores/currentUserStore';
import Header             from './components/header/header';
import Footer             from './components/footer/footer';

const App = React.createClass({

  mixins: [ListenerMixin],

  // getInitialState() {
  //   return {
  //     currentUser: {}
  //   };
  // },

  // _onUserChange(err, user) {
  //   if ( err ) {
  //     this.setState({ error: err });
  //   } else {
  //     this.setState({ currentUser: user || {}, error: null });
  //   }
  // },

  componentWillMount() {
    console.log('About to mount App');
  },

  // componentDidMount() {
  //   // this.listenTo(CurrentUserStore, this._onUserChange);
  //   // CurrentUserActions.checkLoginStatus();
  // },

  renderChildren() {
    return React.cloneElement(this.props.children, {
      params: this.props.params,
      query: this.props.query
      // currentUser: this.state.currentUser
    });
  },

  render() {
    return (
      <div className="app-wrapper">
          <Header />
          {this.renderChildren()}
          <Footer />
      </div>
    );
  }
});

export default App;