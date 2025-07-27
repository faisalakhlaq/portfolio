import React from 'react';

const bulletMarginStyle = {
    marginLeft: "2rem"
}
const About = () => {
    return (
        <div className='base-container'>
            <h1 style={{ textAlign: "center" }}>About me</h1>
            <p>Hej!</p> <br />
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
            <div>
                Recently I developed some web projects using Django:
                <ul style={bulletMarginStyle}>
                    <li>MobileTilbud website for sale offers on mobiles from different companies</li>
                    <li>Social web application</li>
                    <li>Simple ecommerce web application</li>
                    Details and links to projects can be seen in projects section.
                </ul>
                <br />
                Python is used in different application domains, I explored following:
                <ul style={bulletMarginStyle}>
                    <li>Web apps using Flask, Jinja templating, login management,
                    decorators, restricting access to functions and resources
                        based on roles</li>
                    <li>Web development using Django and Rest Framework-API</li>
                    <li>Interacting with databases in desktop and web applications
                        using SQLAlchemy and simple Database querying. CRUD operations</li>
                    <li>Learnt bit of mapping</li>
                    <li>Graphs using Bokeh and pandas</li>
                    <li>Some interesting web-scrapping of  dynamic and static websites
                        using requests and selenium</li>
                    <li>A bit of image and video processing using OpenCV</li>
                    <li>Basics of stock market data fetching and displaying in a
                        Candlestick chart</li>
                    <li>Desktop application using tkinter</li>
                    <li>Deployment on Heroku</li>
                </ul>
            </div>
            <br />
            <h3>Education</h3>
            <div id="education">
                <ul style={bulletMarginStyle}>
                <li>MSc Software Engineering and Management from <i>Linköpings University, Sweden</i>.</li>
                <h4>Recent Educational Activities</h4>
                <li>Scientific Computing with Python Certification (www.freecodecamp.org)</li>
                <li>Python Mega Course: Build 10 Real World Application (www.udemy.com)</li>
                <li>E-commerce web development with Django (www.udemy.com)</li>
                </ul>
            </div>
            <br />
            <h3>Publications</h3>
            <div>
                <ul style={bulletMarginStyle}>
                    <li>
                        Automatic Assembler Generator for NoGAP - IEEE <br />
                        Ist author: Per Karlström,
                    </li>
                    <li>
                        Cycle Accurate Simulator Generator for NoGAP - IEEE <br />
                        Ist author: Per Karlström,
                    </li>
                </ul>
            </div>
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