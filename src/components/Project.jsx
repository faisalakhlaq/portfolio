import React from 'react';

const imgStyle = {
    maxWidth: '17rem',
}
const projectCardStyle = {
    textAlign: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '2rem'
}

const Project = ({project, onClick}) => {
    return (
        <div style={projectCardStyle} onClick={() => onClick(project)}>
            {project.title}
            <br />
            <img src={project.image} style={imgStyle} alt={project.title || "Project image"}></img>
        </div>
    )
}

export default Project;