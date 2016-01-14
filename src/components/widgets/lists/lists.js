'use strict';

import React            from 'react';
import Reflux           from 'reflux';
import Lodash           from 'lodash';
import {Link}           from 'react-router';

let _ = Lodash;

const List = React.createClass({
    getInitialState(){
        return this.props;
    },

    render(){
        console.log("props in list", this.props);
        // var type = this.props.type;
        let _ = Lodash;
        let test = _.map(this.props.list, function(listItem, i) {
            return <li key={i}>{listItem}</li>
        });

        return <ul className="test-ul">{test}
            <li><Link to={this.props.addPath}>Add</Link></li>
        </ul>
    }
});

export default List;