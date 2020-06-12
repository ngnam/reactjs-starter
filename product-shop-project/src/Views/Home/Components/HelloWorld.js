import React from 'react';

const HelloWorld = (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
        </div>
    );
};

export default HelloWorld;