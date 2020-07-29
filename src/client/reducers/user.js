import { SET_USER, REMOVE_USER } from "../actions/types";

const initialState = {
  ...JSON.parse(localStorage.getItem("user")),
  token: localStorage.getItem("jwtToken"),
} || {
  _id: "",
  courses: [],
  forums: [],
  notes: [],
  type: 0,
  name: "",
  email: "",
  token: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      localStorage.setItem("jwtToken", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return { ...action.payload };
    }
    case REMOVE_USER: {
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("user");
      return { ...initialState };
    }
    default:
      return state;
  }
}
