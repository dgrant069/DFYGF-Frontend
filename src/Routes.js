'use strict';

import React                        from 'react'
import {Router, Route, IndexRoute}  from 'react-router';
import CreateBrowserHistory         from 'history/lib/createBrowserHistory';

import App                          from './App';
import About                        from './views/about/about';
import Account                      from './views/account/account';
import AddItem                      from './views/item/add/addItem';
import AddList                      from './views/itemList/add/addList';
import EditItem                     from './views/item/edit/editItem';
import EditList                     from './views/itemList/edit/editList';
import Home                         from './views/home/home';
import ItemList                     from './views/itemList/itemList';
import NotFound                     from './views/notFound/notFound';
import Profile                      from './views/account/profile/profile';
import Settings                     from './views/account/settings/settings';

export default (
    <Router history={CreateBrowserHistory()}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />

            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/account" component={Account} />
            <Route path="/add-item" component={AddItem} />
            <Route path="/add-list" component={AddList} />
            <Route path="/edit-item" component={EditItem} />
            <Route path="/edit-list" component={EditList} />
            <Route path="/my-list" component={ItemList} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />

            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);
