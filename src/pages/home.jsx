import React, { useRef } from 'react';
import poster1 from "../img/photo_2024-12-24_01-14-53.jpg"
import poster2 from "../img/photo_2024-12-24_00-56-50.jpg"
import poster3 from "../img/photo_2024-12-24_00-56-57.jpg"
import "./home.css"
import down from "../anm/Animation - 1735094509873.json";
import Lottie from "lottie-react";

import { Carousel } from 'react-bootstrap';

import Cart from '../comp/cart';
import Contact from '../comp/contact/contact';
import About from '../comp/about/about';
import Footer from '../comp/foorter/footer';
const Home = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const scrollToSection = (index) => {
    sectionRefs[index].current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    
  <>
      <div className='container-all'>
          <div className="products mb-4">
          <Carousel>
          <Carousel.Item>
        <div  className="poster-image"><img style={{ marginTop:"20px" }}  src={poster1} alt="" /></div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="poster-image"><img style={{ marginTop:"20px" }} src={poster2} alt="" /></div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="poster-image"><img style={{ marginTop:"20px" }}  src={poster3} alt="" /></div>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
          </div>
      </div>
      <div className="head-contact d-flex mt-3 mb-3" style={{ justifyContent:"center",alignItems:"center"}} >
      <h1 className='d-flex' style={{ textAlign:"center", margin:'0 auto',justifyContent:"center",alignItems:"center",letterSpacing:"0px" }}> <Lottie 
         
         style={{height:60}}
         animationData={down}
       />  المنتجات  </h1>
      
    </div>
        
        
          <Cart/>
          <About/>
          <Contact/>
        <Footer/>
          
        
  </>
  
  );
}

export default Home;
