import React from "react";
// import Container from "react-bootstrap/Container";
// import Project from "../../components/Project/Project";
import Draft from "../../components/Project/Draft";
import projects from "../../utils/Projects";

function Portfolio() {
  return (
    <div>
      <h2>Projects</h2>
      <div fluid="md" className="portfolio-item p-1">
        {projects.map((project) => (
          <Draft
            // <Project
            project={project}
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            repo={project.repo}
            deploy={project.deploy}
            // ></Project>
          ></Draft>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
