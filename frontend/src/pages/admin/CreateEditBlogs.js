import React, { useState, useEffect } from "react";
import { Row, Container, Col, Form, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  listBlogs,
  saveBlog,
  deleteBlog,
} from "../../store/actions/blogActions";
import LoadingNotice from "../../components/notice/LoadingNotice";
import {BLOG_SAVE_RESET, BLOG_DELETE_RESET } from '../../store/constants/blogConstants'

function CreateEditBlogs(props) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [title, setTitle] = useState();
  const [article, setArticle] = useState();

  const adminSignin = useSelector((state) => state.adminSignin);
  const { auth } = adminSignin;

  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogList);
  const { loading, blogs, error } = blogList;

  const blogSave = useSelector((state) => state.blogSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = blogSave;

  const blogDelete = useSelector((state) => state.blogDelete);

  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = blogDelete;

  useEffect(() => {
    if (successSave) {
      setShow(false);
      dispatch({ type: BLOG_SAVE_RESET });
      props.history.push("/bloglist")
    }
    if (successDelete) {
      dispatch({ type: BLOG_DELETE_RESET });
    }
    dispatch(listBlogs());
    return () => {
      //
    };
  }, [dispatch, auth, props.history, successDelete, successSave]);

  const saveHandler = (e) => {
    e.preventDefault();
    dispatch(saveBlog({ _id: id, title, article}));
  };

  const deleteHandler = (blog) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      dispatch(deleteBlog(blog._id));
    }
  };
  const handleShow = (blog) => {
    setShow(true);
    setId(blog._id);
    setTitle(blog.title);
    setArticle(blog.article);
  };

  return (
    <div className="edit_page">
      <h2 className="title">{id ? "Update" : " Create"} blog </h2>
      <Button
        className="m-4"
        variant="outline-primary"
        onClick={() => handleShow({})}
      >
        Create
      </Button>

      <Container>
        <Row>
          {show && (
            <Col className=" m-3">
              <Form className="form-group" onSubmit={saveHandler}>
                {loadingSave && <LoadingNotice />}
                <h6 className="text-danger justify-content-center text-center">{errorSave && <>{errorSave}</>}</h6>
                <div className="dashboard-form">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="article">Description</label>
                  <textarea
                    type="textare"
                    className="form-control"
                    id="article"
                    rows="10" cols="50"
                    value={article}
                    onChange={(e) => setArticle(e.target.value)}
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
            <h6 className="text-danger justify-content-center text-center">{error && <>{error}</>}</h6>

            {loadingDelete && <LoadingNotice />}
            <h6 className="text-danger justify-content-center text-center">{errorDelete && <>{errorDelete}</>}</h6>

            <Table id="table" bordered size="md">
              <thead>
                <tr>
                  <th>TITLE</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td>{blog.title}</td>
                    <td>
                      <Button
                        variant="outline-success"
                        onClick={() => handleShow(blog)}
                      >
                        {" "}
                        Edit{" "}
                      </Button>
                      {"  "}
                      <Button
                        variant="outline-danger"
                        onClick={() => deleteHandler(blog)}
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

export default CreateEditBlogs;
