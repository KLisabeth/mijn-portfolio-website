import React from "react";
import myphoto from '../assets/images/my-photo.jpg';



function About (){

    return(
        <div className="about">
        <div className="about_content">
        <div className="about_row">
        <div className="about_column">
        <div className="my_img">
        <img src={myphoto} alt=" " />
        
         </div>
         <a  className="about_btn"  href="https://drive.google.com/file/d/11KDJh6MMaiG8FGYla3kpdXpvC-_UYngC/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer" >
         
Download my Cv 
                   
        </a> 
         </div>
         
         <div className="about_column">
   
          <div className="about_title">ABOUT ME</div>
          <h5 className="about_h3">
          Hello i am Kateryna Lisabeth from Ukraine and i live in Belgium.
          <br/>
          I was always interested in web development, and last year with <big>HackYourFuture Belgium</big> i received an opportunity to start new carrier path. 
           In a short 8 month i have managed to learn full-stack web development skills.
           I have
					progressed from "Hello World", to be able to make a full stack application.
          And now i am looking for an opportunity to join a company team and start a journey as a young front-end developer.
          
  <br/>
           Available to start immediately
          </h5>
          </div>
         
          </div>
        </div>
      </div>
    );

}
export default About

