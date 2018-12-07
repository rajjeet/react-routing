import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './assets/css/styles.css';


const AppContainer = (
    <Router>
        <App/>
    </Router>
);

if (module.hot) {
    module.hot.accept("./App", () => {
        const NextApp = require('./App').default;
        ReactDOM.render(<NextApp/>, document.getElementById('root'));
    });
}


ReactDOM.render(AppContainer, document.getElementById('root'));


