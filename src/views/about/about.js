'use strict';

import React            from 'react';
import DocumentTitle    from 'react-document-title';
// import {Link}        from 'react-router';

const About = React.createClass({

    render() {
        return (
            <DocumentTitle title="About">
            <section className="about-view">

                <div>
                    About
                </div>

            </section>
            </DocumentTitle>
        );
    }
});

export default About;