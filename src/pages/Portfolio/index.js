import React from "react";
import ContainerFluid from "../../components/ContainerFluid/index";
import Project from "../../components/Project/Project";
import projects from "../../utils/Projects";

function Portfolio() {

  return (
    <ContainerFluid id="portfolio" title="Portfolio">
      <div className="">
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
      </div>
    </ContainerFluid>
  );
}

export default Portfolio;

