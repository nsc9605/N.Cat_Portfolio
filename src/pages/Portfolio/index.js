import React from "react";
import Container from "react-bootstrap/Container";
// import Project from "../../components/Project/Project";
import Draft from "../../components/Project/Draft";
import projects from "../../utils/Projects";

function Portfolio() {

  return (
    <Container className="portfolio-item m-2">
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
    </Container > 
  );
}

export default Portfolio;

