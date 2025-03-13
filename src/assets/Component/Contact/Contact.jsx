import React, { useState } from 'react';
import fb from "../../../Gallery/fb.png";
import twitter from "../../../Gallery/twitter.png";
import insta from "../../../Gallery/instagram.png";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent!');
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id='/Contact' className="w-full bg-orange-100 py-16 px-10">
      <div>
        <h1 className="text-orange-500 text-4xl lg:text-5xl text-center font-bold food pb-10">Contact Us</h1>
        <div className="contact-container shadow-2xl border bg-orange-100">
          <div className="contact-header">
            <p>Feel free to reach out with any questions or feedback!</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className='bg-orange-100  border border-orange-300 shadow-sm'
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className='bg-orange-100  border border-orange-300 shadow-sm'
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className='bg-orange-100  border border-orange-300 shadow-sm'
              required
            />
            <button className='font-bold text-gray-100 rounded-md' type="submit">Send Message</button>
          </form>

          <div className="contact-socials">
            <h3>Follow us:</h3>
            <div className="social-icons">
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src={fb} alt="Facebook" className='w-10' />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" className='w-10' />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="Instagram" className='w-10' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
