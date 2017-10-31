import React from 'react';
import ReactDOM from 'react-dom';
import LoadApp from './components/loadApp';
import Footer from './components/footer';
require('../styles/main.scss');

ReactDOM.render(
    <div>
        <h1>Campers Leaderboard</h1>
        <LoadApp title="Table component"/>
        <Footer />
    </div>,

document.getElementById("root"));
