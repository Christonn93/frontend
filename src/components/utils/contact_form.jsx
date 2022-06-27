import React, { useState } from "react";

const form_endpoint = "";

const ContactForm = () => {
 const [submitted, setSubmitted] = useState(false);
 const handleSubmit = () => {
  setTimeout(() => {
   setSubmitted(true);
  }, 100);
 };

 if (submitted) {
  return (
   <>
    <h2>Thanks for your message</h2>
    <p>We will get back to you shortly</p>
   </>
  );
 }

 return (
  <form action={form_endpoint} onSubmit={handleSubmit} method="POST">
  <label for="name">Your name
    <input type="text" placeholder="Your name" name="name" required />
   </label>
   <label>Email
   <input type="text" placeholder="Your Email" name="email" required />
   </label>
   <label>Message
   <textarea placeholder="Your message" name="message" required />
   </label>
   <button type="submit" className="btn">Send message</button>
  </form>
 );
};

export default ContactForm;
