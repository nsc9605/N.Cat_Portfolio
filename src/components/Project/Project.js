import React from "react";

function Project(props) {
  return (
    <div className="card portfolio-item p-2 border-dark bg-dark text-white mb-3 shadow rounded centered">
      <img
        className="card-img-top img-fluid proj-img"
        src={props.image}
        alt={props.title}
      />
      <div className="card-body">
        <div className="card-content info-content">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-text">{props.description}</p>
          <p className="card-text">{props.tags}</p>
          <div className="card-links text-center text-white">
            <h2>
              <a
                href={props.repo}
                rel="noreferrer"
                target="_blank"
                alt="Github Repo"
                title="Github Repo"
                className="proj-link"
              >
                <i className="fa fa-github p-2 fa-2x text-center"></i>
              </a>
            </h2>
            <h2>
              <a
                href={props.deploy}
                rel="noreferrer"
                target="_blank"
                alt="Link to Deployed Page"
                title="Link To Deployed Page"
                className="proj-link"
              >
                <i className="fa fa-desktop p-2 fa-2x text-center"></i>
              </a>
            </h2>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Project;
