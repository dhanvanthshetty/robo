import React from 'react';

const Scroll = (props) => {
    return (
    <div style={{overflowY: 'scroll', border: '5px solid #9eebcf', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll