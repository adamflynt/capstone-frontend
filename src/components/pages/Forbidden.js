import React, { Component } from 'react';
import '../../App.css';
import '../../styles/SignUp.css';
import Footer from '../Footer';

export default class Forbidden extends Component {
    render() {
        return (
            <>
                <div className="forbidden">
                    <div className="forbidden-message">
                        <h1>403 FORBIDDEN</h1>
                        <h5>You are not authorized to view this page. Please <a href='/login'>login</a> or <a href='/sign-up'>sign-up</a>.</h5>
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </>
        );
    }
}