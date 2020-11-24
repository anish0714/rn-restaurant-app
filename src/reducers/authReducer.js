import {
  SET_INTRO_SLIDER,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_FAILURE,
} from "../actions/types";

const initialState = {
  isLogin: false,
  showIntroSlider: false,
  user: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INTRO_SLIDER:
      return {
        ...state,
        showIntroSlider: !state.showIntroSlider,
      };
    case SET_LOGIN_FAILURE:
      return {
        ...state,
        isLogin: false,
      };
    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
      };
    default:
      return {
        ...state,
      };
  }
};
