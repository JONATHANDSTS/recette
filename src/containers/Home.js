import { connect } from 'react-redux';
import Home from '../components/Home';
import { GetHomeData } from '../reducers/recipes';

const mapSate = (state) => ({
  list: GetHomeData(state.recipes.list),

});

const mapDispatch = null;

export default connect(mapSate, mapDispatch)(Home);