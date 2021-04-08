import React from "react";
import './icons.css';
import Nav from 'react-bootstrap/Nav'
import { GoMarkGithub } from "react-icons/go";
import { IoLogoTwitter } from "react-icons/io";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Icons() {

  const github = "https://github.com/KLisabeth";
  const twitter = "https://twitter.com/Katie66097186";
  const linkedin = "https://www.linkedin.com/in/kateryna-lisabeth-48a8a093/";
  const instagram = "https://www.instagram.com/justagirl83/"

    return (
        <div className="icons">
        <Nav.Link href={github} >
          <GoMarkGithub className=" github" />
        </Nav.Link>

        <Nav.Link href={twitter}>
          <IoLogoTwitter className=" twitter" />
        </Nav.Link>

        <Nav.Link  href={linkedin}>
          <AiOutlineLinkedin className=" linkedin" />
          </Nav.Link>

         <Nav.Link href={instagram}>
          <AiOutlineInstagram className=" instagram" />
          </Nav.Link>
      </div>
    )
}

export default Icons
