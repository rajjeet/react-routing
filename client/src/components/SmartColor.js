import React from 'react';
import {Label, Segment} from "semantic-ui-react";
import {withRouter} from "react-router-dom";


const SmartColor = ({match}) => {
    const {color, text} = match.params;
    return <Segment color={color}>
        <p>Smart color is <Label style={{color: color}}>{color}</Label>, but the text is <Label>{text}</Label>.</p>
    </Segment>;
};

export default withRouter(SmartColor);