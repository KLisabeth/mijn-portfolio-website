import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import { VscShield } from "react-icons/vsc";



function Signin(props) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


    return (
        <div className="signin">
      <div className="form_container">
        <Form className="admin_form" >
          <h3 className="text_center">
            <b>Admin</b> <VscShield />
          </h3>
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
