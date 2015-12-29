'use strict';

import Reflux             from 'reflux';
import ListActions        from '../actions/ListActions';
// import AuthAPI            from '../utils/AuthAPI';

let list = [
    "Mani/pedi",
    "Waxing",
    "Hair coloring",
    "Hair cut",
    "Jewerly",
    "Tulips",
    "Plants",
    "Pastries",
    "Nice wine",
    "Clothes",
    "Music",
    "Concert"
];

function handleLoad(Action, Subaction){
    console.log("The on" + Action + Subaction + " handler was called");
};

const ListStore = Reflux.createStore({

    listenables: [ListActions],

    onGetListCollection() {
        this.list = list;
        return this.list;
    },

    getInitialState() {
        // this.listenToMany(ListActions);
        this.list = list;
        return this.list;
  //   this.listenTo(ListActions.checkLoginStatus, this.checkLoginStatus);
  //   this.listenTo(ListActions.login, this.loginUser);
  //   this.listenTo(ListActions.logout, this.logoutUser);
    }

  // setUser(user, cb = function(){}) {
  //   this.user = user;
  //   cb(null, this.user);
  //   this.trigger(null, this.user);
  // },

  // throwError(err, cb) {
  //   cb(err);
  //   this.trigger(err);
  // }

});

export default ListStore;