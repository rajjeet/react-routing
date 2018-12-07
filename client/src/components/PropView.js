import React from "react";
import {withRouter} from "react-router-dom";
import {Label} from 'semantic-ui-react';

function PropView(props) {
    return (
        <div>
            <p>
                <h3>props.match</h3>
                <Label>{JSON.stringify(props.match)}</Label>
            </p>
            <p>
                <h3>props.location</h3>
                <Label>{JSON.stringify(props.location)}</Label>
            </p>
        </div>
    );
}

export default withRouter(PropView);
