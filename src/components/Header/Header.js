import React from 'react';

import './Header.css';

const Header = () => {

  return (
    <div className='bg'>
      <div className='layer'>
        <div className='shoucase'>
          <h1 className='nume'>Rareș Sandu</h1>
          <div className='icons'>
            <a
              href='https://www.facebook.com/rrares.ssandu'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook fa-2x'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/rares-sandu/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin fa-2x'></i>
            </a>
            <a
              href='https://github.com/RaresSanduConstantin'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github fa-2x'></i>
            </a>
            <a
              href='https://www.instagram.com/rares.sand/?hl=en'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram fa-2x'></i>
            </a>
          </div>

          <div className='descriere'>
            <p>
              I am a Web Developer located in Bucharest, if you want to know more, connect with me on the links above.
            </p>
            <span className='ceva' aria-hidden='true'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
