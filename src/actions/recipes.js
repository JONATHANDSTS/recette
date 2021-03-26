export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_SUCCES = 'FETCH_RECIPES_SUCCES';
export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';

export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});
export const fetchRecipesSucces = (payload) => ({
  type: FETCH_RECIPES_SUCCES,
  payload,
});
export const fetchRecipesError = () => ({
  type: FETCH_RECIPES_ERROR,

});
