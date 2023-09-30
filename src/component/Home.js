import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div className="container mt-5 dark-bg">
    <div className="container mt-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block mx-auto carousel-img"
            src="https://img.freepik.com/free-psd/burger-special-offer-banner-template_23-2148812233.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto carousel-img"
            src="https://img.freepik.com/free-vector/american-food-banner-template_23-2148929022.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="row mt-5">
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/5286378/screenshots/20498876/untitled-1_4x.jpg" />
            <Card.Body>
              <Card.Title>BURGER</Card.Title>
              <Card.Text>
               Life's too short to miss out on a great burger
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src="https://w0.peakpx.com/wallpaper/163/758/HD-wallpaper-delicious-lunch-tomato-food-turtle-hamburger-sandwich-square-cheese-meat-chair.jpg" />
            <Card.Body>
              <Card.Title>SANDWICH</Card.Title>
              <Card.Text>
              Sandwiches: The perfect handheld happiness, a bite-sized escape from the mundane
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src="https://w0.peakpx.com/wallpaper/49/640/HD-wallpaper-closeup-of-coca-cola-tin-can.jpg" />
            <Card.Body>
              <Card.Title>COKE</Card.Title>
              <Card.Text>
              Pop the top, sip the sparkle, and let the effervescence dance on your tongue
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;