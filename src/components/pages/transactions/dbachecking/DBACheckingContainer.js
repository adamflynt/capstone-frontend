import React, { Component } from "react";
import DBACheckingCard from "./DBACheckingCard";
const axios = require("axios");

class DBACheckingContainer extends Component {
    constructor() {
        super();
        this.state = {
            dbaTransactions: []
        };
    }

    transactions() {
        axios
            .get("http://localhost:8080/api/Me/DBACheckingAccount",
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    console.log(res.data.dbatransactions)
                    this.setState(
                        {
                            dbaTransactions: res.data.dbatransactions
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
            <DBACheckingCard
                dbaTransactions={this.state.dbaTransactions}
            />
        );
    }
}

export default DBACheckingContainer;

