'use strict';

import React            from 'react';

const ItemForm = React.createClass({

    render() {
        return (
            <form className="form-wrapper">
                <label className="form-label">Name:
                </label>
                <input  className="form-input"
                        type="text"
                        name="giftName"
                        placeholder="Gift Name"
                        required>
                </input>

                <label className="form-label">Relative Cost:
                </label>
                <select className="form-select"
                        name="gift-cost"
                        required>
                        <option value="">$</option>
                        <option value="">$$</option>
                        <option value="">$$$</option>
                        <option value="">$$$$</option>
                </select>

                <label className="form-label">Is this a reoccuring or one time gift:
                </label>
                <select className="form-select"
                        name="gift-freq"
                        required>
                        <option value="">Reoccuring</option>
                        <option value="">One Time Only</option>
                </select>

                <label className="form-label">Description (optional):
                </label>
                <input  className="form-input"
                        type="text"
                        name="giftDescription"
                        placeholder="Optional description">
                </input>

                <button className="item-button button"
                        onclick="">Ignore for now Add
                </button>
            </form>
        );
    }
});

export default ItemForm;