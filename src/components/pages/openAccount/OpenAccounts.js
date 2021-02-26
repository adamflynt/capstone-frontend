import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { Component } from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import OpenAccountsContainer from "./OpenAccountsContainer";

export default class OpenAccounts extends Component {
    render() {
        return (
            <>
                <div className='signup-container'>
                    <MuiThemeProvider>
                        <OpenAccountsContainer />
                    </MuiThemeProvider>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </>
        );
    }
}