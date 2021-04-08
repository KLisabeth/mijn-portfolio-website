import React, { useState} from "react";
import { Form } from "react-bootstrap";
import { ImEnvelop } from "react-icons/im";
import Icons from "../components/icons/Icons";
import Axios from "axios";


function Contact() {
  const [email, setEmail] = useState();
  const [comment, setComment] = useState();


const submitHandler = async (e) => {
  e.preventDefault();
  await Axios.post(
          "/api/message",
          { email, comment }
        ).then((response)=>{
    if (response.data.status === 'success') {
      alert("Message Sent."); 
      this.resetForm()
    } else if(response.data.status === 'fail') {
      alert("Message failed to send.")
    }
  })
}

  return (
    <div className="contact">
      <div className="contact_card">
        <h1 className="contact_title"> Get in touch!</h1>
        <Icons/>
        <div>
          <div className="contact_form_wrap">
            <Form bg="dark" autoComplete="off" className="contact_form" onSubmit={submitHandler}>
              <Form.Group>
                <Form.Label htmlFor="user-email">
                  Email
                </Form.Label>
                <Form.Control
                  id="user-email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="text-area">Your coments</Form.Label>
                <Form.Control
                  id="text-area"
                  as="textarea"
                  rows={3}
                  onChange={(e) => setComment(e.target.value)}
                />
              </Form.Group>
              <br />
              <button className="contact_btn" type="submit">
               <ImEnvelop className="envelop"/>{''} Submit{''}
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
