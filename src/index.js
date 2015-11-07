'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

// import React  from 'react/addons';

// import Routes from './Routes';

var App = React.createClass({
    render: function(){
        return (
         <div class="landing-view-container">
             <section class="main-actions-container">
                 <p>This is a test</p>
             </section>
         </div>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('app'));