import React, {Component} from 'react';
import {Table} from "semantic-ui-react";
import {Link} from "react-router-dom";

class People extends Component {

    constructor(props) {
        super(props);

        this.state = {
            people: []
        };
    }

    componentDidMount() {
        fetch('./client/src/data/people.json')
            .then(r => r.json())
            .then(json => this.setState({people: json.data}));
    }

    render() {
        const people = this.state.people.map(person => {
            const url = `${this.props.match.url}/${person.id}?name=${person.name}&occupation=${person.occupation}`;
            return {...person, url};
        });

        return (
            <Table basic={"very"} selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Occupation</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {people.map(person => (

                        <Table.Row key={person.id}>
                            <Table.Cell>{person.id}</Table.Cell>
                            <Table.Cell>
                                <Link to={person.url}>
                                    {person.name}
                                </Link>
                            </Table.Cell>
                            <Table.Cell>{person.occupation}</Table.Cell>
                        </Table.Row>

                    ))}
                </Table.Body>

            </Table>
        );
    }
}

export default People;