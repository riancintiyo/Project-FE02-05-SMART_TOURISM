import React from 'react';
import "../../App.css";
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
            <h2>About Us</h2>
            <h5>Description</h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat.
            </p>
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <h5>Social</h5>
            <Link to='/'>Email</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Linkedin</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
            <h2>Support</h2>
            <Link to='/'>Call Center</Link>
            <Link to='/'>Tower Bandung LT 3</Link>
          </div>
        </div>
        <div class='footer-link-items'>
            <h2>Lainya</h2>
            <Link to='/'>Promosi</Link>
            <Link to='/'>Flash Sale</Link>
            <Link to='/'>Kebijakan Privasi</Link>
            <Link to='/'>Blog Bisnis</Link>
            <Link to='/'>Travel Dung Event</Link>
          </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TravelDung
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRVLD © Bandung 2020.</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
);

export default Footer;
