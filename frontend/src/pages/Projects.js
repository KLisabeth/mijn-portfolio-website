import React from "react";
import image from "../assets/images/project.png";
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { Row, Col, Container, Button } from "react-bootstrap";

function Projects() {
  return (
    <div className="project">
      <h1 className=" project_h1">My Projects</h1>
      <Container>
        <Row>
          <Col className="m-3" >
            <div className="flip_card">
              <div className="flip_card_inner">
                <div className="flip_card_front">
                  <img
                    src={image}
                    alt="Project"
                    className="project_screenshot"
                  />
                  <h1 className=" project_h1">Title</h1>
                </div>
                <div className="flip_card_back">
                  <h1 className=" project_h1">Title</h1>
                  <p className=" project_p">
                    Here something i want to say about the project
                  </p>

                  <Button variant="outline-primary" href="#">
                    Website <CgWebsite />
                  </Button>
                  <br />
                  <Button href="#">
                    Git-hub <AiFillGithub />
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="m-3" >
            <div className="flip_card">
              <div className="flip_card_inner">
                <div className="flip_card_front">
                  <img
                    src={image}
                    alt="Project"
                    className="project_screenshot"
                  />
                  <h1 className=" project_h1">Title</h1>
                </div>
                <div className="flip_card_back">
                  <h1 className=" project_h1">Title</h1>
                  <p className=" project_p">
                    Here something i want to say about the project
                  </p>

                  <Button variant="outline-primary" href="#">
                    Website <CgWebsite />
                  </Button>
                  <br />
                  <Button href="#">
                    Git-hub <AiFillGithub />
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="m-3" >
            <div className="flip_card">
              <div className="flip_card_inner">
                <div className="flip_card_front">
                  <img
                    src={image}
                    alt="Project"
                    className="project_screenshot"
                  />
                  <h1 className=" project_h1">Title</h1>
                </div>
                <div className="flip_card_back">
                  <h1 className=" project_h1">Title</h1>
                  <p className=" project_p">
                    Here something i want to say about the project
                  </p>

                  <Button variant="outline-primary" href="#">
                    Website <CgWebsite />
                  </Button>
                  <br />
                  <Button href="#">
                    Git-hub <AiFillGithub />
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="m-3" >
            <div className="flip_card">
              <div className="flip_card_inner">
                <div className="flip_card_front">
                  <img
                    src={image}
                    alt="Project"
                    className="project_screenshot"
                  />
                  <h1 className=" project_h1">Title</h1>
                </div>
                <div className="flip_card_back">
                  <h1 className=" project_h1">Title</h1>
                  <p className=" project_p">
                    Here something i want to say about the project
                  </p>

                  <Button variant="outline-primary" href="#">
                    Website <CgWebsite />
                  </Button>
                  <br />
                  <Button href="#">
                    Git-hub <AiFillGithub />
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="m-3" >
            <div className="flip_card">
              <div className="flip_card_inner">
                <div className="flip_card_front">
                  <img
                    src={image}
                    alt="Project"
                    className="project_screenshot"
                  />
                  <h1 className=" project_h1">Title</h1>
                </div>
                <div className="flip_card_back">
                  <h1 className=" project_h1">Title</h1>
                  <p className=" project_p">
                    Here something i want to say about the project
                  </p>

                  <Button variant="outline-primary" href="#">
                    Website <CgWebsite />
                  </Button>
                  <br />
                  <Button href="#">
                    Git-hub <AiFillGithub />
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="m-3" >
            <div className="flip_card">
              <div className="flip_card_inner">
                <div className="flip_card_front">
                  <img
                    src={image}
                    alt="Project"
                    className="project_screenshot"
                  />
                  <h1 className=" project_h1">Title</h1>
                </div>
                <div className="flip_card_back">
                  <h1 className=" project_h1">Title</h1>
                  <p className=" project_p">
                    Here something i want to say about the project
                  </p>

                  <Button variant="outline-primary" href="#">
                    Website <CgWebsite />
                  </Button>
                  <br />
                  <Button href="#">
                    Git-hub <AiFillGithub />
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
