'use strict';

import React            from 'react';
import {Link}           from 'react-router';

const ItemForm = React.createClass({

    render() {
        return (
            <form className="form-wrapper">
                <label className="form-label form-component">Name:
                </label>
                <input  className="form-input form-component"
                        type="text"
                        name="giftName"
                        placeholder="Gift Name"
                        required>
                </input>

                <label className="form-label form-component">Relative Cost:
                </label>
                <select className="form-select form-component"
                        name="giftCost"
                        required>
                        <option value="">$</option>
                        <option value="">$$</option>
                        <option value="">$$$</option>
                        <option value="">$$$$</option>
                </select>

                <label className="form-label form-component">Is this a reoccuring or one time gift:
                </label>
                <select className="form-select form-component"
                        name="giftFreq"
                        required>
                        <option value="">Reoccuring</option>
                        <option value="">One Time Only</option>
                </select>

                <label className="form-label form-component">Description (optional):
                </label>
                <input  className="form-input form-component"
                        type="text"
                        name="giftDescription"
                        placeholder="Optional description">
                </input>

                <Link to="/my-list" className="item-button button">Ignore for now Add
                </Link>
            </form>
        );
    }
});

export default ItemForm;