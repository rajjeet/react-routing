import Link from "react-router-dom/es/Link";
import {Route, Switch} from "react-router-dom";
import React from "react";

const App = () => (
    <div>
        <Link to='/'>Home</Link>
        {' | '}
        <Link to='/fee'>Fee</Link>
        {' | '}
        <Link to='/about'>About</Link>
        <Switch>
            <Route exact path="/" render={() => (<h1>route home</h1>)}/>
            <Route exact path="/fee" render={() => (<h1>fee</h1>)}/>
            <Route render={() => (<h2>Not found!</h2>)}/>
        </Switch>
    </div>
);

export default App;