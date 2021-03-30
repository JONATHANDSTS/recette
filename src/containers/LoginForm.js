import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { loginInputChange, loginInputLogout, loginInputSubmit } from '../actions/user';

const mapSate = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  loggedMessage: state.user.loggedMessage,
  loading: state.user.loading,

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
    dispatch(loginInputSubmit());
    console.log('login');
  },
  handleLogout: () => {
    dispatch(loginInputLogout());
    // console.log('logout');
  },
});

export default connect(mapSate, mapDispatch)(LoginForm);
