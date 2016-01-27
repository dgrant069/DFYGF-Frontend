'use strict';

import React            from 'react';
import {Link}           from 'react-router';
import ListAction         from '../../../actions/myListActions';

const ListForm = React.createClass({
    mixins: [],

    getInitialState() {
        return {listName: '', listType: ''};
    },

    listNameChange(e) {
        this.setState({listName: e.target.value});
    },

    aTestSubmit(e) {
        e.preventDefault();
        ListAction.addListCollection(this.state.listName);
        //Link.transitionTo('/account'); This isn't working need to figure out routing
    },

    render() {
        console.log("My List form", this);
        // <Link to="/my-list" className="my-list-button button" onClick={this.addListCollection()}>Add</Link>
        var listName = this.state.listName;
        return (
            <form className="form-wrapper" onSubmit={this.aTestSubmit}>
                <label className="form-label form-component">Name:
                </label>
                <div className="test">
                    <input  className="form-input form-component"
                            type="text"
                            name="listName"
                            value={listName}
                            onChange={this.listNameChange}
                            placeholder="I.E. My Lovely Wife"
                            required>
                    </input>
                </div>

                <label className="form-label form-component">Love Language Type:
                </label>
                <select className="form-select form-component" name="listType">
                        <option value="">Gifts</option>
                        <option value="">Touch</option>
                        <option value="">Words of Affrimation</option>
                        <option value="">Quality Time</option>
                        <option value="">Acts of Serviced</option>
                </select>

                <input type="submit" className="my-list-button button" value="Add" readOnly></input>
            </form>
        );
    }
});

export default ListForm;