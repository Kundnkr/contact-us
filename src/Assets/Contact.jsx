import React, { useRef } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";





export function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pdm238u', 'template_u3pp4i8', form.current, '3fhFEzSdCdxqdDoR-')
            .then((result) => {
                alert("Thankyou for feedback : " + form.current.from_name.value);
                let contactForm = document.getElementById('contact-form');
                contactForm.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <section id="contact" className="landing-page-3">
                <div className="container-3">
                    <div className="content">
                        <div className="contact-text">
                            <h1>Contact Us</h1>
                            <p>Any questions or remarks? <br /> Just write me a message.</p>
                        </div>
                        <div className="contact-links">
                            <Link to="https://www.facebook.com/mr.kundan.kumar99" target="_blank"><FaFacebook className=" icon facebook" fontSize={'30px'} /></Link>
                            <Link to="https://twitter.com/Kundnkr" target="_blank"><FaTwitter className=" icon twitter" fontSize={'30px'} /></Link>
                            <Link to="https://www.linkedin.com/in/kundan-k-77a8851a1/" target="_blank"><FaLinkedin className="icon linkedin" fontSize={'30px'} /></Link>
                            <Link to="https://www.instagram.com/Kundnkr/" target="_blank"><FaInstagram className="icon instagram" fontSize={'30px'} /></Link>
                        </div>
                    </div>
                    <form id="contact-form" ref={form} onSubmit={sendEmail}>
                        <label for="name">Enter Your Name</label>
                        <input type="text" id="name" placeholder="Kundan" name='from_name' required />
                        <label for="email">Enter Your Email</label>
                        <input type="email" id="email" placeholder="Your Email" name='email' required />
                        <label for="message">Enter Message</label>
                        <textarea name="message" id="message" cols="30" rows="10"
                            placeholder="Write Something..." required></textarea>
                        <button>Send Message <FaPaperPlane className='sendIcon' fontSize={'15px'} /></button>
                    </form>
                </div>
            </section>
        </>
    )
}
