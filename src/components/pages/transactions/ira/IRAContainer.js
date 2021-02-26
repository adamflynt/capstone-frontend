import React, { Component } from "react";
import IRACard from './IRACard';
const axios = require("axios");

class IRAContainer extends Component {
    constructor() {
        super();
        this.state = {
            iraTransactions: [],
            iraTransfers: [],
            iraAll: []
        };
    }

    transactions() {
        axios
            .get("http://localhost:8080/api/Me/IRA",
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    console.log(res.data.iraTransactions)
                    this.setState(
                        {
                            iraTransactions: res.data.iraTransactions
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
            .get("http://localhost:8080/api/Me/IRA",
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
                        iraAll: [...this.state.iraTransactions, ...this.state.iraTransfers]
                            .sort((a, b) => new Date(b.transactionDate) - new Date(a.transactionDate))
                    }
                )
                console.log(JSON.stringify(this.state.iraAll));
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
            <IRACard
                iraAll={this.state.iraAll}
            />
        );
    }
}

export default IRAContainer;

