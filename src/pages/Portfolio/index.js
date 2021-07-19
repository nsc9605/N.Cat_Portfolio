import React from "react";
import Container from "react-bootstrap/Container";
import Project from "../../components/Project/index";
import Footer from "../../components/Footer/Footer";
import projects from "../../utils/Projects";

function Portfolio() {
  return (
    <Container fluid="xs">
      <h2 className="m-2 page-header">Projects</h2>
      <div fluid="xs" className="portfolio-item p-1">
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
          />
        ))}
      </div>
      <Footer />
    </Container>
  );
}

export default Portfolio;
