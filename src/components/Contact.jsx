import React, { useState } from "react";
//  not using this anymore import emailjs from "emailjs-com";

// import './contact.scss'

const Contact = () => {
    const [status, setStatus] = useState('submit')

const handleSubmit = async(e) => {
    e.prevenetDefault()
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };


  return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" required />
          </div>
          <button type="submit">{status}</button>
        </form>
  );
};

export default Contact;



// express – handles the route used by the POST request.
// cors – allows for cross origin resource sharing between the frontend and the server.
// nodemailer – simplifies sending emails with Node.js using SMTP.