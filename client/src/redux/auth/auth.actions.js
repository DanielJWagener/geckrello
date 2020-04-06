import axios from "axios";
import actionTypes from "../types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/v1/users/current_user");

  dispatch({ type: actionTypes.FETCH_USER, payload: res.data });
};
