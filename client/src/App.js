import React from "react";
import Header from './components/Header';
import PropView from './components/PropView';
import LoggingHome from './components/Logging/LoggingHome';
import FormExampleForm from './components/FormExampleForm';
import {Container, Grid, Divider, Segment, Menu} from "semantic-ui-react";
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import PrivateHome from "./components/private/PrivateHome";
import PrivateRoute from "./components/private/PrivateRoute";
import Login from "./components/private/Login";
import Logout from "./components/private/Logout";
import SmartColor from "./components/SmartColor";
import People from "./components/People";
import PersonProfile from "./components/PersonProfile";

const Home = ({content}) => (
    <Segment>{content}</Segment>
);

const Sidebar = () => (
    <Menu pointing vertical>
        <Menu.Item exact as={NavLink} to={"/"} name='home'/>
        <Menu.Item exact as={NavLink} to={"/foo"} name='foo'/>
        <Menu.Item exact as={NavLink} to={"/prompt"} name='prompt'/>
        <Menu.Item exact as={NavLink} to={"/props"} name='propsViewer'/>
        <Menu.Item exact as={NavLink} to={"/logging"} name='logging'/>
        <Menu.Item exact as={NavLink} to={"/people"} name='people'/>
        <Menu.Item exact as={NavLink} to={"/private"} name='private'/>
        <Menu.Item exact as={NavLink} to={"/smart-color/green/HelloWorld"} name='smart-color'/>
        <Menu.Item exact as={NavLink} to={"/not-found"} name='not-found'/>
    </Menu>
);


const App = () => (
    <Router>
        <div>
            <Divider hidden/>
            <Container>
                <Header/>
                <Grid columns={2}>
                    <Grid.Column width={4}>
                        <Sidebar/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Switch>
                            <Route exact path={"/"} render={() => <Home content={"this is my thing!"} />} />
                            <Route exact path={"/foo"} render={() => <Home content={"FOOOFOOOO"} />} />
                            <Route exact path={"/prompt"} component={FormExampleForm} />} />
                            <Route exact path={"/props"} render={({location}) => <PropView jsonObj={location} />} />
                            <Route exact path={"/login"} component={Login} />
                            <Route exact path={"/logout"} component={Logout} />
                            <Route path={"/logging"} component={LoggingHome} />
                            <Route exact path={"/people"} component={People} />
                            <Route path={"/people/:id"} component={PersonProfile} />
                            <PrivateRoute path={"/private"} component={PrivateHome} />
                            <PrivateRoute path={"/smart-color/:color/:text"} component={SmartColor} />
                            <Route render={() => <div>Not Found! :(</div>} />
                        </Switch>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    </Router>
);

export default App;