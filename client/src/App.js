import React from "react";
import Header from './components/Header';
import PropView from './components/PropView';
import LoggingHome from './components/Logging/LoggingHome';
import FormExampleForm from './components/FormExampleForm';
import {Container, Grid, Divider, Segment, Menu} from "semantic-ui-react";
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';

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
        <Menu.Item exact as={NavLink} to={"/dum"} name='dum'/>
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
                            <Route path={"/logging"} component={LoggingHome} />
                            <Route render={() => <div>Not Found! :(</div>} />
                        </Switch>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    </Router>
);

export default App;