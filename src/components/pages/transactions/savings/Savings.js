import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { Component } from 'react';
import '../../../../App.css';
//import '../../../styles/SignUp.css';
import Footer from '../../../Footer';
import SavingsContainer from './SavingsContainer';


export default class Savings extends Component {
    render() {
        return (
            <>
                <div className='accounts'>
                    <div className='table-container'>
                        <MuiThemeProvider>
                            <SavingsContainer />
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