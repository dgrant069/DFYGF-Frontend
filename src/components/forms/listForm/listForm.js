'use strict';

import React            from 'react';
import {Link}           from 'react-router';

const ListForm = React.createClass({

    render() {
        return (

            <form className="form-wrapper">
                <label className="form-label form-component">Name:
                </label>
                <div className="test">
                    <input  className="form-input form-component"
                            type="text"
                            name="listName"
                            placeholder="I.E. My Wife"
                            required>
                    </input>
                </div>

                <label className="form-label form-component">Love Language Type:
                </label>
                <select className="form-select form-component"
                        name="listType"
                        required>
                        <option value="">Gifts</option>
                        <option value="">Touch</option>
                        <option value="">Words of Affrimation</option>
                        <option value="">Quality Time</option>
                        <option value="">Acts of Serviced</option>
                </select>

                <button className="list-button button"
                        onclick="">Ignore for now Add
                </button>

                <Link to="/my-list" className="my-list-button button">Add</Link>

            </form>
        );
    }
});

export default ListForm;