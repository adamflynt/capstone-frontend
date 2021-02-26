import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { Component } from 'react';
import '../../../../App.css';
//import '../../../styles/SignUp.css';
import Footer from '../../../Footer';
import RolloverIRAContainer from './RolloverIRAContainer';


export default class RolloverIRA extends Component {
    render() {
        return (
            <>
                <div className='accounts'>
                    <div className='table-container'>
                        <MuiThemeProvider>
                            <RolloverIRAContainer />
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