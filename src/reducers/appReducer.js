import { SET_SELECTED_CATEGORY_DATA } from "../actions/types";


import { categories, foodItem } from "../data/dataArrays";
const initialState = {
  categoriesData: categories,
  foodItemData: foodItem,
  selectedCategory: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_CATEGORY_DATA:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
