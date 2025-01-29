import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAws} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faComputer } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Python",
    "Java",
    "Jython",
    "R",
    "MongoDB",
    "SQL",

];

const labelsSecond = [
    "Git",
    "Docker",
    "AWS",
    "AWS CodeCommit",
    "Trello",
    "Linux",
    "Apache NiFi",
    "Apache Kafka"
];

const labelsThird = [
    "Custom Built Systems",
    "Troubleshooting",
    "Repair",
    "Installation",
    "Personal Computers",
    "Mac",
    "Mobile Computing Devices",
    "Printers",
    "Custom Keyboards",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Knowledge and Experience</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built, maintained, and assisted in building a diverse array of web applications using modern technologies such as React and traditional technologies like HTML, CSS, and JavaScript. In positions utilizing these skills, I have also learned how to communicate with clients to show off progress, learn about their concerns, and update my work based on their expectations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>DevOps & Documentation</h3>
                    <p>In the process of building applications, I make it easier to see my accomplishments by setting up version control, and CI/CD pipelines. This makes it easier for me to keep projects running while still allowing myself and my fellow developers to work and break things to consistently improve.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faComputer} size="3x"/>
                    <h3>System Building</h3>
                    <p>I was placed on the track of being a software developer by my love of computer hardware. I have a side gig of building, repairing, troubleshooting, and installing Personal Computing systems. This extends to other types of hardware such as mobile computing devices, mobile game devices, printers, and my most successful services - Custom Keyboards.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Services and Skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;