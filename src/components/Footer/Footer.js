import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer-distributed'>
      <div className='footer-right'>
        <a
          href='https://www.facebook.com/rrares.ssandu'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-facebook'></i>
        </a>
        <a
          href='https://www.instagram.com/rares.sand/?hl=en'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-instagram'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/rares-sandu/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-linkedin'></i>
        </a>
        <a
          href='https://github.com/RaresSanduConstantin'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-github'></i>
        </a>
      </div>

      <div className='footer-left'>
        <p className='footer-links'>
          <a className='link-1' href='/'>
            Home
          </a>

          <a href='/work'>My Work</a>

          <a href='/contact'>Contact</a>
        </p>

        <p>
          {' '}
          This website was created by {' '}
          <Link to="/portofoliu/admin" style={{color:'inherit'}} >
          Rares
          </Link>{" "}
          with &#10084; and care
        </p>
      </div>
    </footer>
  );
};

export default Footer;
