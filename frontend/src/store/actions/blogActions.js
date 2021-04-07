import {
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_SAVE_REQUEST,
  BLOG_SAVE_SUCCESS,
  BLOG_SAVE_FAIL,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_FAIL,
} from "../constants/blogConstants";
import Axios from "axios";

const listBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: BLOG_LIST_REQUEST });
    const { data } = await Axios.get("api/blog");
    dispatch({ type: BLOG_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: BLOG_LIST_FAIL, payload: error.message });
  }
};

const saveBlog = (blog) => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOG_SAVE_REQUEST });
    const { adminSignin: { auth:{ token} } } = getState();
    if (!blog._id) {
      const { data } = await Axios.post("api/blog", blog, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: BLOG_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await Axios.put("api/blog/" + blog._id, blog, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: BLOG_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: BLOG_SAVE_FAIL, payload: error.message });
  }
};

const deleteBlog = (blogId) => async (dispatch, getState) => {
  try {
    const { adminSignin: { auth:{ token} } } = getState();
    dispatch({ type: BLOG_DELETE_REQUEST, payload: blogId });
    const { data } = await Axios.delete("api/blog/" + blogId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: BLOG_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: BLOG_DELETE_FAIL, payload: error.message });
  }
};

export { listBlogs, saveBlog, deleteBlog };
