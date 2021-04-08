import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import { VscShield } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../store/actions/authActions';
import LoadingNotice from "../components/notice/LoadingNotice";



function Signin(props) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const adminSignin = useSelector((state) => state.adminSignin);
const {loading, auth, error } = adminSignin;
const dispatch = useDispatch();

const submitHandler = async (e) => {
  e.preventDefault();
  dispatch(signin(email, password));
};

useEffect(() => {
  if (auth) 
  props.history.push("/");
  
  }, [auth, props.history]);
    return (
        <div className="signin">
      <div className="form_container">
        <Form className="admin_form" onSubmit={submitHandler}>
          <h3 className="text_center">
            <b>Admin</b> <VscShield />
          </h3>
          {loading && <LoadingNotice />}
          <h6 className="text-danger justify-content-center text-center">
            {error && <>{error}</>}
          </h6>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              autoComplete="none"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <button className="admin_btn" type="submit">
            Sign-in
          </button>
        </Form>
      </div>
    </div>
    )
}

export default Signin
