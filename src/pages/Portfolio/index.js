import React from "react";
import Container from "react-bootstrap/Container";
// import ContainerFluid from "../../components/ContainerFluid/index";
import Project from "../../components/Project/Project";
import projects from "../../utils/Projects";

function Portfolio() {

  return (
    <Container>
        {projects.map((project) => (
          <Project
          project={project}
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            repo={project.repo}
            deploy={project.deploy}
          ></Project>
        ))}
    </Container > 
  );
}

export default Portfolio;

