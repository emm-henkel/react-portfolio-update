import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/emm-henkel" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/emerson-henkel-2296ab1b8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio created by and for <a href="https://github.com/emm-henkel" target="_blank" rel="noreferrer">Emerson Henkel</a></p>
    </footer>
  );
}

export default Footer;