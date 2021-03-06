import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { Component } from 'react';
import '../../../../App.css';
//import '../../../styles/SignUp.css';
import Footer from '../../../Footer';
import IRAContainer from './IRAContainer';


export default class IRA extends Component {
    render() {
        return (
            <>
                <div className='accounts'>
                    <div className='table-container'>
                        <MuiThemeProvider>
                            <IRAContainer />
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