import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className="contact-form-content">
        <form>
            <div className="name-container">
                <input type="text" name="firstname" id="firstname" placeholder="First Name" />
                <input type="text" name="lastname" id="lastname" placeholder="Last Name" />
            </div>
            <input type="text" name="email" id="email" placeholder="Email" />
            <textarea type="text" name="message" id="message" placeholder="Message" />

            <button>Send</button>
        </form>
    </div>
  )
}

export default ContactForm