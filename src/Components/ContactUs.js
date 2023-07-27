import React, { useRef } from 'react';
import contact from './images/contact/contact-illustration.gif';
import './styles/ContactUs.css';

function ContactUs() {
 

  return (
    <div>
      <div className='contactUsTop'></div>
    <div className="contact-container">
      <div className="contact-gif-container p-2">
        <img src={contact} alt="no gif" className="contact-gif" />
      </div>
      <div className="contact-form-container">
        <div className="mt-5 mx-3 pt-5">
        <a href="https://www.linkedin.com/in/vishnesh-vojjala"><h2>Ping me through Linkedin</h2></a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ContactUs;
