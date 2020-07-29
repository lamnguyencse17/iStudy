import { SET_USER, REMOVE_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const setUser = (token) => (dispatch) => {
  // Set token to Auth header
  console.log(token);
  setAuthToken(token);
  // Decode token to get user data
  const decoded = jwt_decode(token);
  axios
    .post("http://localhost:3000/api/models/users", {
      _id: decoded._id,
    })
    .then((res, err) => {
      if (err) {
        console.log(err);
      } else {
        dispatch({ type: SET_USER, payload: { user: res.data, token } });
      }
    });
};

export const logoutUser = () => (dispatch) => {
  setAuthToken(false);
  dispatch({ type: REMOVE_USER });
};
