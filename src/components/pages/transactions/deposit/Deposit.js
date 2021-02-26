import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { Component } from 'react';
import "../../../../App.css";
import Footer from '../../../Footer';
import DepositContainer from "./DepositContainer";

export default class Deposit extends Component {
    render() {
        return (
            <>
                <div className='signup-container'>
                    <MuiThemeProvider>
                        <DepositContainer />
                    </MuiThemeProvider>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </>
        );
    }
}