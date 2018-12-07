import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './assets/css/styles.css';

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root')
);
