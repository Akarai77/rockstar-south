import { NavLink } from "react-router-dom";
import { useState } from "react";
import '../styles/Navbar.css';


const Navbar = () => {
  const [isProfileActive,setIsProfileActive] = useState(false);
  const [activeLink,setActiveLink] = useState(null);
  const [showLinks,setShowLinks] = useState(false);

  const profile =
    <div className="profile">
            <img id="profile" src={require("../images/profile.png")} alt="profile" onClick={()=>setIsProfileActive(!isProfileActive)} />
            <div className={`profile-content ${isProfileActive ? 'active' : ''}`}>
              <div className="point"></div>
              <div className="profile-text">
                <p className="border">Sign In</p>
                <p className="border">Sign Up</p>
                <p>Help</p>
              </div>
            </div>
          </div>


  const links = <div style={{display:"flex"}}>
    <NavLink className={`${activeLink === 'link1' ? 'active' : ''}`} onClick={()=>setActiveLink('link1')} to="/">Home</NavLink>
    <NavLink className={`${activeLink === 'link2' ? 'active' : ''}`} onClick={()=>setActiveLink('link2')} to="/Cards">Cards</NavLink>
    <NavLink className={`${activeLink === 'link3' ? 'active' : ''}`} onClick={()=>setActiveLink('link3')} to="/Games">Games</NavLink>
  </div>

    return ( 
      <nav className="navbar">

        <div className="web-name">
          <h1>Rockstar South</h1>
        </div>

        <div className="links">
            {links}
            {profile}
        </div>

        <div className="mobile-links">
            {profile}
            <div className="tribar">
              <img className={`${showLinks ? 'active' : ''}`} src={require("../images/tribar.png")} alt="profile" onClick={()=>setShowLinks(!showLinks)} />
            </div>
            <div className={`mlinks ${showLinks ? 'active' : ''}`}>
              {links}
            </div>
        </div>

    </nav>
     );
}
 
export default Navbar;
