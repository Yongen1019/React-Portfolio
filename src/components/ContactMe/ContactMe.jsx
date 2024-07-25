import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section id="contact-container" className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactInfoCard iconUrl="./assets/images/email-icon.png" text="1019yoonen@gmail.com" />
                <ContactInfoCard iconUrl="./assets/images/github-icon.png" text="https://github.com/Yongen1019?tab=repositories" />
            </div>
        </div>
    </section>
  )
}

export default ContactMe