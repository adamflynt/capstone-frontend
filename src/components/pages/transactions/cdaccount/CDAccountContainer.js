import React, { Component } from "react";
import CDAccountCard from './CDAccountCard';
const axios = require("axios");

class CDAccountContainer extends Component {
    constructor() {
        super();
        this.state = {
            cdAccoountTransactions: []
        };
    }

    transactions() {
        axios
            .get("http://localhost:8080/api/Me",
                { headers: { 'Authorization': `Bearer ${localStorage.accountJWT}` } })
            .then(res => {
                if (res.status === 201) {
                    console.log("GET data: " + res.data.cDAccounts)
                    this.setState(
                        {
                            cdAccoountTransactions: res.data.cDAccounts
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
            <CDAccountCard
                cdAccoountTransactions={this.state.cdAccoountTransactions}
            />
        );
    }
}

export default CDAccountContainer;

