import Home from '../views/home';
import { connect } from 'react-redux';

const mapState = (state) => ({
  count: state.catModel
});
const mapDispatch = ({ catModel: { addBy, addByAsync } }) => ({
  addByOne: () => addBy(1),
  addByOneAsync: () => addByAsync(1)
});
export default connect(
  mapState,
  mapDispatch
)(Home);
