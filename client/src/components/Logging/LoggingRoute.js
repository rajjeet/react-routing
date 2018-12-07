import React from "react";
import {Route, withRouter} from "react-router-dom";
import * as PropTypes from "prop-types";

function LoggingRoute(props) {
    let {component: ComponentToRender, ...rest} = props;


    return <Route {...rest}
                  render={(props) => {
                      alert(`Routing to ${props.match.url}`);
                      return <ComponentToRender {...props} />;
                  }}
    />;
}

LoggingRoute.propTypes = {
    component: PropTypes.any
};

export default withRouter(LoggingRoute);