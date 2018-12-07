import React from "react";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {Container, Grid, Divider, Segment} from "semantic-ui-react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

export function Home({content}) {
    return <Segment>{content}</Segment>;
}

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
                            <Route exact path={"/prompt"} render={() => <Home content={"Prompt"} />} />
                            <Route render={() => <div>Not Found! :(</div>} />
                        </Switch>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    </Router>
);

export default App;