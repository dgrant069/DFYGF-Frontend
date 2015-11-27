'use strict';

import React    from 'react';
import ReactDOM from 'react-dom';
import Routes   from './routes';

window.React = React; // export for http://fb.me/react-devtools

ReactDOM.render(Routes, document.getElementById('app'));
