import React from 'react';
import ReactDOM from 'react-dom';
import LoadApp from './components/loadApp';
require('../styles/main.scss');

ReactDOM.render(
    <div>
        <h1>Hello from react </h1>
        <LoadApp title="Table component"/>
    </div>,

document.getElementById("root"));
