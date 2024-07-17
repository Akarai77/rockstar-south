import React from 'react'
import Heading from '../components/Heading'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className="contact-container">
        <div style={{marginTop:"3rem"}}>
            <Heading content={"Contact Info"}/>
        </div>
        <div className="content" style={{color:"white",fontSize:"1.5rem",margin:"2rem",marginLeft:"3rem"}}>
            Welcome to Rockstar South – Where Pixels Ctrl-C meets Ctrl-V!<br/><br/>
            
            Corporate Headquarters:<br/>
            Address: 123 Game Street, Pixelville, Digital Universe<br/><br/>
            
            Contact Information:<br/>
            Phone: +1 (555) GAME-ON<br/>
            Email: info@rockstarsouth.com<br/><br/>

            ©2024 Rockstar South. We Dont Reserve Any Rights.<br/><br/>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact