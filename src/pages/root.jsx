import React, { useEffect, useState } from 'react';
import  { useRef } from 'react';
import Nav from '../comp/nav';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const Root = () => {
  const[totop,settotop]=useState(false)
  useEffect(() => {
    window.addEventListener("scroll",()=>{
      if(window.scrollY>300){
settotop(true)
      }
      else{
        settotop(false)
      }
    })
  },[])
  const handelclick=()=>{
window.scrollTo(0,0)
  }
  return (
  <>
  <Nav/>
  <div className="main">
    
  <Outlet />
  <button onClick={handelclick} style={{ opacity:totop ? 1 : 0 }} className="totop "><FontAwesomeIcon icon={faArrowUp} /></button>

  </div>
  
  </>
  
  );
}

export default Root;
