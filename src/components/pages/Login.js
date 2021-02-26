import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { Component } from 'react';
import '../../App.css';
import '../../styles/SignUp.css';
import Footer from '../Footer';
import LoginContainer from '../LoginContainer';


export default class Login extends Component {
    render() {
        return (
            <>
                <div className='signup-container'>
                    <br /><br /><br /><br /><br /><br />
                    <MuiThemeProvider>
                        <LoginContainer />
                    </MuiThemeProvider>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </>
        );
    }
}