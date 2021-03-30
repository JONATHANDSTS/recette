import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { loginInputChange, loginInputLogout, loginInputSubmit } from '../actions/user';

const mapSate = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  loggedMessage: state.user.loggedMessage,

});

const mapDispatch = (dispatch) => ({
  changeField: (value, name) => {
    const object = {
      [name]: value,
    };
    dispatch(loginInputChange(object));
    // console.log('changefield', object);
  },
  handleLogin: () => {
    console.log('login');
  },
  handleLogout: () => {
    console.log('logout');
  },
});

export default connect(mapSate, mapDispatch)(LoginForm);
