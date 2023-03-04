import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className='contact-container'>
      <h1>Get In Touch</h1>
      <div className='contact email'>
        <p>Email: <a href="mailto:your-email@example.com">divishatahiliani@gmail.com</a></p>
      </div>
        <section className='footer'>
            <h2>Connect with me: </h2>
            <div className='footer-list'>
                <a className='item' href="mailto:your-divishatahiliani@gmail.com">
                    <img className='items' src={require('../../assets/email.png')}/>
                </a>
                <a className='item' href="https://www.linkedin.com/in/divisha-tahiliani-5752b021a">
                    <img className='items' src={require('../../assets/linkedin.png')}/>
                </a>
                <a className='item' href="https://github.com/divisha-t09">
                    <img className='items' src={require('../../assets/github.png')}/>
                </a>
            </div>
        </section>
    </div>
  );
}

export default Contact;
