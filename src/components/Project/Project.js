import React from 'react';
// import projects from '../../pages/Portfolio/index'


function Project(props) {

    return (
        // <div className="card-container">
        <div className="portfolio-item">
            <img className="project-img" src={props.image} alt={props.title} />
            <div className="info">
                <div className="card-content info-content">
                    <h3 className="project-title">{props.title}</h3>
                    <p>{props.description}</p>
                    <p>{props.tags}</p>
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
        // </div>
    )
}

export default Project;