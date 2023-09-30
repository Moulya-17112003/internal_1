import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are a team of passionate individuals committed to providing high-quality products and
        exceptional service to our customers. Our mission is to make a positive impact on people's lives through our innovative
        solutions.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat tristique turpis non euismod.
        Vestibulum auctor euismod quam, eu condimentum odio consequat quis. Vestibulum ac nisi quam. Nulla facilisi. Sed vel
        nisi id arcu euismod ullamcorper non eget lorem.
      </p>
      <div className="social-links mt-4">
        <h3>Follow Us on Social Media</h3>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.twitter.com/your-twitter-page" target="_blank" rel="noopener noreferrer" className="btn btn-info">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer" className="btn btn-danger">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;