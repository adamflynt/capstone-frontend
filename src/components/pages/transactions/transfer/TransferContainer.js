import React, { Component } from "react";
import TransferCard from "./TransferCard";
const axios = require("axios");
const FormValidators = require("../../../validate");
const validateTransferCard = FormValidators.validateTransferCard;

class TransferContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            user: {
                transFrom: "",
                transTo: "",
                amount: ""
            },
            accounts: {
                rolloverIRA: "",
                rothIRA: "",
                ira: "",
                dbaChecking: "",
                savings: "",
                checking: "",
                cdAccounts: ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitTransfer = this.submitTransfer.bind(this);
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

    getAccounts() {
        axios
            .get("http://localhost:8080/api/Me",
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    console.log(res.status);
                    this.setState(
                        {
                            accounts: {
                                rolloverIRA: res.data.rothIRA != null ? "1" : "",
                                rothIRA: res.data.rothIRA != null ? "1" : "",
                                ira: res.data.ira != null ? "1" : "",
                                dbaChecking: res.data.dbaCheckings != null ? "1" : "",
                                checking: res.data.checkingAccounts != null ? "1" : "",
                                savings: res.data.savingsAccounts != null ? "1" : "",
                                cdAccounts: res.data.cDAccounts != null ? "1" : "",
                            }
                        })
                    console.log("Accounts: " + JSON.stringify(this.state.accounts));
                } else {
                    console.log(res.status);
                    this.setState({
                        errors: { message: res.data.message }
                    });
                }
            })
            .catch(err => {
                console.log("Transaction data submit error: ", err);
            });
    }

    getTransFromId(user) {
        var acc = user.from;
        console.log("getTransFromId account: " + acc);
        axios
            .get(`http://localhost:8080/api/Me/${acc}`,
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    localStorage.fromId = res.data.id;
                    this.getTransToId(user);
                    console.log(localStorage.fromId);
                } else {
                    this.setState({
                        errors: { message: res.data.message }
                    });
                }
            })
            .catch(err => {
                console.log("Getting transferFromID error: ", err);
            });
    }

    getTransToId(user) {
        var acc = user.to;
        console.log("getTransFromID account: " + acc);
        axios
            .get(`http://localhost:8080/api/Me/${acc}`,
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    localStorage.toId = res.data.id;
                    console.log(localStorage.toId);
                    this.submitTransfer(user);
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

    submitTransfer(user) {
        console.log("Submit fromID: " + localStorage.fromId + " Submit toID: " + localStorage.toId);

        var params = {
            sourceAccountID: `${localStorage.fromId}`,
            targetAccountID: `${localStorage.toId}`,
            amount: JSON.parse(user.amt)
        };

        console.log('Current submit: ' + JSON.stringify(params));
        axios
            .post("http://localhost:8080/api/Me/Transfer", params,
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    console.log(res.status);

                    if (user.to === "DBAChecking") {
                        alert(`Transfer of $${user.amt} into DBA Checking completed.`)
                        window.location = "/accounts/dbachecking";
                    } else if (user.to === "CheckingAccount") {
                        alert(`Transfer of $${user.amt} into Checking completed.`)
                        window.location = "/accounts/checking";
                    } else if (user.to === "SavingsAccounts") {
                        alert(`Transfer of $${user.amt} into Savings completed.`)
                        window.location = "/accounts/savings";
                    } else if (user.to === "CDAccount") {
                        alert(`Transfer of $${user.amt} into CD Account completed.`)
                        window.location = "/accounts/cdaccount";
                    } else if (user.to === "IRA") {
                        alert(`Transfer of $${user.amt} into IRA completed.`)
                        window.location = "/accounts/ira";
                    } else if (user.to === "RothIRA") {
                        alert(`Transfer of $${user.amt} into Roth IRA completed.`)
                    } else if (user.to === "RolloverIRA") {
                        alert(`Transfer of $${user.amt} into Rollover IRA completed.`)
                    } else {
                        console.log("user.to data error")
                    };

                } else {
                    console.log(res.status);
                    this.setState({
                        errors: { message: res.data.message }
                    });
                }
            })
            .catch(err => {
                console.log("Transfer data submit error: ", err);
                alert("Transfer failed. You may be trying to transfer more money than you have.");
            });
    }

    validateForm(event) {
        console.log(this.state.user)
        event.preventDefault();
        var payload = validateTransferCard(this.state.user);
        console.log("Payload" + payload)
        if (payload.success) {
            this.setState({
                errors: {}
            });
            var user = {
                from: this.state.user.transFrom,
                to: this.state.user.transTo,
                amt: this.state.user.amount
            };
            this.getTransFromId(user);
        } else {
            const errors = payload.errors;
            this.setState({
                errors
            });
        }
    }

    componentDidMount() {
        this.getAccounts();

    }
    render() {
        return (
            <div>
                <TransferCard
                    onSubmit={this.validateForm}
                    onChange={this.handleChange}
                    errors={this.state.errors}
                    user={this.state.user}
                    accounts={this.state.accounts}

                />
            </div>
        );
    }
}

export default TransferContainer;