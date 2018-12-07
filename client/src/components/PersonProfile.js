import React from 'react';
import {Button, Grid, Icon, Image, Divider} from "semantic-ui-react";
import * as querystring from 'query-string';
import {Link, Route} from "react-router-dom";

const PersonProfile = ({match, location}) => {
    const queryValues = querystring.parse(location.search);
    return (
        <div>
            <Grid relaxed columns={2}>
                <Grid.Row>
                    <Link to={'/people'}>
                        <Button icon labelPosition='left'>
                            <Icon name='left arrow'/>
                            Go Back
                        </Button>

                    </Link>
                    <Link to={`${match.url}/detail/${location.search}`}>
                        <Button icon labelPosition='left'>
                            <Icon name='info'/>
                            Show Details
                        </Button>

                    </Link>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small'/>
                        <h5>{queryValues.name}</h5>
                        <p>{queryValues.occupation}</p>
                    </Grid.Column>
                    <Grid.Column>
                        <div>
                            Profile on {match.params.id}
                            <Route path={`${match.url}/detail`} render={() =>
                                <div>orem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod orci eu
                                    placerat luctus. Sed pellentesque nunc vel cursus fringilla. Suspendisse ut ante
                                    suscipit ex ultricies tincidunt. Proin viverra ultricies justo a ullamcorper. Nunc
                                    tempor elit ac lorem rhoncus imperdiet. Nunc tincidunt dolor in mauris lacinia
                                    ultricies. Praesent ac pulvinar lorem, quis aliquet dolor. Proin ligula ex, eleifend
                                    vitae porta tincidunt, iaculis a tortor. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus ut gravida mauris, id pharetra tortor. Quisque laoreet,
                                    dui vel dapibus accumsan, metus ante maximus orci, ut egestas ipsum diam et augue.

                                    Duis feugiat odio ut egestas viverra. Nulla et euismod libero. Curabitur at odio
                                    enim. Integer efficitur dictum vulputate. Vivamus maximus mollis nisl sit amet
                                    rhoncus. In venenatis, nisl ut tincidunt tempus, dolor felis malesuada sapien, eget
                                    fermentum ante tellus ac mauris. Aliquam pulvinar ipsum in efficitur feugiat.
                                    Suspendisse vel lacinia elit. Nullam et accumsan ligula, sed finibus ex. Nunc non
                                    imperdiet ligula. Donec vestibulum placerat lorem, sed iaculis tortor sollicitudin
                                    vel. Pellentesque tellus libero, luctus vel felis nec, finibus malesuada justo.
                                    Donec libero mauris, maximus sed varius eget, bibendum ut erat. Proin posuere tellus
                                    leo, semper rhoncus augue ultricies sed.
                                </div>
                            }/>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default PersonProfile;