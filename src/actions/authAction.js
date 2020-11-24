import {
  SET_INTRO_SLIDER,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_FAILURE,
} from "./types";

import { users } from "../data/dataArrays";

export const setShowIntroSlider = () => {
  return {
    type: SET_INTRO_SLIDER,
  };
};

export const verifyUser = (id, password) => async (dispatch) => {
  const userExist = users.filter(
    (user) => user.userId === id && user.password === password
  )[0];

  if (userExist) {
    dispatch({
      type: SET_LOGIN_SUCCESS,
    });
  } else {
    dispatch({
      type: SET_LOGIN_FAILURE,
    });
  }
};
