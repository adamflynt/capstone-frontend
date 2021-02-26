import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../styles/Main.css';
import BackgroundMovie from '../videos/background-movie-1.mp4'

function Main() {
    return (
        <div className='main-container'>
            <video src={BackgroundMovie} autoPlay loop muted />
            <h1>MERIT BANKING SERVICES</h1>
            <p>Open an account today!</p>
            <div className='main-btns'>
                <Button link='/login' className='btns' buttonStyle='btn--main--outline'
                    buttonSize='btn--main--large'>LOG IN</Button>
                <Button link='/sign-up' className='btns' buttonStyle='btn--main--outline'
                    buttonSize='btn--main--large'>SIGN UP</Button>

            </div>
        </div>
    );
}

export default Main;
