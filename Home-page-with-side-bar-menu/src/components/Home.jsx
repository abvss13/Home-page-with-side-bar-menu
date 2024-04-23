import React from 'react';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Kickstart Your Development with Ease!</h1>
        <p>A flexible, ready-to-use sidebar navigation template for fast project setup.</p>
      </section>
      
      {/* About the Project */}
      <section className="about-project">
        <h2>About the Project</h2>
        <p>This project was born from the necessity to simplify the initial development setup for web applications. With a ready-made sidebar menu, developers and students can focus more on creating unique content and less on boilerplate code.</p>
        <p>Especially beneficial for educational projects, quick prototypes, or any development process where time and simplicity are key. It provides a robust starting point that can be customized or expanded according to specific project needs.</p>
      </section>
      
      {/* About the Owner */}
      <section className="about-owner">
        <h2>About the Owner</h2>
        <p>Abdullahi Abass, a seasoned Full-Stack Software Engineer with a passion for building accessible and efficient web applications. With years of experience in both frontend and backend technologies, I aim to create tools that empower upcoming developers.</p>
        <p>My vision for this project is to offer a resource that not only accelerates development time but also enhances learning by providing a practical example of how modern web technologies can be integrated and used effectively.</p>
      </section>
      
      {/* Call to Action */}
      <section className="call-to-action">
        <h2>Get Started Today!</h2>
        <p>Use this sidebar template as your springboard and add your unique touch to it. Interested in contributing or have ideas for improvement? Join the community and help evolve this tool for a broader impact.</p>
        <button className="cta-button">Learn More</button> {/* Customize this button as per your need */}
      </section>
    </div>
  );
}

export default Home;
