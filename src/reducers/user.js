import { LOGIN_INPUT_CHANGE, LOGIN_INPUT_SUBMIT, LOGIN_INPUT_LOGOUT} from '../actions/user';

const initialState = {
  email: 'test@gmail',
  password: '1234',
  isLogged: false,
  loggedMessage: 'bienvenue lili',

};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default user;
