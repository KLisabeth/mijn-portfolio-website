import React from "react";
import LoadingCircleHtml from "../components/charts/LoadingCircleHtml";
import LoadingCircleCss from "../components/charts/LoadingCircleCss";
import LoadingCircleSaSS from "../components/charts/LoadingCircleSaSS";
import LoadingCircleJS from "../components/charts/LoadingCircleJS";
import LoadingCircleReact from "../components/charts/LoadingCircleReact";
import LoadingCircleSQL from "../components/charts/LoadingCircleSQL";
import LoadingCircleGithub from "../components/charts/LoadingCircleGithub";
import LoadingCircleHeroku from "../components/charts/LoadingCircleHeroku";
import LoadingCirclePostman from "../components/charts/LoadingCirclePostman";
import LoadingCircleMongo from "../components/charts/LoadingCircleMongo";
import LoadingCirclePS from "../components/charts/LoadingCirclePS";
import LoadingCircleXD from "../components/charts/LoadingCircleXD";
import LoadingCircleBootstrap from "../components/charts/LoadingCircleBootstrap";

import html from "../assets/images/html5.png";
import css3 from "../assets/images/css3.png";
import sass from "../assets/images/sass.1.png";
import js from "../assets/images/js.png";
import react from "../assets/images/React.png";
import sql from "../assets/images/sql.png";
import bootstrap from "../assets/images/bootstrap.png";
import github from "../assets/images/github.png";
import postman from "../assets/images/postman.png";
import heroku from "../assets/images/heroku.png";
import MongoDB from "../assets/images/mongoDb.png";
import ps from "../assets/images/ps.png";
import xd from "../assets/images/xd.png";
import figma from "../assets/images/figma.png";
import LoadingCircleFigma from "../components/charts/LoadingCircleFigma";


function Languages() {
  return (
    <div className="language-page">
      <section className="language-container">
        <h3>Languages I use</h3>
        <div className="languages">
          <div className="languageDescription">
            <LoadingCircleHtml />
            <img src={html} alt="html" />
          </div>
          <div className="languageDescription">
            <LoadingCircleCss />
            <img src={css3} alt="css3" />
          </div>
          <div className="languageDescription">
            <LoadingCircleSaSS />
            <img src={sass} alt="Sass" />
          </div>
          <div className="languageDescription">
            <LoadingCircleBootstrap />
            <img src={bootstrap} alt="Bootstrap" />
          </div>
          <div className="languageDescription">
            <LoadingCircleJS />
            <img src={js} alt="JavaScript" />
          </div>
          <div className="languageDescription">
            <LoadingCircleReact />
            <img src={react} alt="React" />
          </div>

          <div className="languageDescription">
            <LoadingCircleSQL />
            <img src={sql} alt="SQL" />
          </div>
        </div>
        <h3>Other packages</h3>
        <div className="languages">
          <div className="languageDescription">
            <LoadingCircleGithub />
            <img src={github} alt="Github" />
          </div>
          <div className="languageDescription">
            <LoadingCircleHeroku />
            <img src={heroku} alt="Heroku" />
          </div>
          <div className="languageDescription">
            <LoadingCircleMongo />
            <img src={MongoDB} alt="MongoDB" />
          </div>
          <div className="languageDescription">
            <LoadingCirclePostman />
            <img src={postman} alt="Postman" />
          </div>
        </div>
        <h3>Design programmes</h3>
        <div className="languages">
          <div className="languageDescription">
            <LoadingCirclePS />
            <img src={ps} alt="PhotoShop" />
          </div>
          <div className="languageDescription">
            <LoadingCircleXD />
            <img src={xd} alt="PhotoShop" />
          </div>

          <div className="languageDescription">
            <LoadingCircleFigma />
            <img src={figma} alt="Figma" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Languages;
