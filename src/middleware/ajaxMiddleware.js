import axios from 'axios';

import { fetchRecipesError, fetchRecipesSucces, FETCH_RECIPES } from '../actions/recipes';

export default (store) => (next) => (action) => {
  next(action);
  const { dispatch } = store;
  console.log('ajaxtime');
  switch (action.type) {
    case FETCH_RECIPES:
      // lancer requete axios
      axios({
        method: 'get',
        url: 'http://localhost:3001/recipes',
      })
        .then((res) => {
          // si je recois la liste
          // dispatcher le succes avec les datas
          const { data } = res;
          console.log(data);
          dispatch(fetchRecipesSucces(data));
        })
        .catch((err) => {
          // sinon dispatch lerreur
          console.log(err);
          dispatch(fetchRecipesError());
        });

      break;
    default:
      break;
  }
};
