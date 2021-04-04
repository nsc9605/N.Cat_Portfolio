import React from "react";

function Project(props) {
  return (
    <div className="card card-proj portfolio-item p-2 border-dark bg-dark text-white mb-3 shadow rounded centered">
      <img
        className="card-img-top img-fluid proj-img mb-2"
        src={props.image}
        alt={props.title}
      />
      <div className="card-body info-content p-2 m-3 row">
        {/* <div className="card-content info-content py-2"> */}
          <h2 className="card-title pt-2">{props.title}</h2>
          <p className="card-text">{props.description}</p>
          <p className="card-text">{props.tags}</p>
          <br></br>
          <br></br>
          <h2 className="card-links col row">
            {/* <h2> */}
              <a
                href={props.repo}
                rel="noreferrer"
                target="_blank"
                alt="Github Repo"
                title="Github Repo"
                className="proj-link"
              >
                <i className="fa fa-github px-2 fa-lg text-center"></i>
              </a>
            {/* </h2> */}
            {/* <h2> */}
              <a
                href={props.deploy}
                rel="noreferrer"
                target="_blank"
                alt="Link to Deployed Page"
                title="Link To Deployed Page"
                className="proj-link"
              >
                <i className="fa fa-desktop p-2 fa-lg text-center"></i>
              </a>
            {/* </h2> */}
        </h2>
      </div>
    </div>
    // </div>
  );
}

export default Project;


