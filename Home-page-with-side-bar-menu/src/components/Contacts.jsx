import React from 'react';
import '../styles/Contacts.css'; 

function Contacts() {
  return (
    <div className="contacts">
      <h1>Contact Me</h1>
      
      {/* Email Contact */}
      <section className="contact-section email-contact">
        <h2>Email</h2>
        <p>If you have any questions or would like to get in touch, feel free to email me at:</p>
        <a href="mailto:abdulabass1738@gmail.com" className="contact-link">
          abdulabass1738@gmail.com
        </a>
      </section>
      
      {/* GitHub Contact */}
      <section className="contact-section github-contact">
        <h2>GitHub</h2>
        <p>Check out my GitHub profile for more projects:</p>
        <a href="https://github.com/abvss13" target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fab fa-github"></i> GitHub Profile
        </a>
      </section>
      
      {/* Instagram Contact */}
      <section className="contact-section instagram-contact">
        <h2>Instagram</h2>
        <p>Connect with me on Instagram for more updates and insights:</p>
        <a href="https://www.instagram.com/__.abvss_.1300/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fab fa-instagram"></i> Instagram Profile
        </a>
      </section>
    </div>
  );
}

export default Contacts;
