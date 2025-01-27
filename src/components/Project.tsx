import React from "react";
import oldportfolio from '../assets/images/oldportfolio.png';
import liftleader from '../assets/images/liftleader-picture.png';
import systembuild from '../assets/images/system-build.jpg';
import trinityit from '../assets/images/trinityit.png';
import gandr from '../assets/images/gandr.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://trinityit.biz" target="_blank" rel="noreferrer"><h2>Trinity Information Technology</h2></a>
                <p>The first website that I was able to assist in development as a full time software engineer. Here, I was challenged with using a bunch of new technologies, Drupal, AWS Lightsail, AWS API Gateway, among many others. </p>
                <a href="https://trinityit.biz" target="_blank" rel="noreferrer"><img src={trinityit} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="gandrcontractors.com" target="_blank" rel="noreferrer"><h2>G&R Contractors</h2></a>
                <p>Using the knowledge obtained through working on Trinity IT, my skills were tested further here.I quickly learned how to better communicate with clients to get key details of what is expected of us me as a developer, as well as how to set expectations for the client.</p>
                <a href="gandrcontractors.com" target="_blank" rel="noreferrer"><img src={gandr} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/emm-henkel/gym-leaderboard-main" target="_blank" rel="noreferrer"><h2>Lift Leader</h2></a>
                <p>An app desgined to "gameify" going to the gym. Allows a user to sign in, log their workouts, track what muscle groups were exercised, and compete against others for the top spot in a one-rep-max leaderboard for squat, bench, and deadlift.</p>
                <a href="https://github.com/emm-henkel/gym-leaderboard-main" target="_blank" rel="noreferrer"><img src={liftleader} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/emm-henkel/react-portfolio" target="_blank" rel="noreferrer"><h2>Portfolio V1</h2></a>
                <p>The original version of my portfolio, but my first attempt at marketing myself that helped me land my first internship which evolved into a full time offer. This website utilizes ReactJS and was hosted on Netlify</p>
                <a href="https://github.com/emm-henkel/react-portfolio" target="_blank" rel="noreferrer"><img src={oldportfolio} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/emm-henkel" target="_blank" rel="noreferrer"><h2>System Building</h2></a>
                <p>During my break from work, I've had the time to get back into what made me fall in love with technology. I've worked on numerous systems as a way to provide for myself. These projects range from fully assembly, to routine maintainence and everything in between. </p>
                <a href="https://github.com/emm-henkel" target="_blank" rel="noreferrer"><img src={systembuild} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
        </div>
    </div>
    );
}

export default Project;