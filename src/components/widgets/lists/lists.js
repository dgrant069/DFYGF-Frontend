'use strict';

import React            from 'react';
import Reflux           from 'reflux';
import Lodash           from 'lodash';

let _ = Lodash;

const List = React.createClass({
    getInitialState(){
        return this.props;
    },

    render(){
        let _ = Lodash;
        let test = _.map(this.props.list, function(listItem, i) {
            return <li key={i}>{listItem}</li>
        });

        return <ul className="test-ul">{test}</ul>
    }
});

export default List;