import React from "react";
import '../assets/styles/About.scss';

function About() {
    return(
    <div className="about-container" id="about">
        <h1>About Me</h1>
        <p className="about-me">
            I'm a software developer native to Philadelphia with three years of experience. I have a passion for creating intuitive and responsive web applications, 
            and I'm particularly interested in frontend and web development roles. My goal is to build seamless user experiences while continuously expanding my technical expertise.
        </p>

        <h1 className="about-header">Current Pursuits</h1>
        <div className="pursuits-grid">
            <div className="pursuit">
                <h3>CompTIA A+</h3>
                <p>As stated above, I've always loved computer hardware; Acquiring A+ certification would be a great stepping stone toward being a system administrator.</p>
            </div>

            <div className="pursuit">
                <h3>CompTIA Security+</h3>
                <p>Like A+, this is another certification that aligns with my goals and provides an additional way of standing out above the crowd.</p>
            </div>

            <div className="pursuit">
                <h3>JLPT N5</h3>
                <p>The JLPT N5 is the first level of Japanese Language Proficiency Tests. I find it enjoyable to always be learning, so this is something set to challenge myself in a unique way.</p>
            </div>
        </div>
    </div>
    );
}

export default About;