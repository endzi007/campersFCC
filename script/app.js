import React from 'react';
import ReactDOM from 'react-dom';
import LoadApp from './components/loadApp';
require('../styles/main.scss');

ReactDOM.render(
    <div>
        <h1>Free Code Camp project - Campers</h1>
        <i class="fa fa-free-code-camp" aria-hidden="true"></i>
        <LoadApp title="Table component"/>
    </div>,

document.getElementById("root"));
