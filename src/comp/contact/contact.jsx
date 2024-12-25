import React from 'react';
import './contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import contact from "../../anm/Animation - 1735137098836.json";
import down from "../../anm/Animation - 1735094509873.json";
import done from "../../anm/done.json";
import message from "../../anm/message.json";


const Contact = () => {
  const [state, handleSubmit] = useForm("mnqelrog");
  return (
    <>
    <div className="head-contact d-flex mt-3 pt-2" style={{ justifyContent:"center",alignItems:"center"}} >
      <h1 className='d-flex' style={{ textAlign:"center", margin:'0 auto',justifyContent:"center",alignItems:"center",letterSpacing:"0px" }}> <Lottie 
         
         style={{height:60}}
         animationData={down}
       /> تواصل معانا  </h1>
      
    </div>
<div className='container-all mt-3 'style={{ padding:'0px 15px',minHeight:"600px" }}>
     <div dir='rtl' className="contact d-flex">
      <div className="left">
  <div className="title">
    <h1 className=" h1 d-flex" style={{ alignItems:"center" }}> <span className="icon-mail-envelope-closed"></span> تواصل معانا<Lottie 
           
           style={{height:80}}
           animationData={message}
         />  </h1>
    <p>يسعدنا تعاونا معاكم لتقديم افضل خدمه تسعدكم دائما  تواصل معانا وسوف نقوم بالرد علىيكم</p>
  </div>
  <div className="contactgem">
    <form onSubmit={handleSubmit}  className="d-flex" action="">
      <div className="d-flex">
      <label htmlFor="email" style={{ color:"#000" }}>البريد الالكترونى:</label>
      <input autoComplete="off" type="email" name="email" dir='auto'  placeholder=" Example@gmail.com"  id="email" />
      <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div className="d-flex "> 
      <label htmlFor="message" style={{ color:"#000" }}>الرساله:</label>
      <textarea autoComplete="off" placeholder="Enter Your Message" dir='auto' name="message" id="message" ></textarea>   <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      
      </div>
      <button type="submit" disabled={state.submitting}>{state.submitting ? "Submitting..." :"submit"}</button>
      {state.succeeded&& (<p className="d-flex mesu" style={{  marginTop:'1.7rem',
       }}> <Lottie loop={false}
           
            style={{height:55}}
            animationData={done}
          />Your message has been sent successfuly</p>)}
    </form>
  </div>
  </div>
  <div className="right">  <Lottie
            className="deve"
            
            animationData={contact}
          /></div>
    </div>
</div>
<div className="br"></div>
    </>
  )

}

export default Contact;
