import axios from 'axios';

import { fetchRecipesError, fetchRecipesSucces, FETCH_RECIPES } from '../actions/recipes';
import {
  LOGIN_INPUT_SUBMIT, loginSucces, loginError, LOGIN_INPUT_LOGOUT, CHECK_AUTH, LOGOUT_SUCCES, logoutSucces, logoutError,
} from '../actions/user';

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
          // console.log(data);
          dispatch(fetchRecipesSucces(data));
        })
        .catch((err) => {
          // sinon dispatch lerreur
          dispatch(fetchRecipesError());
        });

      break;
    case LOGIN_INPUT_SUBMIT:
      axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        withCredentials: true, // pour que le serveur sache quel client je suis
        data: {
          // puisque on est dans middleware on a acces au store
          // on peut faire donc store.getState contient le state= object qui contient tout le state
          email: store.getState().user.email,
          password: store.getState().user.password,
        },
      })
        .then((res) => {
          const serverResponse = res.data;
          dispatch(loginSucces(serverResponse));
          console.log(serverResponse);
        })
        .catch((err) => {
          dispatch(loginError());
          console.error(err);
        });
      break;
    case CHECK_AUTH:
      axios({
        method: 'post',
        url: 'http://localhost:3001/isLogged',
        withCredentials: true,
      })
        .then((res) => {
          const { data } = res;
          // si je suis connecete
          if (data.logged) {
            dispatch(loginSucces(data));
          }
          // sinon rien
        })
        .catch((err) => {
          console.error(err);
        });
      break;

    case LOGIN_INPUT_LOGOUT:
      axios({
        method: 'post',
        url: 'http://localhost:3001/logout',
        withCredentials: true,
      })
        .then((res) => {
          dispatch(logoutSucces());
          console.log(res.data);
        })
        .catch((err) => {
          dispatch(logoutError());
          console.error(err);
        });
      break;
    default:
      break;
  }
};
