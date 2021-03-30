export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
export const LOGIN_INPUT_SUBMIT = 'LOGIN_INPUT_SUBMIT';
export const LOGIN_INPUT_LOGOUT = 'LOGIN_INPUT_LOGOUT';
export const LOGIN_SUCCES = 'LOGIN_SUCCES';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CHECK_AUTH = 'CHECK_AUTH';
export const LOGOUT_SUCCES = 'LOGOUT_SUCCES';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const logoutSucces = () => ({
  type: LOGOUT_SUCCES,
});

export const logoutError = () => ({
  type: LOGOUT_ERROR,
});

export const checkAuth = () => ({
  type: CHECK_AUTH,
});

export const loginInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,

});
export const loginInputSubmit = () => ({
  type: LOGIN_INPUT_SUBMIT,

});
export const loginInputLogout = () => ({
  type: LOGIN_INPUT_LOGOUT,
});

export const loginSucces = (payload) => ({
  type: LOGIN_SUCCES,
  payload,
});
export const loginError = () => ({
  type: LOGIN_ERROR,
});
