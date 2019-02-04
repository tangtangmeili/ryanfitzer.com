import React from 'react';

const About = ( props ) => (
    <div>

        <h1>{ props.pageName }</h1>

        <p>Render method: <code>{ props.renderType }</code></p>

    </div>
);

export default About;
