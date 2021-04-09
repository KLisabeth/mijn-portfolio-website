import React, { useEffect } from "react";
import image from "../assets/images/project.png";
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProjects } from "../store/actions/projectActions";
import LoadingNotice from "../components/notice/LoadingNotice";
import Footer from "../components/Footer";

function Projects() {
  const projectList = useSelector((state) => state.projectList);
  const { loading, projects, error } = projectList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  return (
    <>
    <div className="project">
      <h1 className=" project_h1">My Projects</h1>
      {loading === false ? (
        <div>
          <h6 className="text-danger justify-content-center text-center">
          {error && <div>{error}</div>}
          </h6>
      <Container>
        <Row>
        {projects.slice(0).reverse().map((project) => (
          <Col className="m-3"  key={project._id}>
            <div className="flip_card">
              <div className="flip_card_inner">
                <div className="flip_card_front">
                  <img
                    src={image}
                    alt="Project"
                    className="project_screenshot"
                  />
                  <h1 className=" project_h1">{project.title}</h1>
                </div>
                <div className="flip_card_back">
                  <h1 className=" project_h1">{project.title}</h1>
                  <p className=" project_p">
                  {project.description}
                  </p>

                  <Button variant="outline-primary"  href={project.web_url}>
                    Website <CgWebsite />
                  </Button>
                  <br />
                  <Button href={project.git_hub}>
                    Git-hub <AiFillGithub />
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          ))}
        </Row>
      </Container>
    </div>
    ) : (
        
        <LoadingNotice />
      
    )}
    </div>
    <Footer/>
    </>
  );
}

export default Projects;
