import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { Component } from 'react';
import '../../../../App.css';
//import '../../../styles/SignUp.css';
import Footer from '../../../Footer';
import CheckingContainer from './CheckingContainer';

export default class Checking extends Component {
    render() {
        return (
            <>
                <div className='accounts'>
                    <div className='table-container'>
                        <MuiThemeProvider>
                            <CheckingContainer />
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