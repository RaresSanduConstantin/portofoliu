import React, { Component } from "react";
import { messageRef } from "../../firebase/firebase";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    this.mesaj = React.createRef();
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var re =
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';

    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.phone === ""
    ) {
      this.mesaj.current.style.opacity = "1";
      this.mesaj.current.innerHTML = "Please fill all the fields";
      this.mesaj.current.style.backgroundColor = "red";
      setTimeout(() => {
        return (this.mesaj.current.style.opacity = "0");
      }, 1000);
    } else {
      this.saveMessage(
        this.state.name,
        this.state.email,
        this.state.phone,
        this.state.message
      );

      this.setState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      this.mesaj.current.innerHTML = "Your Message has been sent!";
      this.mesaj.current.style.backgroundColor = "#79c879";

      this.mesaj.current.style.opacity = "1";

      setTimeout(() => {
        return (this.mesaj.current.style.opacity = "0");
      }, 3000);
    }
  };

  saveMessage = (name, email, phone, message) => {
    const newMessageRef = messageRef.push();

    newMessageRef.set({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
  };

  render() {
    const { name, email, phone, message } = this.state;
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
              <div className="alert" ref={this.mesaj}>
                Your Message has been sent!
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Please enter your name"
              >
                <input
                  className="input100"
                  type="text"
                  // name="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={this.handleNameChange}
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
                  // name="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={this.handleEmailChange}
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
                  // name="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={this.handlePhoneChange}
                  require
                />
                <span className="focus-input100"></span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Please enter your message"
              >
                <textarea
                  className="input100"
                  // name="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={this.handleMessageChange}
                ></textarea>
                <span className="focus-input100"></span>
              </div>

              <div className="container-contact100-form-btn">
                <button
                  className="contact100-form-btn"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  <i
                    className="fa fa-paper-plane-o m-r-6"
                    aria-hidden="true"
                  ></i>
                  <span className="send-btn">Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
