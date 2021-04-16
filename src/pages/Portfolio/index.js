import React from "react";
import Container from "react-bootstrap/Container";
// import Project from "../../components/Project/Project";
import Draft from "../../components/Project/Draft";
import Footer from "../../components/Footer/Footer";
import projects from "../../utils/Projects";

function Portfolio() {
  return (
    <Container fluid="md">
      <h2 className="m-2 page-header">Projects</h2>
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
      <Footer />
    </Container>
  );
}

export default Portfolio;
