'use strict';

import React                        from 'react'
import {Router, Route, IndexRoute}  from 'react-router';
import CreateBrowserHistory         from 'history/lib/createBrowserHistory';

import App                          from './App';
import About                        from './views/about/about';
import Account                      from './views/account/account';
import Home                         from './views/home/home';
import AddItem                      from './views/item/add/add-item';
import ItemList                     from './views/itemList/itemList';
import NotFound                     from './views/notFound/notFound';

export default (
    <Router history={CreateBrowserHistory()}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />

            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/account" component={Account} />
            <Route path="/my-list" component={ItemList} />
            <Route path="/add-gift" component={AddItem} />

            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);
