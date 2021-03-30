import {
  LOGIN_INPUT_CHANGE,
  LOGIN_INPUT_SUBMIT,
  LOGIN_INPUT_LOGOUT,
  LOGIN_SUCCES,
  LOGIN_ERROR,
  CHECK_AUTH,
  LOGOUT_SUCCES,
  LOGOUT_ERROR,
} from '../actions/user';

const initialState = {
  email: 'acidman@herocorp.io',
  password: 'fructis',
  isLogged: false,
  loggedMessage: 'bienvenue lili',
  loading: false,
  pseudo: '',

};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGOUT_SUCCES:
      return {
        ...state,
        isLogged: false,
        pseudo: '',
        loggedMessage: '',
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        loading: false,

      };
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };

    case LOGIN_INPUT_SUBMIT:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCES:
      return {
        ...state,
        loading: false,
        isLogged: true,
        pseudo: action.payload.pseudo,
        loggedMessage: `Bienvenue ${action.payload.pseudo}`,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        isLogged: false,
        pseudo: '',
        loggedMessage: '',
      };
    default:
      return state;
  }
};

export default user;
