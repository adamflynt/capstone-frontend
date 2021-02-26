import React, { Component } from "react";
import SavingsCard from "./SavingsCard";
const axios = require("axios");

class SavingsContainer extends Component {
    constructor() {
        super();
        this.state = {
            savingsTransactions: []
        };
    }

    transactions() {
        axios
            .get("http://localhost:8080/api/Me/SavingsAccounts",
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    console.log(res.data.savingstransactions)
                    this.setState(
                        {
                            savingsTransactions: res.data.savingstransactions
                        }
                    )

                } else {
                    console.log('error: ' + res.json + '\nresponse status: ' + res.status);
                }
            })
            .catch(err => {
                console.log(".GET Savings Data Error: ", err);
            });
    }

    componentDidMount() {
        this.transactions();

    }

    render() {
        return (
            <SavingsCard
                savingsTransactions={this.state.savingsTransactions}
            />
        );
    }
}

export default SavingsContainer;

