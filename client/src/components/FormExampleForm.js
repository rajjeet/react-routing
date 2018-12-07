import React from 'react'
import {Button, Checkbox, Form} from 'semantic-ui-react'
import {Prompt} from "react-router-dom";

class FormExampleForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            valid: true,
            termsAgreed: false
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleTermsConditionChange = this.handleTermsConditionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleFirstNameChange(event) {
        const value = event.target.value;
        if (value.length > 0) {
            this.setState(Object.assign({}, {valid: false, firstName: value}));
        }
    }

    handleLastNameChange(event) {
        const value = event.target.value;
        if (value.length > 0) {
            this.setState(Object.assign({}, {valid: false, lastName: value}));
        }
    }

    handleTermsConditionChange(event, data) {
        if (data.checked) {
            this.setState(Object.assign({}, {valid: false}))
        }
        this.setState(Object.assign({}, {termsAgreed: data.checked}))
    }

    handleSubmit() {

        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const termsAgreed = this.state.termsAgreed;
        if (firstName.length > 0 && lastName.length > 0) {
            if (!termsAgreed) {
                alert(`Please agree to terms and conditions before proceeding.`);
            } else {
                this.setState(Object.assign(this.state, {
                    valid: true,
                    firstName: '',
                    lastName: '',
                    termsAgreed: false
                }));
                alert(`A name was submitted: ${firstName} ${lastName}`);
            }
        } else {
            alert(`Please fill out the form!`);
        }
    }

    render() {
        return (
            <Form>
                <Prompt when={!this.state.valid}
                        message={"Are you sure you want to leave this page? You will lose your data."}
                />
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={this.handleFirstNameChange} value={this.state.firstName}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={this.handleLastNameChange} value={this.state.lastName}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={this.handleTermsConditionChange}
                              checked={this.state.termsAgreed}/>
                    {/*I agree to the Terms and Conditions <input type="checkbox"  onClick={this.handleTermsConditionChange} />*/}
                </Form.Field>
                <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
            </Form>
        );
    }
}

export default FormExampleForm;
