import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<ABOUT />, document.getElementById('app'));

function ABOUT() {
    return (
        <h1>
            ABOUT
            <br />
            <a href="home.html">HOME</a>
        </h1>
    )
}
