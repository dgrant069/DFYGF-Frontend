'use strict';

import React                        from 'react'
import {Router, Route, IndexRoute}  from 'react-router';
import CreateBrowserHistory         from 'history/lib/createBrowserHistory';

import App                          from './App';
import About                        from './views/about';
import Account                      from './views/account';
import Home                         from './views/home';
import Item                         from './views/item';
import ItemList                     from './views/itemList';
import NotFound                     from './views/notFound';

export default (
    <Router history={CreateBrowserHistory()}>
    <Route path="/" component={App}>

        <IndexRoute component={Home} />
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/account" component={Account} />

        <Route path="*" component={NotFound} />
    </Route>
    </Router>
);
