import React from 'react'
import Heading from '../components/Heading'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
        <div style={{marginTop:"3rem"}}>
            <Heading content={"About Us"}/>
        </div>
        <div className="content" style={{color:"white",margin:"3rem 2rem 5rem 4rem",fontSize:"1.5rem",textAlign:"justify"}}>
            <p>
            Introducing Rocksatar South — because why innovate when you can imitate with pizzazz! Get ready for 'Grand Larceny Auto: Suburban Snafu' where you navigate a town vaguely reminiscent of 'Nice Hamlet,' or 'Dead Revolver Recompense' set in the Wild, Wild West but slightly to the left. Experience the thrill of slightly familiar gameplay and characters that are definitely not legally distinct from those you almost remember!"
            <br/><br/>Imagine a world where creativity takes a slight detour, and homage turns into a comedic adventure of almost-there nostalgia.
            </p>
        </div>
        <Footer/>
    </div>
  )
}

export default About