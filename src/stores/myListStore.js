'use strict';

import Reflux             from 'reflux';
import MyListActions        from '../actions/myListActions';
// import AuthAPI            from '../utils/AuthAPI';

let myList = [
    "My Wife"
];

function handleLoad(Action, Subaction){
    console.log("The on" + Action + Subaction + " handler was called");
};

const MyListStore = Reflux.createStore({
    listenables: [MyListActions],

    getInitialState() {
        // this.listenToMany(MyListActions);
        this.myList = myList;
        return this.myList;
  //   this.listenTo(MyListActions.checkLoginStatus, this.checkLoginStatus);
  //   this.listenTo(MyListActions.login, this.loginUser);
  //   this.listenTo(MyListActions.logout, this.logoutUser);
    },

    onGetListCollection() {
        this.myList = myList;
        return this.myList;
    },

    onAddListCollection(newList) {
        console.log("running store", newList);
        myList.push(newList);
        this.trigger(myList);
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

export default MyListStore;