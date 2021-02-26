import React, { Component } from "react";
import AccountsCard from "./AccountsCard";
const axios = require("axios");

class AccountsContainer extends Component {
    constructor() {
        super();
        this.state = {
            allAccounts: []
        };
    }

    loadAccounts() {
        axios
            .get("http://localhost:8080/api/Me",
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    console.log(res.data)
                    this.setState(
                        {
                            allAccounts: [...res.data.allAccounts]
                                .sort((a, b) => new Date(a.openedOn) - new Date(b.openedOn))
                        }
                    )

                } else {
                    console.log('error: ' + res.json + '\nresponse status: ' + res.status);
                }
            })
            .catch(err => {
                console.log(".GET Savings Data Error: ", err);
                window.location = "/forbidden";
            });
    }

    componentDidMount() {
        this.loadAccounts();

    }

    render() {
        return (
            <AccountsCard
                allAccounts={this.state.allAccounts}
            />
        );
    }
}

export default AccountsContainer;

