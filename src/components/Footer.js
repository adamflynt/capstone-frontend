import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/merit-banking-1.png';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            {/* <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div 'footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                </div>
            </div> */}
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src={logo} alt='logo' className='navbar-logo-image' />
                        </Link>
                    </div>
                    <small className='website-rights'>Voodoo Children © 2021</small>
                    <div className='social-icons'>
                        <a
                            className='social-icon-link facebook'
                            href='https://www.facebook.com/meritamerica.org/'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </a>
                        <a
                            className='social-icon-link instagram'
                            href='https://www.instagram.com/wearemeritamerica/?hl=en'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </a>
                        <a
                            className='social-icon-link twitter'
                            href='https://twitter.com/meritamerica?lang=en'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </a>
                        <a
                            className='social-icon-link twitter'
                            href='https://www.linkedin.com/school/meritamerica/'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </a>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Footer;
