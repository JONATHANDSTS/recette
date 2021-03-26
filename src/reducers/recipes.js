import slugify from 'slugify';
import { FETCH_RECIPES_SUCCES, FETCH_RECIPES_ERROR } from '../actions/recipes';

const initialState = {
  list: [],
  error: null,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_RECIPES_SUCCES:
      return {
        ...state,
        list: [...action.payload],
        error: null,
      };
    case FETCH_RECIPES_ERROR:
      return {
        ...state,
        error: 'impossible de recuperer les recettes, verifiez votre connexion',
      };
    default:
      return state;
  }
};

// Selectors
// une fonction qui recoit en parametre de la donnes brut et qui me renvoie
// juste ce dont jai besoin a partir de cette data

// const navList = data.map((dataObject) => ({
//   id: dataObject.id,
//   title: dataObject.title,
//   slug: slugifyTitle(dataObject.title),
// }));
const slugifyTitle = (titre) => `/recipe/${slugify(titre, { lower: true })}`;

export const getNavFromRecipes = (recipes) => recipes.map((dataObject) => ({
  id: dataObject.id,
  title: dataObject.title,
  slug: slugifyTitle(dataObject.title),
}));

// const homeData = data.map((dataObject) => ({
//   id: dataObject.id,
//   title: dataObject.title,
//   slug: slugifyTitle(dataObject.title),
//   image: dataObject.thumbnail,
//   difficulty: dataObject.difficulty,
// }));
export const GetHomeData = (recipes) => recipes.map((dataObject) => ({
  id: dataObject.id,
  title: dataObject.title,
  slug: slugifyTitle(dataObject.title),
  image: dataObject.thumbnail,
  difficulty: dataObject.difficulty,
}));

export const findRecipeFromSlug = (recipes, url) => (
// trouver le bon oblet et le renvoyer
  recipes.find((recipeObject) => slugifyTitle(recipeObject.title) === url));
export default reducer;
