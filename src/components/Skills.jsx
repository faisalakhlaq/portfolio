import React from 'react';

const listStyle = {
    padding: '1rem'
}
const skillsListStyle = {
    display:"flex", 
    flexWrap: 'wrap', 
    justifyContent: 'center'
}
const centerAlignText = {
    textAlign:"center"
}

const Skills = () => {
    return (
        <div className="base-container">
            <h1 style={centerAlignText}>Skills</h1>
            <p style={centerAlignText}>“Mastery lies on an infinite continuum, 
                and as a result we will never reach the end. 
                We can, however, see to it that we are as 
                far along that continuum as our circumstance allows.”
                ― Chris Matakas
            </p>
            <div style={skillsListStyle}>
                <ul style={listStyle}>
                    <h3>Python</h3>
                    <li>Flask</li>
                    <li>Database</li>
                    <li>Web Scraping</li>
                    <li>Pandas</li>
                    <li>Bokey</li>
                </ul>
                <ul style={listStyle}>
                    <h3>Django</h3>
                    <li>ORM</li>
                    <li>Translations</li>
                    <li>User AUTH</li>
                    <li>Generic Views</li>
                    <li>Testing - Unit and Functional</li>
                    <li>API - REST Framework</li>
                    <li>Celery</li>
                </ul>
                <ul style={listStyle}>    
                    <h3>Basic to intermediate skills</h3>
                    <li>GIT</li>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML CSS</li>
                    <li>Java</li>
                    <li>Android</li>
                    <li>Databases (PostgreSQL, MySQL)</li>
                    <li>Ubuntu</li>
                </ul>
                <ul style={listStyle}>    
                    <h3>Non Technical Skills</h3>
                    <li>Project Management</li>
                    <li>Time Management</li>
                    <li>Writing</li>
                    <li>Teaching</li>
                    <li>Communication</li>
                    <li>Goal Setting</li>
                    <li>Positive Attitude</li>
                </ul>
            </div>
        </div>
    );
}

export default Skills