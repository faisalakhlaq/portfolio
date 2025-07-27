import React from 'react';

const mailIconStyle = {
    width: '15rem',
}
const socialIconStyle = {
    width: '2rem',
    padding: '.3rem',
    borderRadius: '50%',
}
const justifiedStyle = {
    textAlign: 'justify'
}
const Contact = () => {
    return (
        <div className="base-container" style={{textAlign:"center"}}>
            <h1>Contact Me</h1>
            <p className="contact-me-text" style={justifiedStyle}>
                If you are interested in working with me or just want to say hi.
                Do you have an idea that needs a web, software for its completion?
                Send me a message, question, suggestion. 
                You can directly send me an email at Faisal.Akhlaq@aol.com.
            </p>
            <p>
                <img  className="mail-image" style={mailIconStyle} src="mail.png"  alt={"Send Email"}/>
            </p>
            <p>
                <a href="https://github.com/faisalakhlaq" target="_blank" title="Github account of Faisal" rel="noopener noreferrer">
                    <img  style={socialIconStyle} src="github-icon.png"  alt={"Faisal Akhlaq Github"}/></a>

                <a href="https://www.linkedin.com/in/faisalakhlaq/" target="_blank" title="Linkedin Profile of Faisal" rel="noopener noreferrer">
                    <img  style={socialIconStyle} src="linkedin-icon.png"  alt={"Faisal Akhlaq LinkedIn"}/></a>

                <a href="http://pallandri.blogspot.com/" target="_blank" title="Blog" rel="noopener noreferrer">
                    <img  style={socialIconStyle} src="blogger-icon.png"  alt={"Faisal Akhlaq Blog"}/></a>
            </p>
        </div>
    )
}

export default Contact