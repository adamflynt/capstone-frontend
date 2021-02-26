import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { Component } from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import CloseAccountsContainer from "./CloseAccountsContainer";

export default class CloseAccounts extends Component {
    render() {
        return (
            <>
                <div className='signup-container'>
                    <MuiThemeProvider>
                        <CloseAccountsContainer />
                    </MuiThemeProvider>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </>
        );
    }
}