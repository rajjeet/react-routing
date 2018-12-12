import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './assets/css/styles.css';
import {ConnectedRouter} from "connected-react-router";
import {Provider} from 'react-redux';
import {history, store} from "./configureStore";

const AppContainer = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
);

if (module.hot) {
    module.hot.accept("./App", () => {
        const NextApp = require('./App').default;
        ReactDOM.render(<NextApp/>, document.getElementById('root'));
    });
}

ReactDOM.render(AppContainer, document.getElementById('root'));


