import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import '../styles/Navbar.css';

const Navbar = () => {
  const [isProfileActive,setIsProfileActive] = useState(false);
  const [showLinks,setShowLinks] = useState(false);
  const [activeLink,setActiveLink] = useState("/");
  const location = useLocation();

  useEffect(()=>{
    setActiveLink(location.pathname);
  },[location.pathname]);

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
    <NavLink className={`${activeLink === '/' ? 'active' : ''}`} onClick={()=>{setActiveLink('/');setShowLinks(false);}} to="/">Home</NavLink>
    <NavLink className={`${activeLink === '/Cards' ? 'active' : ''}`} onClick={()=>{setActiveLink('/Cards');setShowLinks(false);}} to="/Cards">Cards</NavLink>
    <NavLink className={`${activeLink === '/Games' ? 'active' : ''}`} onClick={()=>{setActiveLink('/Games');setShowLinks(false);}} to="/Games">Games</NavLink>
    <NavLink className={`${activeLink === '/Gallery' ? 'active' : ''}`} onClick={()=>{setActiveLink('/Gallery');setShowLinks(false);}} to="/Gallery">Gallery</NavLink>
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
