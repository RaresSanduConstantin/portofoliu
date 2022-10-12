import React, { useState, useRef } from 'react';
import { messageRef } from '../../firebase/firebase';
import './Contact.css';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const mesaj = useRef();


 const handleNameChange = (event) => {
    setName(event.target.value);
  };

 const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

 const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

 const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

 const handleSubmit = (event) => {
    event.preventDefault();

    if (
      email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === null ||
      name === '' ||
      phone === '' ||
      message === ''
    ) {
      mesaj.current.style.opacity = '1';
      mesaj.current.innerHTML = 'Please fill all the fields correctly';
      mesaj.current.style.backgroundColor = 'red';
      setTimeout(() => {
        return (mesaj.current.style.opacity = '0');
      }, 1000);
    } else {
      saveMessage(
        name,
        email,
        phone,
        message
      );

      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      mesaj.current.innerHTML = 'Your Message has been sent!';
      mesaj.current.style.backgroundColor = '#79c879';

      mesaj.current.style.opacity = '1';

      setTimeout(() => {
        return (mesaj.current.style.opacity = '0');
      }, 3000);
    }
  };

 const saveMessage = (name, email, phone, message) => {
    const newMessageRef = messageRef.push();

    newMessageRef.set({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
  };
  
    return (
      <div>
        <div className='container-contact100'>
          <div className='wrap-contact100'>
            <form className='contact100-form validate-form'>
              <span className='contact101-form-title'>
                Reach out on any of my social accounts
              </span>
              <div className='contact1'>
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
              <span className='contact102-form-title'>Or</span>
              <span className='contact100-form-title'>Send Me A Message</span>
              <div className='alert' ref={mesaj}>
                Your Message has been sent!
              </div>
              <div
                className='wrap-input100 validate-input'
                data-validate='Please enter your name'
              >
                <input
                  className='input100'
                  type='text'
                  // name="name"
                  placeholder='Full Name'
                  value={name}
                  onChange={handleNameChange}
                />
                <span className='focus-input100'></span>
              </div>

              <div
                className='wrap-input100 validate-input'
                data-validate='Please enter your email: e@a.x'
              >
                <input
                  className='input100'
                  type='email'
                  // name="email"
                  placeholder='E-mail'
                  value={email}
                  onChange={handleEmailChange}
                />
                <span className='focus-input100'></span>
              </div>

              <div
                className='wrap-input100 validate-input'
                data-validate='Please enter your phone'
              >
                <input
                  className='input100'
                  type='number'
                  // name="phone"
                  placeholder='Phone'
                  value={phone}
                  onChange={handlePhoneChange}
                  require
                />
                <span className='focus-input100'></span>
              </div>

              <div
                className='wrap-input100 validate-input'
                data-validate='Please enter your message'
              >
                <textarea
                  className='input100'
                  // name="message"
                  placeholder='Your Message'
                  value={message}
                  onChange={handleMessageChange}
                ></textarea>
                <span className='focus-input100'></span>
              </div>

              <div className='container-contact100-form-btn'>
                <button
                  className='contact100-form-btn'
                  type='submit'
                  onClick={handleSubmit}
                >
                  <i
                    className='fa fa-paper-plane-o m-r-6'
                    aria-hidden='true'
                  ></i>
                  <span className='send-btn'>Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }


export default Contact;
