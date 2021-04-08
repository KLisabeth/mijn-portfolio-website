import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { RiAdminLine } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../store/actions/authActions";
import Logo from "./Logo";
import Arrow from "./arrow/Arrow";

function Header() {
  const [isActive, setActive] = useState(`false`);
  
  const dispatch = useDispatch();

  const adminSignin = useSelector((state) => state.adminSignin);
  const { auth } = adminSignin;

  const handleActive = () => {
    setActive(!isActive);
  };

  const handleSignout = () => {
    dispatch(signout());
  };

  return (
    <div>
     {auth && auth.isAdmin ? (
      <nav className="Navbar">
        <div className="content">
        <Arrow />
          <div id="logo">
            <Link to="/"><Logo/></Link>
          </div>
          <ul className={isActive ? "menu-list hide" : "menu-list active"}>
            <div className="icon cancel-btn">
              <VscChromeClose className="rime" onClick={handleActive} />
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
              <Link to="/admin" onClick={handleActive} >Admin</Link>
            </li>
            <li>
              <button className="navbar-button" onClick={handleSignout}>Log out</button>
            </li>
          </ul>
          <div
            className={isActive ? "icon menu-bnt hide" : "icon menu-btn active"}
          >
            <RiMenu4Line className="rime" onClick={handleActive} />
          </div>
        </div>
      </nav>
     ) : (
        <nav className="Navbar">
        <div className="content">
        <Arrow/>
          <div className="logo">
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
     )} 
        
    </div>
  );
}

export default Header;
