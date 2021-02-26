import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { Component } from 'react';
import '../../../../App.css';
//import '../../../styles/SignUp.css';
import Footer from '../../../Footer';
import CDAccountsContainer from './CDAccountContainer';


export default class CDAccount extends Component {
    render() {
        return (
            <>
                <div className='accounts'>
                    <div className='table-container'>
                        <MuiThemeProvider>
                            <CDAccountsContainer />
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