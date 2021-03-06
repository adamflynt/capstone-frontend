import React, { Component } from "react";
import OpenAccountsCard from "./OpenAccountsCard";
const axios = require("axios");
const FormValidators = require("../../validate");
const validateOpenAccountsCard = FormValidators.validateOpenAccountsCard;

class OpenAccountsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            user: {
                balance: "",
                accountType: ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitOpenAccounts = this.submitOpenAccounts.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    submitOpenAccounts(user) {
        var params = {
            balance: JSON.parse(user.bal)
        };
        var path = user.acc;
        console.log("url" + path);
        console.log('Current submit: ' + JSON.stringify(params));
        axios
            .post(`http://localhost:8080/api/Me/${path}`, params,
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    // localStorage.accountJWT = res.data.token;
                    // localStorage.isAuthenticated = true;
                    console.log(res.status);
                    window.location = "/accounts";
                } else {
                    console.log(res.status);
                    this.setState({
                        errors: { message: res.data.message }
                    });
                }
            })
            .catch(err => {
                console.log("Sign up data submit error: ", err);
                alert("Open Account failed. You may have reached the limit for this type of account.");
            });
    }

    validateForm(event) {
        console.log(this.state.user)
        event.preventDefault();
        var payload = validateOpenAccountsCard(this.state.user);
        console.log("Payload" + payload)
        if (payload.success) {
            this.setState({
                errors: {}
            });
            var user = {
                bal: this.state.user.balance,
                acc: this.state.user.accountType
            };
            this.submitOpenAccounts(user);
        } else {
            const errors = payload.errors;
            this.setState({
                errors
            });
        }
    }

    render() {
        return (
            <div>
                <OpenAccountsCard
                    onSubmit={this.validateForm}
                    onChange={this.handleChange}
                    errors={this.state.errors}
                    user={this.state.user}
                />
            </div>
        );
    }
}

export default OpenAccountsContainer;