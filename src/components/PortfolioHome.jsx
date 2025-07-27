import React from 'react';

import { Home, About, Experience, Skills, Contact, Projects, Playground } from "./index"

// const socialIconStyle = {
//     width: '25px',
//     padding: '.3rem',
//     borderRadius: '50%',
// }
// const centeredStyle = {
//     textAlign: 'center'
// }
// const justifiedStyle = {
//     textAlign: 'justify'
// }
const PortfolioHome = () => {
    return (
        <>
            {/* <div className='container'>
                <p style={centeredStyle}>
                    "Tell me and I forget. Teach me and I remember. Involve me and I learn."
                    <br /><i>Benjamin Franklin</i>
                </p>
                <div id="home" className="home-container">
                    <div className="home" style={centeredStyle}>
                        <img className="user-image-home" src="faisal.png" alt={"Faisal Akhlaq"} />
                        <h1 className="my-name">Faisal Akhlaq</h1>
                        <h4>A Back-end Developer</h4>

                        <a href="https://github.com/faisalakhlaq" target="_blank" title="Github account of Faisal" rel="noopener noreferrer">
                            <img style={socialIconStyle} src="github-icon.png" alt={"Faisal Akhlaq Github"} /></a>

                        <a href="https://www.linkedin.com/in/faisalakhlaq/" target="_blank" title="Linkedin Profile of Faisal" rel="noopener noreferrer">
                            <img style={socialIconStyle} src="linkedin-icon.png" alt={"Faisal Akhlaq LinkedIn"} /></a>

                        <a href="http://pallandri.blogspot.com/" target="_blank" title="Blog" rel="noopener noreferrer">
                            <img style={socialIconStyle} src="blogger-icon.png" alt={"Faisal Akhlaq Blog"} /></a>
                    </div>
                    <div className="home-text" style={justifiedStyle}>
                        <p>
                            Back-end developer working with Python and Django.
                            Have worked with established as well as startup companies
                            and helped them to achieve high quality applications.
                            Available for freelance work.
                        </p>
                    </div>
                </div>
            </div> */}
            <div id="home">
                <Home />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="experience">
                <Experience />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="playground">
                <Playground />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </>
    );
}

export default PortfolioHome
