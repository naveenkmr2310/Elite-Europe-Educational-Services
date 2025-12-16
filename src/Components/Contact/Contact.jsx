import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import whatsapp_icon from '../../assets/W2.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [result, setResult] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const serviceId = 'service_xvr0phk';
    const templateId = 'template_ydfygm4';
    const publicKey = 'iRfBxC67GjHG7-vIh';
    const templateParams = {
      name: name,
      email: email,
      number: phone,
      title: subject,
      message: message
    };
    if (email === "" || name === "" || phone === "" || subject === "" || message === "") {
      console.error("Kidnly fill all the fields.");
      setResult("Kidnly fill all the fields.");
    } else {
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setResult("Message sent successfully!");
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          setResult("Failed to send message. Please try again later.");
        });
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
          <li><a href="mailto:eliteeuropeeducationservices@gmail.com"><img src={mail_icon} alt="" />eliteeuropeeducationservices@gmail.com</a></li>
          <li>

            <a href="tel:+919940062308">
              <img src={phone_icon} alt="Call" />
            </a>
            <a
              href="https://wa.me/919940062308?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp_icon} alt="WhatsApp" />
            </a>+91 9940062308
          </li>
          <li>
            <a
              href="https://wa.me/420721128967?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp_icon} alt="WhatsApp" />
            </a>+420 721 128 967
          </li>
          <li>
            <a
              href="https://www.google.com/maps/search/?api=1&query=4%2F3%2C+Lakshmipuram%2C+Chromepet%2C+Chennai%2C+Tamil+Nadu+600044"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={location_icon} alt="Location" />4/3, Lakshmipuram, Chromepet, Chennai, Tamil Nadu 600044
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required onChange={(e) => { setName(e.target.value) }} />
          <label>Email</label>
          <input type="text" name='email' placeholder='Enter your email' required onChange={(e) => { setEmail(e.target.value) }} />
          <label>Phone Number</label>
          <input type="number" name='phone' placeholder='Enter your mobile number' required onChange={(e) => { setPhone(e.target.value) }} />
          <label>Subject</label>
          <select name="subject" defaultValue="" placeholder='Enter your mobile number' onChange={(e) => { setSubject(e.target.value) }}>
            <option value="" disabled>Select..</option>
            <option value="Admission">Admission</option>
            <option value="Visa Assistance">Visa Assistance</option>
            <option value="Counseling">Counselling</option>
            <option value="Internships">Internships</option>
            <option value="IELTS Coaching">IELTS Coaching</option>
            <option value="Health Insurance">Health Insurance</option>
            <option value="Translation">Translation</option>
            <option value="Apostille">Apostille</option>
          </select>
          <label>Write your messages here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required onChange={(e) => { setMessage(e.target.value) }}></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
