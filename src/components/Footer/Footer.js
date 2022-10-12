import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-distributed'>
      <div className='footer-right'>
        <a href='https://www.facebook.com/rrares.ssandu' target='_blank' rel="noopener noreferrer">
          <i className='fa fa-facebook'></i>
        </a>
        <a href='https://www.instagram.com/rares.sand/?hl=en' target='_blank' rel="noopener noreferrer">
          <i className='fa fa-instagram'></i>
        </a>
        <a href='https://www.linkedin.com/in/rares-sandu/' target='_blank' rel="noopener noreferrer">
          <i className='fa fa-linkedin'></i>
        </a>
        <a href='https://github.com/RaresSanduConstantin' target='_blank' rel="noopener noreferrer">
          <i className='fa fa-github'></i>
        </a>
      </div>

      <div className='footer-left'>
        <p className='footer-links'>
          <a className='link-1' href='/' >
            Home
          </a>

          <a href='/work'>My Work</a>

          <a href='/contact'>Contact</a>
        </p>

        <p>
          {' '}
          This website was created by
          <span className='rares'>
            <a href='/'> Rares </a>
          </span>
          with &#10084; and care
        </p>
      </div>
    </footer>
  );
};

export default Footer;
