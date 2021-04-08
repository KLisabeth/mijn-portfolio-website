import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_SAVE_REQUEST,
  PROJECT_SAVE_SUCCESS,
  PROJECT_SAVE_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_DELETE_FAIL,
  
} from "../constants/projectConstants";
import Axios from "axios";

const listProjects = () => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_LIST_REQUEST });
    const { data } = await Axios.get("/api/project");
    dispatch({ type: PROJECT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROJECT_LIST_FAIL, payload: error.message });
  }
};


const saveProject = (project) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROJECT_SAVE_REQUEST });
    const { adminSignin: { auth:{ token} } } = getState();
    if (!project._id) {
      const { data } = await Axios.post("/api/project", project, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: PROJECT_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await Axios.put("/api/project/" + project._id, project, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: PROJECT_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: PROJECT_SAVE_FAIL, payload: error.message });
  }
};

const deleteProject = (projectId) => async (dispatch, getState) => {
  try {
    const { adminSignin: { auth:{ token} } } = getState();
    dispatch({ type: PROJECT_DELETE_REQUEST, payload: projectId });
    const { data } = await Axios.delete("api/project/" + projectId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: PROJECT_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROJECT_DELETE_FAIL, payload: error.message });
  }
};

export {
  listProjects,
  saveProject,
  deleteProject,
};
