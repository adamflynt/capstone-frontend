import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { Component } from 'react';
import "../../../../App.css";
import Footer from '../../../Footer';
import TransferContainer from "./TransferContainer";

export default class Transfer extends Component {
    render() {
        return (
            <>
                <div className='signup-container'>
                    <MuiThemeProvider>
                        <TransferContainer />
                    </MuiThemeProvider>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </>
        );
    }
}