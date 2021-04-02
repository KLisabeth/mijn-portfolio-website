import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { RiAdminLine } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import "./component.css"
import Logo from "./Logo";

function Header() {
  const [isActive, setActive] = useState(`false`);
  
  const handleActive = () => {
    setActive(!isActive);
  };



  return (
    <div>
        <nav className="Navbar">
        <div className="content">
        <div id="logo">
            <Link to="/"><Logo/></Link>
          </div>
          <ul className={isActive ? "menu-list hide" : "menu-list active"}>
            <div className="icon cancel-btn" onClick={handleActive}>
              <VscChromeClose className="rime" />
            </div>
  
            <li>
              <Link to="/" onClick={handleActive} >Home</Link>
            </li>
            <li>
              <Link to="/projectlist" onClick={handleActive} >Projects</Link>
            </li>
            <li>
              <Link to="/bloglist" onClick={handleActive} >Blog</Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleActive} >Contact</Link>
            </li>
            <li>
            <Link to="/signin" onClick={handleActive}><RiAdminLine className="navbar-button"/></Link>
            </li>
          </ul>
          <div
            className={isActive ? "icon menu-bnt hide" : "icon menu-btn active"}
          >
            <RiMenu4Line className="rime" onClick={handleActive} />
          </div>
        </div>
      </nav>  
    </div>
  );
}

export default Header;
