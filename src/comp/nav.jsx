import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../img/mfipchem.png"
import "./nav.css"
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const Nav = () => {
  const[status,setstaus]=useState("home")
const handelstatus= (value) => {
  setstaus(value)
  
}
const scrollSmoothly = (value) => {
  if (window.innerWidth > 1130) {
    window.scrollBy({
      top: value, // المسافة بالبيكسلات التي سيتم التمرير إليها
      behavior: "smooth", // التمرير السلس
    });
  }
  if(window.innerWidth<1130&&window.innerWidth>575){
    if(value===4000){
      window.scrollBy({
        top: 5800, // المسافة بالبيكسلات التي سيتم التمرير إليها
        behavior: 'smooth' // التمرير السلس
      });
    }
    
  }else if(window.innerWidth<575){
    
      window.scrollBy({
        top: value, // المسافة بالبيكسلات التي سيتم التمرير إليها
        behavior: 'smooth' // التمرير السلس
      });
    
  }
  
};

  
  return (
    <div style={{ zIndex:"55" }}>
<div className="contactbar" style={{ width:"100%" }}>
<div className='contactbar-container'>
    <div className="email"> <FontAwesomeIcon icon={faUser} />:msfipscnal@gmail.com</div>
    <div className="contact-icons">
      <ul>
        <li><a href=""></a><FontAwesomeIcon style={{ fontSize: '25px' }} color='blue' icon={faFacebook} /></li>
        <li><a href=""></a><FontAwesomeIcon style={{ fontSize: '25px' }} color='rgb(37, 211, 102)' icon={faWhatsapp} /></li>
        <li><a href=""></a><FontAwesomeIcon style={{ fontSize: '25px' }} color='#E4405F'  icon={faInstagram} /></li>
      </ul>
    </div>
</div>

</div>
  
    <div  className='main-nav' >
    
  <div className="container-mainnav" >
        <div href="#home"><div className='logo'>
        <div className="text-footer">MFIPCHEM</div>
        </div>
        </div>
        
        <div className="justify-content-end">
          <ul className='services'>
            <li className={`${status=="home"?'activee':'service'}`} onClick={e=>{handelstatus("home") 
              scrollSmoothly(0)}}>الصفحه الرئيسيه</li>
            <li className={`${status=="about"?'activee':'service'}`} onClick={e=>{handelstatus("about")
              scrollSmoothly(2200)
            }}>عن الشركه</li>
            <li className={`${status=="products"?'activee':'service'}`} onClick={e=>{handelstatus("products")
              scrollSmoothly(950)
            }}>المنتجات</li>
            <li className={`${status=="contact"?'activee':'service'}`} onClick={e=>{handelstatus("contact")
              scrollSmoothly(4000)
            }}>تواصل معانا</li>
          </ul>
          <Dropdown data-bs-theme="dark" style={{ marginRight:"30px" }}>
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          <FontAwesomeIcon style={{ fontSize:"1.5rem" }} icon={faBars} />
          </Dropdown.Toggle>
    
          <Dropdown.Menu dir='rtl' >
          
            <div  style={{ paddingRight:"10px",direction:"rtl",textAlign:'right' }} onClick={() => {
              scrollSmoothly(7500)
            }}>تواصل معانا</div>
            <div dir='auto' onClick={() => {
              scrollSmoothly(700)
            }} style={{ paddingRight:"10px",textAlign:'right' }} >المنتجات</div>
          
            <div dir='auto' style={{ paddingRight:"10px",textAlign:'right' }} onClick={() => {
              scrollSmoothly(5200)
            }} >عن الشركه</div>
          </Dropdown.Menu>
        </Dropdown>
        </div>
  </div>
    
  </div>
  </div>
  );
}

export default Nav;
