import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
//import editor from "../../Assets/Projects/codeEditor.png";
import pr_1 from "../../Assets/Projects/fig_pr_1.png";
//import suicide from "../../Assets/Projects/suicide.png";
import fig_pr_2 from "../../Assets/Projects/pr_2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={pr_1}
              isBlog={false}
              title="Avoiding Food Waste from Restaurant Tickets: A Big Data Management Tool"
              description="This study addresses food waste in restaurants by analyzing customer sales data from restaurant tickets. An unsupervised Machine Learning (ML) system was developed as an interpretative management tool. It examines relationships within ticket information and offers food waste-related recommendations through color-coded tables. Findings revealed connections between products and sales in specific months and other elements like products with days or hours."
              demoLink="https://ieeexplore.ieee.org/Xplore/home.jsp"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={fig_pr_2}
              isBlog={false}
              title="Deep Learning and Latent Variables in Nonuniform Antenna Array Processing
              for Direction of Arrival"
              description="The study addresses the Direction of Arrival (DOA) problem in Antenna Array processing, focusing on nonuniform spacing between array elements. While this offers benefits, it's also complex. Previous solutions employed various Deep Learning models. However, considering DOA's inherent simplicity, it's believed that the problem corresponds to specific manifolds in low-dimensional latent spaces—even for nonuniform arrays. The research compared manifold learning techniques like PCA, tSNE, autoencoders, and UMAP. The latent spaces showcased distinct one-dimensional manifold geometries with four branches. For nonuniform arrays, DOA recovery performed best with shallow autoencoders, suggesting the potential of low-dimensional latent spaces for electromagnetic issues."
              demoLink="https://ieeexplore.ieee.org/abstract/document/10265467"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
