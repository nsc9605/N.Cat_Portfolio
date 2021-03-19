import React from 'react';



function Project(props) {

    return (
        <div className="portfolio-item">
            <img className="project-img" src={props.image} alt={props.title} />
            <div className="info">
                <div className="info-content">
                    <h3 className="project-title">{props.title}</h3>
                    <p>{props.description}</p>
                    <div className="links">
                        <a href={props.repo} rel='noreferrer' target="_blank">
                            <i className="fa fa-github"></i>
                        </a>
                        <a href={props.deploy} rel='noreferrer' target="_blank">
                            <i className="fa fa-"></i>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default Project;