import React from "react";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {Container, Grid, Divider, Segment} from "semantic-ui-react";

const App = () => (
    <div>
        <Divider hidden />
        <Container>
            <Header/>
            <Grid columns={2}>
                <Grid.Column width={4}>
                    <Sidebar/>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Segment>content</Segment>
                </Grid.Column>
            </Grid>
        </Container>
    </div>
);

export default App;