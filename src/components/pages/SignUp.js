import React, { Component } from 'react';
import '../../App.css';
import '../../styles/SignUp.css';
import Footer from '../Footer';
import SignUpContainer from '../SignUpContainer';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


export default class SignUp extends Component {
    render() {
        return (
            <>
                <div className='signup-container'>
                    <MuiThemeProvider>
                        <SignUpContainer />
                    </MuiThemeProvider>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </>
        );
    }
}