import React from "react";
import {Route, withRouter} from "react-router-dom";
import {Container, Divider, Header} from "semantic-ui-react";
import LoggingLink from "./LoggingLink"
import LoggingRoute from './LoggingRoute';
import Lorem from "./Lorem";

function DefaultLoggingMessage() {
    return <Container>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum velit a dignissim dignissim. Nullam non
        tincidunt erat. Ut pellentesque ac purus quis sagittis. Nunc venenatis justo augue, et aliquam leo ullamcorper
        ac. Proin id arcu sit amet orci gravida semper ac vel libero. Phasellus sit amet tempus odio. Nam volutpat
        volutpat justo vel sagittis. Morbi est lectus, varius vestibulum aliquam et, dictum in lacus. Sed at sapien id
        nisi placerat vehicula. Curabitur ultricies, tellus in ornare aliquet, metus nibh laoreet sapien, ut consectetur
        erat massa tincidunt ipsum. Quisque ullamcorper diam massa, nec varius ante condimentum in. Etiam volutpat
        tellus vitae nisl dapibus aucto
    </Container>;
}


const LoggingHome = ({match}) => (
    <div>
        <Header as='h2'>Logging</Header>
        <LoggingLink to={`${match.url}/logging-detail/1`}>Link 1</LoggingLink>
        {' | '}
        <LoggingLink to={`${match.url}/logging-detail/2`}>Link 2</LoggingLink>
        <Divider/>

        <LoggingRoute exact path={`${match.url}/logging-detail/:id`} component={Lorem}/>
        <Route exact path={`${match.url}`} component={DefaultLoggingMessage}/>
    </div>
);

export default withRouter(LoggingHome);
