import { connect } from 'react-redux';
import Error from '../components/ErrorMessages';

const mapSate = (state) => ({
  message: state.recipes.error,

});

const mapDispatch = null;

export default connect(mapSate, mapDispatch)(Error);
