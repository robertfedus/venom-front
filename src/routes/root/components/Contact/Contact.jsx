import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <p className="details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla.
        </p>

        <div className="form-container">
          <form className="contact-form">
            <div className="row">
              <input type="text" placeholder="Nume*" name="surname" />
              <input type="text" placeholder="Prenume*" name="name" />
            </div>

            <div className="row">
              <input type="email" placeholder="E-mail*" />
              <input type="phone" placeholder="Telefon*" />
            </div>

            <input type="text" className="long" placeholder="Comanda dorită și informații adiționale*" />

            <button type="submit" className="submit-button">
              Trimite
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
