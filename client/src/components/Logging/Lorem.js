import React from "react";
import {Container, Header, Label, Divider} from "semantic-ui-react";
import {withRouter} from "react-router-dom";

function Lorem({match}) {
    return (
            <Container>
                <Header as='h3'>{match.params.id}</Header>
                <div>
                    <strong>Requested path:</strong> <Label>{match.path}</Label>
                </div>
                <Divider/>
                <div>
                    <strong>Requested url:</strong> <Label>{match.url}</Label>
                </div>
                <Divider/>
                <p>
                    Lsssorem ipsum dolor sit amet, consectetsur adipiscing elit. In dictum velit a dignissim dignissim.
                    Nullam
                    non
                    tincidunt erat. Ut pellentesque ac purus quis sagittis. Nunc venenatis justo augue, et aliquam leo
                    ullamcorper
                    ac. Proin id arcu sit amet orci gravida semper ac vel libero. Phasellus sit amet tempus odio. Nam
                    volutpat
                    volutpat justo vel sagittis. Morbi est lectus, varius vestibulum aliquam et, dictum in lacus. Sed at
                    sapien
                    id
                    nisi placerat vehicula. Curabitur ultricies, tellus in ornare aliquet, metus nibh laoreet sapien, ut
                    consectetur
                    erat massa tincidunt ipsum. Quisque ullamcorper diam massa, nec varius ante condimentum in. Etiam
                    volutpat
                    tellus vitae nisl dapibus aucto
                </p>
                <Divider/>
                <Label basic>{Date.now()}</Label>
            </Container>
    );
}

export default withRouter(Lorem);