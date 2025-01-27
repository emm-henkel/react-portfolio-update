import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilePicture from '../assets/images/portfolio-picture.jpg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePicture} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/emm-henkel" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/emerson-henkel-2296ab1b8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Emerson M. Henkel</h1>
          <p>Software Developer, System Builder</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/emm-henkel" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/emerson-henkel-2296ab1b8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;