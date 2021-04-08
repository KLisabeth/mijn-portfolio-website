import React, { useState, useEffect } from "react";
import { Row, Container, Col, Form, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import LoadingNotice from "../../components/notice/LoadingNotice";
import {listProjects, saveProject, deleteProject} from "../../store/actions/projectActions";
import {PROJECT_SAVE_RESET, PROJECT_DELETE_RESET } from '../../store/constants/projectConstants'

function CreateEditProjects(props) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [git_hub, setGitHub] = useState();
  const [web_url, setWebUrl] = useState();

  const adminSignin = useSelector((state) => state.adminSignin);
  const { auth } = adminSignin;

  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projectList);
  const { loading, projects, error } = projectList;

  const projectSave = useSelector((state) => state.projectSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = projectSave;

  const projectDelete = useSelector((state) => state.projectDelete);

  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = projectDelete;

  useEffect(() => {
    if (successSave) {
      setShow(false);
      dispatch({ type: PROJECT_SAVE_RESET });
      props.history.push("/projectlist")
    }
    if (successDelete) {
      dispatch({ type: PROJECT_DELETE_RESET });
    }
    dispatch(listProjects());
    return () => {
      //
    };
  }, [dispatch, props.history, auth, successDelete, successSave]);

  const saveHandler = (e) => {
    e.preventDefault();
    dispatch(saveProject({ _id: id, title, description, git_hub, web_url }));
  };

  const deleteHandler = (project) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      dispatch(deleteProject(project._id));
    }
  };
  const handleShow = (project) => {
    setShow(true);
    setId(project._id);
    setTitle(project.title);
    setDescription(project.description);
    setGitHub(project.git_hub);
    setWebUrl(project.web_url);
  };

  return (
    <div className="edit_page">
      <h2 className="title">{id ? "Update" : " Create"} project </h2>
      <Button
        className="m-4"
        variant="outline-primary"
        onClick={() => handleShow({})}
      >
        Create Product
      </Button>

      <Container>
        <Row>
          {show && (
            <Col className=" m-3">
              <Form className="form-group" onSubmit={saveHandler}>
                {loadingSave && <LoadingNotice />}
                <h6 className="text-danger justify-content-center text-center">
                  {errorSave && <div>{errorSave}</div>}
                </h6>
                <div className="dashboard-form">
                  <label htmlFor="Title1">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Title1"
                    value={title}
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Description1">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Description1"
                    value={description}
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Git-Hub1">Git-Hub link</label>
                  <input
                    className="form-control"
                    id="Git-Hub1"
                    required
                    type="text"
                    value={git_hub}
                    placeholder="Git-Hub link"
                    onChange={(e) => setGitHub(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Website1">Website link</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Website1"
                    required
                    value={web_url}
                    placeholder="Website link"
                    onChange={(e) => setWebUrl(e.target.value)}
                  />
                </div>

                <Button variant="outline-primary" size="lg" block type="submit">
                  {id ? "Update" : " Create"}
                </Button>
                <Button
                  onClick={() => setShow(false)}
                  variant="secondary"
                  size="lg"
                  block
                >
                  Cancel
                </Button>
              </Form>
            </Col>
          )}
          <Col className=" m-3">
            {loading && <LoadingNotice />}
            <h6 className="text-danger justify-content-center text-center">
            {error && <>{error}</>}
                </h6>
            
            {loadingDelete && <LoadingNotice />}
            <h6 className="text-danger justify-content-center text-center">
            {errorDelete && <>{errorDelete}</>}
            </h6>
            <Table id="table" bordered size="md">
              <thead>
                <tr>
                  <th>TITLE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project._id}>
                    <td>{project.title}</td>
                    <td>
                      <Button
                        variant="outline-success"
                        onClick={() => handleShow(project)}
                      >Edit
                      </Button>
                      {"  "}
                      <Button
                        variant="outline-danger"
                        onClick={() => deleteHandler(project)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateEditProjects;
