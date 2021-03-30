import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

const mapSate = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  loggedMessage: state.user.loggedMessage,

});

const mapDispatch = (action) => ({
  changeField: (value, name) => {
    console.log('changefield', value, name);
  },
  handleLogin: () => {
    console.log('login');
  },
  handleLogout: () => {
    console.log('logout');
  },
});

export default connect(mapSate, mapDispatch)(LoginForm);
