import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { Component } from 'react';
import '../../../App.css';
import '../../../styles/Main.css';
import Footer from '../../Footer';
// import '../../styles/SignUp.css';
import AccountsContainer from './AccountsContainer';

export default class Accounts extends Component {
    render() {
        return (
            <>
                <div className="accounts">
                    <div className='table-container'>
                        <MuiThemeProvider>
                            <AccountsContainer />
                        </MuiThemeProvider>
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </>
        );
    }
}