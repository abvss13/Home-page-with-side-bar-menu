import React from 'react';

function Contacts() {
  return (
    <div className="contacts">
      <h1>Contact Me</h1>
      
      {/* Email Contact */}
      <section className="email-contact">
        <h2>Email</h2>
        <p>If you have any questions or would like to get in touch, feel free to email me at:</p>
        <a href="mailto:abdulabass1738@gmail.com">abdulabass1738@gmail.com</a>
      </section>
      
      {/* GitHub Contact */}
      <section className="github-contact">
        <h2>GitHub</h2>
        <p>You can check out my GitHub profile and projects here:</p>
        <a href="https://github.com/abvss13" target="_blank" rel="noopener noreferrer">
          https://github.com/abvss13
        </a>
      </section>
      
      {/* Instagram Contact */}
      <section className="instagram-contact">
        <h2>Instagram</h2>
        <p>Connect with me on Instagram for more insights and updates:</p>
        <a href="https://www.instagram.com/__.abvss_.1300/" target="_blank" rel="noopener noreferrer">
          https://www.instagram.com/__.abvss_.1300/
        </a>
      </section>
    </div>
  );
}

export default Contacts;
