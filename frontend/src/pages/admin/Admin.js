import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { Row, Container, Col, Form, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import LoadingNotice from "../../components/notice/LoadingNotice";
import {listProfile, editProfile} from "../../store/actions/profileActions";
import { PROFILE_EDIT_RESET } from "../../store/constants/profileConstants";
import Axios from "axios"



function Admin(props) {
    const [show, setShow] = useState(false);
    const [id, setId] = useState();
    const [image, setImage] = useState();
    const [cv_url, setCvUrl] = useState();
    const [bio, setBio] = useState();
    const [git_hub_url, setGit_hub_url] = useState();
    const [twitter_url, setTwitter_url] = useState();
    const [linked_in_url, setLinked_in_url] = useState();
    const [instagram_url, setInstagram_url] = useState();
   
  
    const adminSignin = useSelector((state) => state.adminSignin);
    const { auth } = adminSignin;
  
    const dispatch = useDispatch();
    const profileList = useSelector((state) => state.profileList);
    const { loading, profiles, error } = profileList;
  
    const profileEdit = useSelector((state) => state.profileEdit);
    const {
      loading: loadingEdit,
      success: successEdit,
      error: errorEdit,
    } = profileEdit;
  
  
    useEffect(() => {
      if (successEdit) {
        setShow(false);
      }
      dispatch(listProfile());
      return () => {
        //
      };
    }, [dispatch, auth,  successEdit]);
  
    const editHandler = (e) => {
      e.preventDefault();
      dispatch(editProfile({ _id: id, image, cv_url, bio, git_hub_url, linked_in_url, twitter_url, instagram_url }));
    };
  
    
    const handleShow = (profile) => {
      setShow(true);
      setId(profile._id);
      setImage(profile.image);
      setCvUrl(profile.cv_url);
      setBio(profile.bio);
      setGit_hub_url(profile.git_hub_url);
      setTwitter_url(profile.twitter_url);
      setLinked_in_url(profile.linked_in_url);
      setInstagram_url(profile.instagram_url)
    };
  
    
    const handleCancel = ()=>{
        setShow(false); 
        dispatch({ type:PROFILE_EDIT_RESET});
    }
  
 const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${auth.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
    return (
        <div className="admin_page">
      <Link className="m-4 link_title"  to='/blogs'>Create or edit blogs</Link>
       <Link className="m-4 link_title"  to='/projects'>Create or edit projects</Link>
        <h2 className="title">My Profile</h2>
        <Container>
        <Row>
       <Col className="m-3" >
          {show && (
                <Col className=" m-3">
                  <Form  className="form-group" onSubmit={editHandler} >
                    {loadingEdit && <LoadingNotice />}
                    <h6 className="text-danger justify-content-center text-center">
                      {errorEdit && <div>{errorEdit}</div>}
                    </h6>
                    <div>
                </div>
                <div>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div>
              <input
                type="file"
                name="image"
                label="Choose Image"
                onChange={uploadFileHandler}
              />
              {loadingUpload && <LoadingNotice /> }
              <h6 className="text-danger justify-content-center text-center">
                      {errorUpload && <div>{errorUpload}</div>}
                    </h6>
              </div>
                <div className="form-group">
                      <label htmlFor="cv">Cv link</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cv"
                        value={cv_url}
                        onChange={(e) => setCvUrl(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bio">About me</label>
                      <textarea
                        type="textarea"
                        className="form-control"
                        id="bio"
                        rows="10"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="github">GitHub link</label>
                      <input
                        type="text"
                        className="form-control"
                        id="github"
                        value={git_hub_url}
                        onChange={(e) => setGit_hub_url(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="twit">Twitter link</label>
                      <input
                        type="text"
                        className="form-control"
                        id="twit"
                        value={twitter_url}
                        onChange={(e) => setTwitter_url(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="li">Linked_in link</label>
                      <input
                        type="text"
                        className="form-control"
                        id="li"
                        value={linked_in_url}
                        onChange={(e) => setLinked_in_url(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="insta">Instagram link</label>
                      <input
                        type="text"
                        className="form-control"
                        id="insta"
                        value={instagram_url}
                        onChange={(e) => setInstagram_url(e.target.value)}
                      />
                    </div>
                    <Button variant="outline-primary" size="lg" block type="submit">
                    {id ? "Update" : " Create"}
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="secondary"
                      size="lg"
                      block
                    >
                      Cancel
                    </Button>
                  </Form>
                </Col>
              )}
          </Col>
          <Col className=" m-3">
                {loading && <LoadingNotice />}
                <h6 className="text-danger justify-content-center text-center">
                {error && <>{error}</>}
                    </h6>
                
                <Table id="table" bordered size="md">
                  <thead>
                    <tr>
                      <th>TITLE</th>
                     
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profiles.map((profile) =>( 
                        <tr key={profile._id}>
                        <td>{profile.bio}</td>
                        <td>
                          <Button
                            variant="outline-success"
                            onClick={() => handleShow(profile)}
                          >Edit
                          </Button>
                        </td>
                      </tr>
                     ) )}
                  </tbody>
                </Table>
              </Col>
          </Row>
        </Container>
          
        </div>
      )
    }
    
export default Admin;

