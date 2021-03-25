import slugify from 'slugify';
import data from '../data';

const initialState = {
  list: data,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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

export default reducer;
