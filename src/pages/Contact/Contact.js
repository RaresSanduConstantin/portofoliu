import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="container-contact100">
        <div className="wrap-contact100">
          <form className="contact100-form validate-form">
            <span className="contact101-form-title">
              Reach out on any of my social accounts
            </span>
            <div className="contact1">
              <a
                href="https://www.facebook.com/rrares.ssandu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rares-sandu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a
                href="https://github.com/RaresSanduConstantin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a
                href="https://www.instagram.com/rares.sand/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
            <span className="contact102-form-title">Or</span>
            <span className="contact100-form-title">Send Me A Message</span>
            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter your name"
            >
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter your email: e@a.x"
            >
              <input
                className="input100"
                type="email"
                name="email"
                placeholder="E-mail"
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter your phone"
            >
              <input
                className="input100"
                type="text"
                name="phone"
                placeholder="Phone"
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter your message"
            >
              <textarea
                className="input100"
                name="message"
                placeholder="Your Message"
              ></textarea>
              <span className="focus-input100"></span>
            </div>

            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn" type="submit">
                <i className="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>
                <span className="send-btn">Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
