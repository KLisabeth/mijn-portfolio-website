import React, { useState, useEffect} from "react";
import { Form } from "react-bootstrap";
import { ImEnvelop } from "react-icons/im";
import Icons from "../components/icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { messageMe } from "../store/actions/messageActions";
import {MESSAGE_RESET} from "../store/constants/messageConstants"
import Footer from "../components/Footer";



function Contact(props) {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const messageSend = useSelector((state) => state.messageSend);
  const {loading, success: successSend, error } = messageSend;
  const dispatch = useDispatch();

  // const redirect = props.location.search
  //   ? props.location.search.split('=')[1]
  //   : '/contact';

  useEffect(() => {
    if (successSend) {
      setTimeout(() => {
        dispatch({ type: MESSAGE_RESET });
      }, 3000);
    }
    return () => {
      //
    };
  }, [dispatch, successSend]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(messageMe(email, comment));
    e.target.reset()
  };


  return (
    <>
    <div className="contact">
      <div className="contact_card">
        <h1 className="contact_title"> Get in touch!</h1>
        <Icons/>
        <div>
          <div className="contact_form_wrap">
          <h6 className="text-danger justify-content-center text-center">
              {loading && <div>Sending...</div>}
              {successSend && <div>Your message is send...</div>}
              {error && <>{error}</>}
            </h6>
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
    <Footer/>
    </>
  );
}
export default Contact;
