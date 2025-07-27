import React from 'react';

import {
    GitHubIcon,
    LinkedInIcon,
    PythonIcon,
    DjangoIcon,
    PostgresIcon,
    RedisIcon,
    DockerIcon,
    IotIcon,
    MySQL,
    CiCd,
    JavaScript,
    TypeScript,
} from './Icons';

const Home = () => {
    return (
        <div className='container'>
            <section id="home" className="home-section">
                <div className="home-content">
                    <div className="home-text">
                        <h1>Full-stack Developer Specializing in Scalable Systems</h1>
                        <p className="home-description">
                            Built complete manufacturing systems handling 50k+ daily operations.
                            Expert in Django, Docker, and air-gapped deployments.
                        </p>
                    </div>

                    <div className="home-image">
                        <img
                            src="faisal.png"
                            alt="Faisal Akhlaq"
                            className="profile-image"
                            loading="lazy"
                        />
                        <div className="social-links">
                            <a href="https://github.com/faisalakhlaq" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon className="social-icon" />
                            </a>
                            <a href="https://linkedin.com/in/faisalakhlaq" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon className="social-icon" />
                            </a>
                        </div>
                    </div>

                    <div className="tech-stack">
                        <span>Core Technologies:</span>
                        <div className="tech-icons">
                            <PythonIcon className="tech-icon" />
                            <DjangoIcon className="tech-icon" />
                            <JavaScript className="tech-icon" />
                            <TypeScript className="tech-icon" />
                            <PostgresIcon className="tech-icon" />
                            <MySQL className='tech-icon' />
                            <RedisIcon className="tech-icon" />
                            <DockerIcon className="tech-icon" />
                            <CiCd className="tech-icon" />
                            <IotIcon className="tech-icon" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
