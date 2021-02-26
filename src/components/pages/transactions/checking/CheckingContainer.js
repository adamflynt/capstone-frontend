import React, { Component } from "react";
import CheckingCard from "./CheckingCard";
const axios = require("axios");

class CheckingContainer extends Component {
    constructor() {
        super();
        this.state = {
            checkingTransactions: [],
            checkingTransfers: [],
            checkingAll: []
        };
    }

    transactions() {
        axios
            .get("http://localhost:8080/api/Me/CheckingAccount",
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    console.log(res.data.checkingtransactions)
                    this.setState(
                        {
                            checkingTransactions: res.data.checkingtransactions
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

        axios
            .get("http://localhost:8080/api/Me/CheckingAccount",
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    console.log("Transfer data: " + res.data.targetAccountTransactions)
                    this.setState(
                        {
                            checkingTransfers: res.data.targetAccountTransactions
                        }
                    )
                } else {
                    console.log('error: ' + res.json + '\nresponse status: ' + res.status);
                }
            })

            // combine transactions and transfers into one array and sort by date
            .then(() => {
                this.setState(
                    {
                        checkingAll: [...this.state.checkingTransactions, ...this.state.checkingTransfers]
                            .sort((a, b) => new Date(b.transactionDate) - new Date(a.transactionDate))
                    }
                )
                console.log(JSON.stringify(this.state.checkingAll));
            })
            .catch(err => {
                console.log(".GET Savings Data Error: ", err);
                window.location = "/forbidden";
            });
    }

    componentDidMount() {
        this.transactions();

    }

    render() {
        return (
            <CheckingCard
                checkingAll={this.state.checkingAll}
            />
        );
    }
}

export default CheckingContainer;

