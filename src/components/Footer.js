import React from 'react'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FaChevronCircleDown} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitch, faYoutube, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../styles/footer.css";

const Footer = () => {

    const [isLangActive,setLangActive] = useState(false);

  return (
    <div className="footer">
        <div className="internal-links">
            <NavLink to={"/Contact"}>Contact</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Feedback</NavLink>
            <div className="container">
                <div className="set-language">
                    <div className="button" onClick={()=>{setLangActive(!isLangActive)}}>
                        <p>Select a Language</p>
                        <FaChevronCircleDown id="arrow" className={`${isLangActive ? 'active' : ''}`}/>
                    </div>
                    <div className={`languages ${isLangActive ? 'active' : ''}`}>
                        <div className="lang">English</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="misc">
            <p>Privacy</p>
            <p>Cookie Policy</p>
            <p>Legal</p>
        </div>
        <div className="external-links">
            <a href="https://x.com/rockstargames" target="_blank" rel="noreferrer"><img className="icon" style={{width: "2rem"}} alt="X" src={require("../images/twitter.png")}/></a>
            <a href="https://instagram.com/rockstargames" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faInstagram} size="2x"/></a>
            <a href="https://www.youtube.com/rockstargames" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faYoutube} size="2x"/></a>
            <a href="https://www.facebook.com/rockstargames" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faFacebook} size="2x"/></a>
            <a href="https://twitch.tv/rockstargames" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faTwitch} size="2x"/></a>
            <a href="http://github.com/Akarai77" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faGithub} size="2x"/></a>
        </div>
        <div className="rockstar-south">
            <p>Rockstar South</p>
            <p>This Website is made for educational purposes only!</p>
            <p>Please dont sue me!</p>
        </div>
    </div>
  )
}

export default Footer