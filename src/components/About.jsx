import React from 'react';

const bulletMarginStyle = {
    marginLeft: "2rem"
}
const About = () => {
    return (
        <div className='base-container'>
            <h1 style={{ textAlign: "center" }}>About me</h1>
            <p><b>Hi!</b></p>
            <br />
            <p style={{ textAlign: "justify" }}>
                Hej! I'm Faisal Akhlaq, a versatile Software Engineer based in 
                Copenhagen, with a strong background in bridging software 
                development and project planning to deliver robust and 
                user-friendly software. My professional passions include 
                developing backend services, creating real-time systems and 
                working with modern web technologies. I am proficient in 
                Python (Django, Flask) and have experience with 
                JavaScript/TypeScript (SvelteKit, React), as well as 
                relational databases like PostgreSQL and MySQL.

                I have successfully developed backend services for automated 
                production, integrated real-time machine communication using 
                MQTT and WebSockets and built various applications from 
                inventory tracking modules to SVG processing workflows. I am 
                also skilled in DevOps, using tools like Docker and GitHub 
                Actions for continuous delivery and deployment.
            </p>
            <br />
            <h3>Experience</h3>
            <div>
                <ol style={bulletMarginStyle}>
                    <li> Software Engineer at "Rodinia Generation" - 2025 </li>
                    <li> Django-Python Developer Intern at "Ticketbutler Copenhagen" - 2018 </li>
                    <li> Java Software Developer at "Korgix" - 2014 </li>
                    <li> Java Developer Intern at "Simus-Systems GmbH" - 2012 </li>
                </ol>
            </div>
            <br />
            <h3>Languages</h3>
            <div>
                <ol style={bulletMarginStyle}>
                    <li> English - Professional Proficiency </li>
                    <li> Danish - Fluent in spoken and reading, Intermediate in writing </li>
                    <li> Urdu - Native </li>
                    <li> Punjabi - Fluent </li>
                </ol>
                <pre className="tab"></pre>
            </div>
        </div>
    );
}

export default About
