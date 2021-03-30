const initialState = {
  email: 'test@gmail',
  password: '1234',
  isLogged: false,
  loggedMessage: 'bienvenue lili',

};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default user;
