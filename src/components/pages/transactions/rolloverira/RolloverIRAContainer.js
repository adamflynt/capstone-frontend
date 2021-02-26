import React, { Component } from "react";
import RolloverIRACard from "./RolloverIRACard";
const axios = require("axios");

class RolloverContainer extends Component {
    constructor() {
        super();
        this.state = {
            rolloverTransactions: [],
            rolloverTransfers: [],
            rolloverAll: []
        };
    }

    transactions() {
        axios
            .get("http://localhost:8080/api/Me/RolloverIRA",
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    console.log(res.data.rolloverIRATransactions)
                    this.setState(
                        {
                            rolloverTransactions: res.data.rolloverIRATransactions
                        }
                    )

                } else {
                    console.log('error: ' + res.json + '\nresponse status: ' + res.status);
                }
            })
            .catch(err => {
                console.log(".GET Savings Data Error: ", err);
            });

        axios
            .get("http://localhost:8080/api/Me/RolloverIRA",
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    console.log("Transfer data: " + res.data.targetAccountTransactions)
                    this.setState(
                        {
                            rolloverTransfers: res.data.targetAccountTransactions
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
                        rolloverAll: [...this.state.rolloverTransactions, ...this.state.rolloverTransfers]
                            .sort((a, b) => new Date(b.transactionDate) - new Date(a.transactionDate))
                    }
                )
                console.log(JSON.stringify(this.state.rolloverAll));
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
            <RolloverIRACard
                rolloverAll={this.state.rolloverAll}
            />
        );
    }
}

export default RolloverContainer;

