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
          <Link className='link-1' to='/portofoliu'>
            Home
          </Link>

          <Link to='/portofoliu/work'>My Work</Link>

          <Link to='/portofoliu/contact'>Contact</Link>
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
