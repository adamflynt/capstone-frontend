import React, { Component } from "react";
import DepositCard from "./DepositCard";
const axios = require("axios");
const FormValidators = require("../../../validate");
const validateDepositCard = FormValidators.validateDepositCard;

class DepositContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            user: {
                accountType: "",
                transType: "",
                transStyle: "",
                checkNumber: "",
                amount: ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitTransaction = this.submitTransaction.bind(this);
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

    getAccountId(user) {
        console.log("localstorage id: " + localStorage.accId);
        var acc = user.acc;
        console.log("getAccountID account: " + acc);
        axios
            .get(`http://localhost:8080/api/Me/${acc}`,
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    localStorage.accId = res.data.id;
                    this.submitTransaction(user);
                    console.log(localStorage.accId);
                } else {
                    this.setState({
                        errors: { message: res.data.message }
                    });
                }
            })
            .catch(err => {
                console.log("Getting account ID error: ", err);
            });
    }

    submitTransaction(user) {
        var params = {
            amount: JSON.parse(user.amt)
        };

        if (user.acc === "DBAChecking") {
            params.dbaChecking = {
                "id": `${localStorage.accId}`
            }
        } else if (user.acc === "CheckingAccount") {
            params.checking = {
                "id": `${localStorage.accId}`
            }
        } else if (user.acc === "SavingsAccounts") {
            params.savings = {
                "id": `${localStorage.accId}`
            }
        } else if (user.acc === "CDAccount") {
            params.cdAccount = {
                "id": `${localStorage.accId}`
            }
        } else if (user.acc === "IRA") {
            params.ira = {
                "id": `${localStorage.accId}`
            }
        } else if (user.acc === "RothIRA") {
            params.rothIRA = {
                "id": `${localStorage.accId}`
            }
        } else if (user.acc === "RolloverIRA") {
            params.rolloverIRA = {
                "id": `${localStorage.accId}`
            }
        } else {
            console.log("user.acc data error")
        };

        console.log('Current submit: ' + JSON.stringify(params));
        axios
            .post(`http://localhost:8080/api/Me/${user.acc}/${user.type}`, params,
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    console.log(res.status);

                    if (user.acc === "DBAChecking") {
                        window.location = "/accounts/dbachecking";
                    } else if (user.acc === "CheckingAccount") {
                        window.location = "/accounts/checking";
                    } else if (user.acc === "SavingsAccounts") {
                        window.location = "/accounts/savings";
                    } else if (user.acc === "CDAccount") {
                        window.location = "/accounts/cdaccount";
                    } else if (user.acc === "IRA") {
                        window.location = "/accounts/ira";
                    } else if (user.acc === "RothIRA") {
                        window.location = "/accounts/rothira";
                    } else if (user.acc === "RolloverIRA") {
                        window.location = "/accounts/rolloverira";
                    } else {
                        console.log("user.acc data error")
                    };

                } else {
                    console.log(res.status);
                    this.setState({
                        errors: { message: res.data.message }
                    });
                }
            })
            .catch(err => {
                console.log("Transaction data submit error: ", err);
                alert("Transaction failed. You may be trying to withdraw more money than you have.");
            });
    }

    validateForm(event) {
        console.log(this.state.user)
        event.preventDefault();
        var payload = validateDepositCard(this.state.user);
        console.log("Payload" + payload)
        if (payload.success) {
            this.setState({
                errors: {}
            });
            var user = {
                acc: this.state.user.accountType,
                type: this.state.user.transType,
                amt: this.state.user.amount
            };
            this.getAccountId(user);
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
                <DepositCard
                    onSubmit={this.validateForm}
                    onChange={this.handleChange}
                    errors={this.state.errors}
                    user={this.state.user}
                />
            </div>
        );
    }
}

export default DepositContainer;