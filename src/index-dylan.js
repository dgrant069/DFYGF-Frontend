// This file bootstraps the entire application.
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

// var App = require('./components/landingView');

console.log("this is loading");
//window.React = React; // export for http://fb.me/react-devtools

var App = React.createClass({
	render: function(){
		return (
			<div>Hello Fucking World</div>
			// <div class="landing-view-container">
			// 	<section class="main-actions-container">
			// 		<p>This is a test</p>
			// 	</section>
			// </div>
		)
	}
});

ReactDOM.render(<App />, document.getElementById('app'));


