import React from 'react';
// import Navbar from '../Navbar/navbar';
import slide from '../Images/Slide.jpg'
import slide2 from '../Images/Slide2.png'
import { Link } from 'react-router-dom';
import { Carousel} from 'react-bootstrap';
import Footer from './Footer';
import Navbar from './navbar'

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item " aria-current="page"><Link to="/" className="text-danger fw-bold text-decoration-none">Home</Link></li>
        <li class="breadcrumb-item"><Link to="/Courses" className="text-danger fw-bold text-decoration-none">Course</Link></li>
        <li class="breadcrumb-item active" ><Link to="/About" className="text-danger fw-bold text-decoration-none">About</Link></li>
      </ol>
    </nav>
  </div>
</nav>
      </header>
      <main>
        
        <div className="container">
          <h1 className='text-success'>Welcome to our Education Platform!</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Slide 1</h3>
                <p>Some description for slide 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Slide 2</h3>
                <p>Some description for slide 2</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
