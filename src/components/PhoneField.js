import React, { Component } from 'react';
import {INVALID_PHONE_MSG} from "../helpers/constants";

class PhoneField extends Component {

    constructor(props) {
        super(props);
        this.handleFieldChange= this.handleFieldChange.bind(this);
        this.validate = this.validate.bind(this);
        this.isValidPhoneNumber = this.isValidPhoneNumber.bind(this);
        this.clearClass = this.clearClass.bind(this);
        this.state = {
            className: "form-field",
            isValid: false,
            title: '',
            errorMessage: ''
        };
    }

    render() {
        let autofocus = this.props.autofocus ? true : false;
        return (
                <div>
                    <input
                        id={this.props.id}
                        name={this.props.name}
                        autoFocus={autofocus}
                        ref={this.props.ref}
                        value={this.props.value || ''}
                        onChange={this.handleFieldChange}
                        maxLength={17}
                        size={30}
                        placeholder={this.props.placeHolder}
                        readOnly={this.props.readOnly}
                        onBlur={this.validate}
                        className={this.state.className}
                        data-tip={this.state.errorMessage}
                        onFocus={this.clearClass}
                    />
                    <div className="error-message"> {this.state.errorMessage}</div>
                </div>


        );
    }

    componentDidMount() {
        if (this.props.value) {
            this.validate();
        }
    }

    /**
     * Eliminate all but valid Canadian phone characters are used eg +1(250)385-9999
     * @param e
     */
    handleFieldChange(e) {
        e.target.value = e.target.value.replace(/[^+\d-)( ]/g,'');
        this.props.handleFieldChange(e);
    }

    validate() {
        if (!this.props.value || this.isValidPhoneNumber())
        {
            this.setState({className: "form-field ", title: "", errorMessage: ""}, this.props.validate(true, 'phone'));
        } else {
            this.setState({className: "form-field invalid-field", title: INVALID_PHONE_MSG, errorMessage: INVALID_PHONE_MSG}, this.props.validate(false, 'phone'));
        }
    }

    isValidPhoneNumber() {
        return this.props.value.match(/^(\+1)?[ ]?\(\d{3}\)[ ]?\d{3}[- ]?\d{4}$/) != null ||
        this.props.value.match(/^(\+1)?[- ]?\d{3}[- ]?\d{3}[- ]?\d{4}$/) != null ||
        this.props.value.match(/^(\+1)?\d{3}-\d{3}-\d{4}$/) != null;
    }

    clearClass() {
        this.setState({className: "form-field", title: "", errorMessage: ""});
    }
}
export default PhoneField;
