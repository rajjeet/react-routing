import React from "react";
import {Container, Header, Divider, Menu, Button} from "semantic-ui-react";
import {Route, withRouter, Link, NavLink} from "react-router-dom";

function PrivateContent(props) {
    return <div>Private home sample content for {props.match.params.id}</div>;
}

function PrivateHomeContent() {
    return (
        <div>
            <p>You are about to enter a restricted area of the website</p>
            <Link to={'/logout'}>
             <Button>Sign Out</Button>
            </Link>
        </div>
    );
}

const PrivateHome = ({match}) => (
    <Container>
        <Header as={'h3'}>Private Home</Header>
        <Menu>
            <Menu.Item exact name='Home' as={NavLink} to={`${match.url}`}/>
            <Menu.Item exact name='Content #1' as={NavLink} to={`${match.url}/1`}/>
            <Menu.Item exact name='Content #2' as={NavLink} to={`${match.url}/2`}/>
        </Menu>

        <Route exact path={`${match.url}`} render={() => <PrivateHomeContent/>}/>
        <Route exact path={`${match.url}/:id`} render={(props) => <PrivateContent {...props} />}/>
    </Container>
);

export default withRouter(PrivateHome);