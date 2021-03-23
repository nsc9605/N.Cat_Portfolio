import React from "react";

function Project(props) {
  return (
    // <div className="container p-3 m-4 justify-content-center">
    <div className="card portfolio-item p-2 border-dark bg-dark text-white mb-3">
      <img
        className="card-img-top img-fluid proj-img"
        src={props.image}
        alt={props.title}
      />
      <div className="card-body">
        <div className="card-content info-content">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">{props.description}</p>
          {/* <h5 className="blockquote">Tech: <span className="tags"> {props.tags}</span></h5> */}
          <p className="card-text">{props.tags}</p>
          <div className="card-links">
            <h5>
              Github:
              <a
                href={props.repo}
                rel="noreferrer"
                target="_blank"
                alt="Github Repo"
                title="Github Repo"
              >
                <i className="fa fa-github p-1"></i>
              </a>
            </h5>
            <h5>
              Deployment:  
              <a
                href={props.deploy}
                rel="noreferrer"
                target="_blank"
                alt="Link to Deployed Page"
                title="Link To Deployed Page"
              >
                <i className="bi bi-window p-1"></i>
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  //  </div>
  );
}

export default Project;
