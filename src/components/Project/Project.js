import React from 'react';

// import { EmpDirectory, Scheduler, Buns, Burger, EmpTracker, Luck } from '../../assets/img';


function Project(props) {

    return (
        // <div className="card-container">
        <div className="card portfolio-item p-4">
            <img className="card-img-top" src={props.image} alt={props.title} />
            <div className="card-body">
                <div className="card-content info-content">
                    <h3 className="card-title">Project{props.title}</h3>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">{props.tags}</p>
                    <div className="card-links">
                        <a href={props.repo} rel='noreferrer' target="_blank">
                            <i className="fa fa-github"></i>
                        </a>
                        <br>
                        </br>
                        <a href={props.deploy} rel='noreferrer' target="_blank">
                            <i className="bi bi-window"></i>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
        // </div>
    )
}

export default Project;