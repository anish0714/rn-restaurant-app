import { SET_SELECTED_CATEGORY_DATA } from "./types";

import { categories, foodItem } from "../data/dataArrays";
export const getSelectedFoodItem = (title) => async (dispatch) => {
  let specificCategoryFoodItem = [];

  let specificCategoryId = categories.filter(
    (category) => category.title === title
  )[0].categoryId;
  foodItem.map((foodItem) => {
    if (foodItem.categoryId === specificCategoryId) {
      specificCategoryFoodItem.push(foodItem);
    }
  });

  await dispatch({
    type: SET_SELECTED_CATEGORY_DATA,
    payload: specificCategoryFoodItem,
  });
};
