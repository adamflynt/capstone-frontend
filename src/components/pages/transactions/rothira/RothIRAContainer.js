import React, { Component } from "react";
import RothIRACard from "./RothIRACard";
const axios = require("axios");

class RothIRAContainer extends Component {
    constructor() {
        super();
        this.state = {
            rothTransactions: [],
            rothTransfers: [],
            rothAll: []
        };
    }

    transactions() {
        axios
            .get("http://localhost:8080/api/Me/RothIRA",
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    console.log(res.data.rothIRATransactions)
                    this.setState(
                        {
                            rothTransactions: res.data.rothIRATransactions
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
            .get("http://localhost:8080/api/Me/RothIRA",
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    console.log("Transfer data: " + res.data.targetAccountTransactions)
                    this.setState(
                        {
                            rothTransfers: res.data.targetAccountTransactions
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
                        rothAll: [...this.state.rothTransactions, ...this.state.rothTransfers]
                            .sort((a, b) => new Date(b.transactionDate) - new Date(a.transactionDate))
                    }
                )
                console.log(JSON.stringify(this.state.rothAll));
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
            <RothIRACard
                rothAll={this.state.rothAll}
            />
        );
    }
}

export default RothIRAContainer;

