import {Link, withRouter} from "react-router-dom";
import React, {Component} from "react";
import PropTypes from 'prop-types';


class LoggingLink extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let urlParts = this.props.to.split('/');
        const eid = urlParts[urlParts.length - 1];
        alert('Clicking the Link is Logging: ' + eid)
    }

    render() {
        return <Link {...this.props} onClick={this.handleClick}>{this.props.children}</Link>
    }
}

LoggingLink.propTypes = {
    to: PropTypes.string.isRequired
};

export default withRouter(LoggingLink);