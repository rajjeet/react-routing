import {applyMiddleware, compose, createStore} from "redux";
import createRootReducer from "./reducers";
import {routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

export const store = createStore(
    createRootReducer(history),
    compose(
        applyMiddleware(
            routerMiddleware(history)
        )
    )
);
